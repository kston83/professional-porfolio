#!/bin/bash
# Blocks commits and pushes that would move `main` directly.
#
# Adapted from the git-guardrails-claude-code skill's block-dangerous-git.sh.
# The stock script blocks `git push` outright, which would break this repo's
# feature-branch workflow — every branch would be unpushable. This variant is
# branch-aware: work freely on a feature branch, never touch main directly.
#
# See CLAUDE.md § Workflow for the convention this enforces.
#
# Escape hatch: set ALLOW_MAIN_WRITE=1 in the environment to bypass.

INPUT=$(cat)

# Extract the command and the payload's cwd in one pass. Deliberately NOT via
# jq: jq is not installed on every machine that runs this repo, and a hook
# that silently fails open is worse than no hook — it looks installed while
# blocking nothing. node ships with any machine that can run this project. If
# even that is missing, fall back to matching against the raw JSON payload,
# which still contains the command text (branch resolution then falls back
# too, per the cwd fallback order below).
#
# Joined with \x1f (ASCII unit separator), not a newline: commit commands in
# this repo routinely carry multi-line heredoc bodies, and splitting a
# two-field newline-joined string by line number would silently misparse the
# first newline inside COMMAND as the field boundary, corrupting PAYLOAD_CWD.
# \x1f can't appear in JSON-decoded text and bash param expansion (unlike
# `sed -n Np`) doesn't care how many newlines COMMAND itself contains.
PARSED=$(printf '%s' "$INPUT" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const j=JSON.parse(s);process.stdout.write((j?.tool_input?.command??"")+"\x1f"+(j?.cwd??""))}catch(e){}})' 2>/dev/null)
COMMAND="${PARSED%%$'\x1f'*}"
PAYLOAD_CWD="${PARSED#*$'\x1f'}"
[ -z "$COMMAND" ] && COMMAND="$INPUT"

# Not a git command, or an explicit override — nothing to do.
case "$COMMAND" in
  *git*) ;;
  *) exit 0 ;;
esac
[ "$ALLOW_MAIN_WRITE" = "1" ] && exit 0

# Resolve the branch from where the command actually runs, not from the
# shared checkout: a worktree-isolated agent's cwd is its own worktree, which
# can be on a different branch than CLAUDE_PROJECT_DIR's checkout. Fallback
# order when the payload's cwd is unusable: this hook process's own cwd ('.')
# is closer to correct than the shared checkout in every case where they
# differ, so it comes before CLAUDE_PROJECT_DIR, which is the last resort so
# the script never fails to resolve *some* branch.
REPO_DIR="${PAYLOAD_CWD:-.}"
BRANCH=$(git -C "$REPO_DIR" symbolic-ref --quiet --short HEAD 2>/dev/null)
if [ -z "$BRANCH" ]; then
  REPO_DIR="${CLAUDE_PROJECT_DIR:-.}"
  BRANCH=$(git -C "$REPO_DIR" symbolic-ref --quiet --short HEAD 2>/dev/null)
fi

block() {
  echo "BLOCKED: $1" >&2
  echo "" >&2
  echo "This repo requires a feature branch and a pull request; main is protected." >&2
  echo "  git checkout -b <short-slug>   # branch first, then commit" >&2
  echo "  gh pr create" >&2
  echo "See CLAUDE.md § Workflow. Override with ALLOW_MAIN_WRITE=1 if you truly mean it." >&2
  exit 2
}

# A push that names main as its destination, from any branch.
# Matches: push origin main | push origin HEAD:main | push -f origin foo:main
if echo "$COMMAND" | grep -qE '\bgit[[:space:]]+push\b'; then
  if echo "$COMMAND" | grep -qE '\bgit[[:space:]]+push\b.*(\bmain\b|:main\b)'; then
    block "'$COMMAND' pushes directly to main."
  fi
  # A bare `git push` while main is checked out resolves to main too.
  if [ "$BRANCH" = "main" ]; then
    block "'$COMMAND' would push main (main is the checked-out branch)."
  fi
fi

# Commits land on whatever is checked out.
if [ "$BRANCH" = "main" ] && echo "$COMMAND" | grep -qE '\bgit[[:space:]]+commit\b'; then
  block "'$COMMAND' would commit onto main."
fi

exit 0
