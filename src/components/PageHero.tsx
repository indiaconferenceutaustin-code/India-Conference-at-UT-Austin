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
        <h1 className="mt-6 text-5xl lg:text-7xl font-black tracking-tighter text-balance leading-[0.95]">
          {title}
        </h1>
        {/* Indian Flag Tricolor Strike */}
        <div className="flex items-center gap-1.5 mt-6 h-1 w-24">
          <div className="bg-[#FF671F] h-full w-full rounded-sm"></div>
          <div className="bg-white/80 h-full w-full rounded-sm"></div>
          <div className="bg-[#046A38] h-full w-full rounded-sm"></div>
        </div>
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
