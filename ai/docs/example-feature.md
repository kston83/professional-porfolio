# Feature: [Feature Name]

## Overview
Brief description of the feature, what problem it solves, and why it was added.

## Related Documentation
- **Requirements**: See `ai/prd.md` for product requirements
- **Implementation Plan**: See `ai/plan.md` for development phases

## Implementation Details

### Data Model
Describe any new types or interfaces added to `src/data/content.ts`:

```typescript
export interface ExampleType {
  id: string;
  title: string;
  description: string;
}
```

### HTML Structure
Describe any changes to `index.html`:

```html
<section class="section" id="example">
  <div class="section-label">0X — Example</div>
  <h2 class="section-title">Example <em>title</em>.</h2>
  <div id="example-content"></div>
</section>
```

### Script Changes
Describe any new or modified TypeScript modules:

- **render.ts**: Added `renderExample()` function
- **commands.ts**: Added `example` command
- **content.ts**: Added `ExampleType` interface and `examples` array

### Style Changes
Describe any new CSS added to `src/styles/main.css`:

- New `.example-*` class styles
- Responsive adjustments at 768px and 480px

## Usage

### Updating Content
To add a new example item, edit `src/data/content.ts`:

```typescript
export const examples: ExampleType[] = [
  { id: "1", title: "Example", description: "Description here" },
];
```

### Terminal Command
The `example` terminal command displays a summary. See `src/scripts/commands.ts`.

## Architecture Decisions

### Why [Decision]?
Explain the reasoning behind key implementation choices.

## Testing Checklist
- [ ] TypeScript compiles (`npm run typecheck`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Renders correctly on desktop
- [ ] Responsive at 768px breakpoint
- [ ] Responsive at 480px breakpoint
- [ ] Terminal command works
- [ ] Content updates from `content.ts` propagate correctly
