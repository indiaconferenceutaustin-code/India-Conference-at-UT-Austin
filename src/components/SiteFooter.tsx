import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Linkedin, Mail, Globe } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { href: "https://www.linkedin.com/company/utaustinindiaconf", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/utindiaconf", icon: XIcon, label: "X" },
  { href: "https://www.instagram.com/utindiaconf", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@utindiaconf", icon: Youtube, label: "YouTube" },
  { href: "https://www.facebook.com/people/India-Conference-at-UT-Austin/61591709834941/", icon: Facebook, label: "Facebook" },
  { href: "mailto:indiaconferenceutaustin@gmail.com", icon: Mail, label: "Email" },
  { href: "https://india-conference-at-ut-austin.onrender.com/", icon: Globe, label: "Website" },
];

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
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s, idx) => {
              const Icon = s.icon;
              // Tricolor sequence: Saffron (0), White (1), Green (2)
              const tricolorStyles = [
                "text-[#FF671F] border-[#FF671F]/30 hover:bg-[#FF671F] hover:text-[#050505] hover:border-[#FF671F]",
                "text-white/80 border-white/20 hover:bg-white hover:text-[#050505] hover:border-white",
                "text-[#046A38] border-[#046A38]/30 hover:bg-[#046A38] hover:text-white hover:border-[#046A38]",
              ];
              const styleClass = tricolorStyles[idx % 3];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`size-8 grid place-items-center border rounded-full transition-all duration-300 ${styleClass}`}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">
            Explore
          </h5>
          <ul className="text-xs space-y-2 text-muted">
            <li><Link to="/conference" className="hover:text-accent">Conference Program</Link></li>
            <li><Link to="/about" className="hover:text-accent">Student Team</Link></li>
            <li><Link to="/community" className="hover:text-accent">Get Involved</Link></li>
            <li><Link to="/chronicle" className="hover:text-accent">The Chronicle</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">
            Stay Informed
          </h5>
          <div className="font-mono text-xs text-accent uppercase tracking-widest">
            Coming Soon!
          </div>
          <p className="text-[11px] text-muted mt-2 leading-relaxed">
            Our newsletters and dispatches will be launching soon. Stay tuned.
          </p>
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
