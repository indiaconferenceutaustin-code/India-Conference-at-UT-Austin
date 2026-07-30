import { createFileRoute, Link } from "@tanstack/react-router";
import { PartnersStrip } from "@/components/PartnersStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UT Austin India Conference — India at 100: Decades of Decisions" },
      {
        name: "description",
        content:
          "The inaugural UT Austin India Conference. A pan-university forum on India's next two decades — economy, technology, sustainability, and identity.",
      },
    ],
  }),
  component: Home,
});

const featured = [
  {
    name: "Arvind Subramanian",
    role: "Senior Fellow, Peterson Institute; Former Chief Economic Adviser, Government of India",
    image: "/speakers/arvind-subramanian.jpg",
  },
  {
    name: "Tanvi Madan",
    role: "Senior Fellow & Director, The India Project, Brookings Institution",
    image: "/speakers/tanvi-madan.jpg",
  },
  {
    name: "D.C. Manjunath",
    role: "Consul General of India, Houston",
    image: "/speakers/dc-manjunath.jpg",
  },
];

const stats = [
  { value: "8", label: "Conference Sessions" },
  { value: "20", label: "Speakers & Moderators" },
  { value: "$4T", label: "India Economy" },
  { value: "2047", label: "India's Centennial" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <header className="pt-20 pb-16 px-6 max-w-7xl mx-auto border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 animate-reveal">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Inaugural Edition · April 10, 2026
          </span>
          <h1 className="mt-6 text-5xl lg:text-8xl font-black tracking-tighter text-balance leading-[0.9] mb-8 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-transparent">
            INDIA AT 100:
            <br />
            DECADES
            <br />
            OF DECISIONS
          </h1>
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="font-mono text-xs text-accent">[UTAIC 2026]</span>
            <p className="text-xl max-w-xl font-medium tracking-tight text-pretty">
              A pan-university forum tracing India's macroeconomic journey, the
              Indo–US–Texas corridor, AI leadership, sustainable growth, and the
              language of a new India.
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-end animate-reveal [animation-delay:150ms]">
          <div className="p-6 border border-border bg-card rounded-sm space-y-4">
            <div className="font-mono text-[10px] uppercase text-muted">
              Inaugural Convening
            </div>
            <div className="text-2xl font-bold tracking-tight">
              April 10, 2026
            </div>
            <div className="text-sm text-muted">
              GSB 2.124 · McCombs School of Business, UT Austin. Doors open 1 PM.
            </div>
            <Link
              to="/conference"
              className="block w-full py-3 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
            >
              View Program
            </Link>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-border">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-8 group ${i < stats.length - 1 ? "border-r border-border" : ""}`}
          >
            <div className="font-mono text-3xl font-medium mb-1 group-hover:text-accent transition-colors">
              {s.value}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* Mission + Featured Speakers */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            About UTAIC
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            The UT Austin India Conference was born from a simple observation: a
            university with this depth of engagement with India — across economics,
            engineering, policy, sustainability, and the arts — had no single forum
            to bring those conversations together.
          </p>
          <hr className="w-12 border-foreground" />
          <Link
            to="/about"
            className="inline-block text-xs font-bold border-b-2 border-accent pb-1"
          >
            Read Our Story
          </Link>
        </div>

        <div className="lg:col-span-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Voices</h2>
            <Link
              to="/conference"
              className="text-xs font-bold border-b-2 border-accent pb-1"
            >
              View Full Roster
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((sp) => (
              <div key={sp.name} className="space-y-4 group">
                <div className="aspect-[4/5] bg-secondary outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden rounded-sm relative flex items-center justify-center">
                  {sp.image ? (
                    <img
                      src={sp.image}
                      alt={sp.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {sp.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight transition-colors group-hover:text-accent">{sp.name}</h3>
                  <p className="text-[11px] text-muted leading-tight mt-1">
                    {sp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions preview */}
      <section className="bg-secondary text-foreground py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="font-mono text-xs text-accent mb-6">
                EIGHT SESSIONS
              </div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">
                Across the questions that will define the next century.
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed self-end italic">
              "At the stroke of midnight on August 15, 2047, India will turn 100.
              The choices made over the next two decades — on growth, governance,
              technology, sustainability, and global positioning — will determine
              what kind of century it becomes."
            </p>
          </div>
          <div className="border-t border-white/10">
            {[
              ["#1", "One Sixth Of Humanity", "India's macroeconomic journey"],
              ["#2", "Labels of Perception", "AI, authorship, and visual truth"],
              ["#3", "The Growth Triangle", "The Indo–US–Texas corridor"],
              ["#4", "The Happiness Hypothesis", "Ancient wisdom, modern science"],
              ["#5", "A Brave New World", "India in the global AI ecosystem"],
              ["#6", "Whose Language Is It Anyway", "Stories and identity of new India"],
              ["#7", "Walk This Way", "The future of sustainable growth"],
              ["#8", "Accelerating India's Development", "An evidence-based blueprint"],
            ].map(([num, title, sub]) => (
              <div
                key={num}
                className="grid grid-cols-12 gap-4 py-6 border-b border-white/10 items-baseline hover:bg-white/5 transition-colors"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-accent">
                  {num}
                </div>
                <div className="col-span-10 md:col-span-6 text-lg font-bold tracking-tight">
                  {title}
                </div>
                <div className="col-span-12 md:col-span-5 text-xs text-background/60 md:text-right">
                  {sub}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/conference"
              className="inline-block px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              Full Schedule & Speakers
            </Link>
          </div>
        </div>
      </section>

      <PartnersStrip />
    </>
  );
}
