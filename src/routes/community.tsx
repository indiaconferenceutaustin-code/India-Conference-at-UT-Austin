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
            <div key={e.title} className="p-8 border border-border">
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
          <div key={p.label} className="bg-background p-10">
            <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
              {p.label}
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">{p.title}</h3>
            <p className="text-muted leading-relaxed text-sm">{p.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
