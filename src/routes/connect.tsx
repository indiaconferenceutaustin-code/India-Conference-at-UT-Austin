import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Instagram, Youtube, Facebook, Twitter, Linkedin, Mail, Globe } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/company/utaustinindiaconf", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/utindiaconf", icon: Twitter, label: "X" },
  { href: "https://www.instagram.com/utindiaconf", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@utindiaconf", icon: Youtube, label: "YouTube" },
  { href: "https://www.facebook.com/people/India-Conference-at-UT-Austin/61591709834941/", icon: Facebook, label: "Facebook" },
  { href: "mailto:indiaconferenceutaustin@gmail.com", icon: Mail, label: "Email" },
  { href: "https://india-conference-at-ut-austin.onrender.com/", icon: Globe, label: "Website" },
];

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — India Conference at UT Austin" },
      {
        name: "description",
        content:
          "Register, contact the team, join the newsletter, or apply to volunteer with the India Conference at UT Austin.",
      },
      { property: "og:title", content: "Connect with the India Conference" },
      {
        property: "og:description",
        content: "Register, contact, subscribe, or join the team.",
      },
    ],
  }),
  component: Connect,
});

function Connect() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Register, subscribe, or join the team."
        lede="Whether you're attending, volunteering, or applying to organize — start here."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Send us a message.</h2>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Name
                </span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-accent transition-colors"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Email
                </span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-accent transition-colors"
                />
              </label>
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Affiliation
              </span>
              <input
                type="text"
                placeholder="University, company, or organization"
                className="mt-2 w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-accent transition-colors"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Message
              </span>
              <textarea
                rows={5}
                required
                className="mt-2 w-full border border-border bg-transparent p-3 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="px-6 py-3 border border-border font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 border border-border">
            <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
              Register
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">
              UTAIC 2026 — April 10.
            </h3>
            <p className="text-muted text-sm mb-6">
              GSB 2.124, McCombs School of Business. Doors open 1 PM.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-3 bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Join Waitlist
            </a>
          </div>

          <div className="p-8 border border-border">
            <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
              Newsletter
            </div>
            <p className="text-sm text-muted mb-4">
              Quarterly dispatches from the conference team, plus early access to
              speaker announcements.
            </p>
            <form
              className="flex border-b border-foreground/20 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-sm w-full focus:outline-none"
              />
              <button type="submit" className="text-xs font-bold uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>

          <div className="p-8 border border-border">
            <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
              Join the Team
            </div>
            <p className="text-sm text-muted mb-4">
              Undergraduate and graduate applications open every September.
            </p>
            <a
              href="#"
              className="inline-block border-b-2 border-accent pb-1 text-xs font-bold uppercase tracking-widest"
            >
              Application Portal →
            </a>
          </div>

          <div className="p-8 bg-secondary text-foreground">
            <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
              Contact & Follow
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="flex items-center justify-center p-2.5 border border-white/10 hover:bg-white/10 hover:border-accent hover:text-accent transition-colors"
                  >
                    <Icon className="size-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
