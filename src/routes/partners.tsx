import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — UT Austin India Conference" },
      {
        name: "description",
        content:
          "Our partners: Consulate General of India Houston, South Asia Institute, Texas McCombs, Clements Center, Strauss Center, Global Sustainability Leadership Institute, and Texas Global.",
      },
    ],
  }),
  component: Partners,
});

const partners = [
  {
    name: "Consulate General of India, Houston",
    role: "India's senior diplomatic representation across the American South, supporting the inaugural convening.",
  },
  {
    name: "South Asia Institute",
    role: "The University of Texas at Austin's home for South Asian scholarship and programming.",
  },
  {
    name: "Texas McCombs",
    role: "Host school and lead academic partner. The 2026 conference convenes in GSB 2.124.",
  },
  {
    name: "Clements Center for National Security",
    role: "UT Austin's hub for strategic studies, policy, and security programming.",
  },
  {
    name: "Strauss Center for International Security and Law",
    role: "International law and geopolitics research at UT Austin.",
  },
  {
    name: "Global Sustainability Leadership Institute",
    role: "UT Austin's institute driving cross-disciplinary work on climate and sustainable growth.",
  },
  {
    name: "Texas Global",
    role: "The University of Texas at Austin's international engagement office.",
  },
];

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Thanks to our partners who made this possible."
        lede="The inaugural UT Austin India Conference is convened with the institutions that define the university's global reach and its engagement with India."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {partners.map((p) => (
            <div key={p.name} className="bg-background p-8">
              <h3 className="text-xl font-bold tracking-tight mb-3">{p.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs text-accent mb-4">GET INVOLVED</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Partner with UTAIC.
            </h2>
            <p className="text-background/70 leading-relaxed">
              We welcome new academic collaborators, cross-institutional research
              partnerships, and sponsors for future editions of the conference.
            </p>
          </div>
          <div>
            <Link
              to="/connect"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
