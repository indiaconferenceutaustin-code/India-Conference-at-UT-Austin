import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — UT Austin India Conference" },
      {
        name: "description",
        content:
          "Pre-conference programming, the student network, and the community around UTAIC 2026.",
      },
    ],
  }),
  component: Community,
});

const preConference = [
  {
    label: "Pre-Conference · April 9",
    title: "Humans in the Loop — Screening",
    body: "A special screening of Aranya Sahay's acclaimed documentary on labour, ethics, and what happens when human judgment is reduced to a line item in an AI pipeline. Followed by Q&A with the director and a mixer. Rowling Hall 5.402, 6:00–8:00 PM. Free entry; seats limited.",
  },
  {
    label: "Pre-Conference · April 10",
    title: "Indian Papers at the Harry Ransom Center",
    body: "A self-guided visit to a curated selection of rare papers, letters, and documents related to India and Indians, drawn from one of the world's great repositories of literary and cultural manuscripts. Open to all conference attendees and speakers.",
  },
];

const pillars = [
  {
    label: "Student Team",
    title: "A pan-university effort.",
    body: "Led by student chair Pranjal Awasthi, drawing organisers from McCombs, LBJ, Cockrell, Liberal Arts, and the South Asia Institute.",
  },
  {
    label: "Faculty Advisors",
    title: "Guided by senior UT faculty.",
    body: "Urooj Khan, Vijay Mahajan, Kishore Gawande, Syed Akbar Hyder, and Dilawar Syed anchor the conference's intellectual direction.",
  },
  {
    label: "Attendees",
    title: "Students, scholars, and practitioners.",
    body: "The conference is open to the UT community and invited delegates from across the Indo–US–Texas corridor.",
  },
  {
    label: "Continue the Conversation",
    title: "Beyond one afternoon.",
    body: "Reading circles, follow-on salons, and workshops keep the questions raised on April 10 alive year-round.",
  },
];

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

function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="More than one afternoon in April."
        lede="Pre-conference programming, faculty advisors, and a student community that makes UTAIC possible."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
            Pre-Conference
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">Two events. Two ways in.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {preConference.map((e) => (
            <div key={e.title} className="p-8 border border-border bg-card/10 hover:border-accent/40 rounded-sm transition-all duration-300">
              <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
                {e.label}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">{e.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
        {pillars.map((p) => (
          <div key={p.label} className="bg-background p-10 hover:bg-card/20 transition-colors">
            <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
              {p.label}
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">{p.title}</h3>
            <p className="text-muted leading-relaxed text-sm">{p.body}</p>
          </div>
        ))}
      </section>

      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Partners & Sponsors
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Co-sponsored by UT's leading centers.
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            The inaugural conference brings together key institutions driving global scholarship, policy dialogue, and innovation across the Indo–US corridor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, idx) => (
            <div 
              key={p.name} 
              className="bg-card/40 border border-white/5 hover:border-accent/30 rounded-md p-8 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative top colored line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-border group-hover:bg-accent transition-colors" />
              
              <div>
                <div className="font-mono text-xs text-muted mb-4 tracking-wider">
                  PARTNER {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-3 transition-colors group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {p.role}
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
                <span>The Forty Acres</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="bg-secondary/40 text-foreground border-t border-border py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            Get Involved
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Join the Student Organizing Team
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            Undergraduate and graduate applications open every September. Help shape the next generation of academic summits.
          </p>
          <div className="pt-4">
            <a
              href="https://forms.gle/Ko2q6oa6iievi66HA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm shadow-md"
            >
              Application Portal
              <span className="font-mono">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
