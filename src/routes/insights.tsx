import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "India Insights — UT Austin India Conference" },
      {
        name: "description",
        content:
          "Themes and readings from the eight sessions of UTAIC 2026 — macroeconomy, AI, the Indo–US–Texas corridor, sustainability, happiness, and language.",
      },
    ],
  }),
  component: Insights,
});

const threads = [
  {
    category: "Macroeconomy",
    title: "One Sixth of Humanity, One Economic Story",
    excerpt:
      "Tracing the arc from liberalisation to a $4 trillion economy — and asking what the next $4 trillion demands.",
    session: "Session 01",
  },
  {
    category: "Technology & Culture",
    title: "Labels of Perception in a Post-AI World",
    excerpt:
      "As image generation and synthetic media mature, what remains distinctly human in storytelling and visual truth?",
    session: "Session 02",
  },
  {
    category: "Geopolitics",
    title: "The Indo–US–Texas Growth Triangle",
    excerpt:
      "$17.9B in bilateral trade and a Texas that has quietly become the primary driver of a strategic corridor.",
    session: "Session 03",
  },
  {
    category: "Well-being",
    title: "The Happiness Hypothesis",
    excerpt:
      "What ancient Indian wisdom and modern behavioural science together reveal about the pursuit of a good life.",
    session: "Session 04",
  },
  {
    category: "AI & Digital Infrastructure",
    title: "A Brave New World: UPI, Aadhaar, and the AI Race",
    excerpt:
      "From digital public infrastructure to an $18B semiconductor push — can India translate digital scale into AI leadership?",
    session: "Session 05",
  },
  {
    category: "Language & Identity",
    title: "Whose Language Is It Anyway",
    excerpt:
      "How Hindi digital media, literature, and language politics are shaping the identity of a new India.",
    session: "Session 06",
  },
  {
    category: "Sustainability",
    title: "Walk This Way — Growth Without Burning the Planet",
    excerpt:
      "India's toughest trade-offs: energy access vs emissions, growth vs equity, ambition vs execution.",
    session: "Session 07",
  },
  {
    category: "Governance",
    title: "Accelerating India's Development",
    excerpt:
      "An evidence-based blueprint for governance reform across Indian states — the case for state capacity.",
    session: "Session 08",
  },
];

const categories = [
  "All",
  "Macroeconomy",
  "Geopolitics",
  "Technology & Culture",
  "AI & Digital Infrastructure",
  "Sustainability",
  "Language & Identity",
  "Governance",
  "Well-being",
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="India Insights"
        title="Eight threads through the palimpsest."
        lede="Reading notes, session backgrounders, and further research from the UTAIC 2026 program."
      />

      <section className="max-w-7xl mx-auto px-6 py-8 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {threads.map((a) => (
            <article key={a.title} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-secondary mb-6 grid place-items-center group-hover:opacity-80 transition-opacity">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {a.category}
                </span>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {a.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight leading-tight group-hover:underline underline-offset-4">
                  {a.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{a.excerpt}</p>
                <div className="pt-2 font-mono text-[10px] text-muted uppercase tracking-widest">
                  {a.session}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
