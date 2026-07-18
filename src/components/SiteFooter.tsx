import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-background py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h4 className="text-2xl font-bold tracking-tighter mb-4">
            India Conference at UT Austin
          </h4>
          <p className="text-sm text-muted max-w-sm mb-6">
            A student-led initiative fostering dialogue on the most pressing issues
            facing the world's largest democracy.
          </p>
          <div className="flex gap-4">
            {["Li", "Tw", "Ig"].map((s) => (
              <a
                key={s}
                href="#"
                className="size-8 grid place-items-center border border-border rounded-full text-xs hover:bg-foreground hover:text-background transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">
            Explore
          </h5>
          <ul className="text-xs space-y-2 text-muted">
            <li><Link to="/insights" className="hover:text-accent">India Insights</Link></li>
            <li><Link to="/conference" className="hover:text-accent">Conference Program</Link></li>
            <li><Link to="/about" className="hover:text-accent">Student Team</Link></li>
            <li><Link to="/community" className="hover:text-accent">Volunteer Portal</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">
            Stay Informed
          </h5>
          <form className="flex border-b border-foreground/20 pb-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-xs w-full focus:outline-none"
            />
            <button type="submit" className="text-xs font-bold">
              JOIN
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-wrap gap-4 justify-between items-center">
        <span className="text-[10px] text-muted uppercase tracking-widest">
          © 2026 UT Austin India Conference
        </span>
        <span className="text-[10px] text-muted uppercase tracking-widest">
          A student-led academic summit
        </span>
      </div>
    </footer>
  );
}
