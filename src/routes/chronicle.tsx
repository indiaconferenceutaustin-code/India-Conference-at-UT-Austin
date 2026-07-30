import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/chronicle")({
  head: () => ({
    meta: [
      { title: "Chronicle — UT Austin India Conference" },
      {
        name: "description",
        content: "Chronicle: News, insights, research, spotlights, and future perspectives on India's centennial journey.",
      },
    ],
  }),
  component: Chronicle,
});

const categories = [
  { emoji: "📰", name: "News", desc: "Latest developments and announcements from the conference and community." },
  { emoji: "🎙️", name: "Speaker Spotlights", desc: "In-depth profiles and highlights of our key speakers." },
  { emoji: "🤝", name: "Partner Spotlights", desc: "Highlighting our academic and institutional collaborators." },
  { emoji: "👥", name: "Meet the Team", desc: "Stories and journeys of the student organizers behind UTAIC." },
  { emoji: "🇮🇳", name: "Culture & Heritage", desc: "Exploring the rich cultural tapestry and heritage of India." },
  { emoji: "🌏", name: "India Today", desc: "Contemporary socio-economic and political discussions." },
  { emoji: "🏛️", name: "History & Society", desc: "Understanding the foundations of India's historical journey." },
  { emoji: "💡", name: "Research & Innovation", desc: "Cutting-edge academic research and pioneering ideas." },
  { emoji: "📊", name: "Business & Entrepreneurship", desc: "Startups, business models, and economic trends." },
  { emoji: "⚙️", name: "Technology & AI", desc: "India's growth and positioning in the global tech ecosystem." },
  { emoji: "🌱", name: "Sustainability", desc: "Energy transition, climate action, and green growth." },
  { emoji: "🎓", name: "Student Voices", desc: "Perspectives, ideas, and papers from undergraduate & graduate students." },
  { emoji: "🎤", name: "Alumni Voices", desc: "Insights from Longhorns shaping fields globally." },
  { emoji: "💬", name: "Perspectives", desc: "Diverse opinions and viewpoints from global stakeholders." },
  { emoji: "✍️", name: "Essays & Commentary", desc: "Long-form essays analyzing key national decisions." },
  { emoji: "🎥", name: "Interviews", desc: "Conversations with policy makers, scholars, and business leaders." },
  { emoji: "📸", name: "Event Recaps", desc: "Highlights, summaries, and media from conference sessions." },
  { emoji: "📚", name: "Resources", desc: "Data, briefs, and reports compiled by our research team." },
  { emoji: "🌍", name: "Global India", desc: "Exploring the Indian diaspora and international relations." },
  { emoji: "🚀", name: "Future of India", desc: "Projections and strategic visions for the 2047 centennial." },
];

function Chronicle() {
  return (
    <>
      <PageHero
        eyebrow="Publication"
        title="The Chronicle"
        lede="A multidisciplinary archive recording the voices, research, and decisions that will shape India's centennial path."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border text-center">
        <div className="p-12 border border-accent/20 bg-card rounded-md max-w-3xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-50 pointer-events-none" />
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-4">
            Status: Upcoming Launch
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Chronicle is Coming Soon
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto">
            We are curating high-impact essays, interviews, and research from scholars, leaders, and students. Sign up for updates to receive the inaugural issue.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
            Categories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">What we are writing about.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div
              key={c.name}
              className="bg-card/30 border border-white/5 hover:border-accent/30 rounded-md p-6 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-border/20 group-hover:bg-accent transition-colors" />
              <div>
                <div className="text-3xl mb-4">{c.emoji}</div>
                <h3 className="text-base font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
