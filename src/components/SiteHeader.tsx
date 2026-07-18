import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/about", label: "About" },
  { to: "/conference", label: "Conference" },
  { to: "/insights", label: "Insights" },
  { to: "/community", label: "Community" },
  { to: "/partners", label: "Partners" },
  { to: "/connect", label: "Connect" },
] as const;

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-tighter uppercase font-bold text-accent">
            UT Austin
          </span>
          <div className="h-4 w-px bg-border" />
          <span className="text-xs font-semibold tracking-tight">
            India Conference · UTAIC 2026
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-medium uppercase tracking-widest hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/connect"
            className="px-3 py-1 bg-foreground text-background text-[11px] font-bold uppercase tracking-widest"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
