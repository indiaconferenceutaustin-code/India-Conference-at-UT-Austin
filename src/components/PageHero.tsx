import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="pt-20 pb-16 px-6 max-w-7xl mx-auto border-b border-border">
      <div className="animate-reveal">
        <span className="font-mono text-xs text-accent uppercase tracking-widest">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-5xl lg:text-7xl font-black tracking-tighter text-balance leading-[0.95] bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-transparent">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 text-xl max-w-2xl font-medium tracking-tight text-pretty text-muted">
            {lede}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
