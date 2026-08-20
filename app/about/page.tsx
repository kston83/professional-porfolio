import { PageFrame } from "@/components/layout/page-frame";

export default function AboutPage() {
  return (
    <PageFrame>
      <div>
        <h1 className="font-display text-display-sm leading-none text-ink sm:text-display-md">
          About
        </h1>
        <p className="mt-4 type-chrome text-muted-ink">Bio coming soon.</p>
      </div>
    </PageFrame>
  );
}
