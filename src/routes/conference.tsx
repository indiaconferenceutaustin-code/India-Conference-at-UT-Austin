import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/conference")({
  head: () => ({
    meta: [
      { title: "Conference — UTAIC 2026" },
      {
        name: "description",
        content:
          "Eight sessions, twenty speakers, and one question — what kind of century will India shape? Full program of the inaugural UT Austin India Conference.",
      },
    ],
  }),
  component: Conference,
});

const sessions = [
  {
    num: "01",
    title: "One Sixth Of Humanity",
    blurb:
      "How India became a $4 trillion economy and what comes next. A fireside chat.",
    speakers: ["Arvind Subramanian", "Devesh Kapur", "Dilawar Syed (moderator)"],
  },
  {
    num: "02",
    title: "Labels of Perception",
    blurb:
      "AI is reshaping labor, authorship, and visual truth. What remains distinctly human in storytelling?",
    speakers: ["Aranya Sahay", "Alka Bhanot"],
  },
  {
    num: "03",
    title: "The Growth Triangle",
    blurb:
      "The Indo–US–Texas corridor and $17.9B in bilateral trade. How this triangle shapes the next century of innovation.",
    speakers: ["D.C. Manjunath", "Tanvi Madan", "Aaron Demerson", "Vijay Mahajan"],
  },
  {
    num: "04",
    title: "The Happiness Hypothesis",
    blurb:
      "What if India's greatest export is a science of well-being? Ancient wisdom meets modern behavioral science.",
    speakers: ["Raj Raghunathan"],
  },
  {
    num: "05",
    title: "A Brave New World",
    blurb:
      "From UPI to Aadhaar to an $18B semiconductor push — can India translate digital ambition into AI leadership?",
    speakers: ["Gaurav Tembey", "Ashish Agarwal", "Sanjay Banerjee"],
  },
  {
    num: "06",
    title: "Whose Language Is It Anyway",
    blurb:
      "Language, stories, and identity in new India. Session in Hindi.",
    speakers: ["Saurabh Dwivedi", "Dalpat Rajpurohit"],
  },
  {
    num: "07",
    title: "Walk This Way",
    blurb:
      "India is the world's fifth-largest economy and third-largest emitter. Can it grow without burning the planet?",
    speakers: ["Sonal Shah", "Ashish Gupta", "Meeta Kothare"],
  },
  {
    num: "08",
    title: "Accelerating India's Development",
    blurb:
      "An evidence-based blueprint for governance reform across Indian states.",
    speakers: ["Karthik Muralidharan", "Kishore Gawande"],
  },
];

const schedule = [
  {
    day: "April 9",
    date: "Rowling Hall 5.402",
    items: [
      {
        time: "6:00–8:00 PM",
        title: "Humans in the Loop — Film Screening",
        detail: "Aranya Sahay's debut, followed by Q&A and mixer. Free entry, limited seats.",
      },
    ],
  },
  {
    day: "April 10",
    date: "GSB 2.124",
    items: [
      { time: "10:30–11:30 AM", title: "Indian Collection at the Harry Ransom Center", detail: "Curated papers and letters about India." },
      { time: "11:30 AM–12:30 PM", title: "Pre-Conference Reception with Texas Global", detail: "Invite-only closed-door reception with UT faculty, diplomats, and speakers." },
      { time: "1:00 PM", title: "Doors Open · Check-in Begins", detail: "" },
      { time: "1:30–2:15 PM", title: "One Sixth Of Humanity", detail: "Subramanian · Kapur · Syed" },
      { time: "2:20–3:00 PM", title: "Labels of Perception", detail: "Sahay · Bhanot" },
      { time: "3:05–3:55 PM", title: "The Growth Triangle", detail: "Manjunath · Madan · Demerson · Mahajan" },
      { time: "4:05–4:45 PM", title: "Walk This Way", detail: "Shah · Gupta · Kothare" },
      { time: "4:50–5:30 PM", title: "Accelerating India's Development", detail: "Muralidharan · Gawande" },
      { time: "5:35–6:15 PM", title: "A Brave New World", detail: "Tembey · Agarwal · Banerjee" },
      { time: "6:25–6:55 PM", title: "The Happiness Hypothesis", detail: "Raghunathan" },
      { time: "7:05–7:50 PM", title: "Whose Language Is It Anyway (Hindi)", detail: "Dwivedi · Rajpurohit" },
      { time: "After", title: "Reception", detail: "" },
    ],
  },
];

const speakers = [
  { name: "Arvind Subramanian", role: "Peterson Institute; Former Chief Economic Adviser, GoI" },
  { name: "Devesh Kapur", role: "Starr Foundation Professor, Johns Hopkins SAIS" },
  { name: "Dilawar Syed", role: "McCombs & LBJ; former US Cabinet Official" },
  { name: "Aranya Sahay", role: "Filmmaker · Director, Humans in the Loop" },
  { name: "Alka Bhanot", role: "Co-Founder, Indie Meme Film Festival" },
  { name: "D.C. Manjunath", role: "Consul General of India, Houston" },
  { name: "Tanvi Madan", role: "Director, The India Project, Brookings" },
  { name: "Aaron Demerson", role: "President & CEO, Texas Economic Development Corp." },
  { name: "Vijay Mahajan", role: "Harbin Centennial Chair, McCombs" },
  { name: "Raj Raghunathan", role: "Zale Centennial Professor of Business, UT Austin" },
  { name: "Gaurav Tembey", role: "Managing Director & Partner, BCG" },
  { name: "Sanjay Banerjee", role: "Semiconductor & AI ecosystem leader" },
  { name: "Ashish Agarwal", role: "AI & digital infrastructure practitioner" },
  { name: "Saurabh Dwivedi", role: "Founding Editor, The Lallantop" },
  { name: "Dalpat Rajpurohit", role: "Assistant Professor, College of Liberal Arts, UT" },
  { name: "Sonal Shah", role: "Philanthropy & sustainable growth leader" },
  { name: "Ashish Gupta", role: "Climate-tech investor" },
  { name: "Meeta Kothare", role: "McCombs; sustainability & impact" },
  { name: "Karthik Muralidharan", role: "Tata Chancellor's Professor of Economics, UC San Diego" },
  { name: "Kishore Gawande", role: "Chair, BGS Department, McCombs" },
];

function Conference() {
  return (
    <>
      <PageHero
        eyebrow="UTAIC 2026 · Inaugural"
        title="Eight sessions. One question about the next century."
        lede="April 10, 2026 · GSB 2.124 · McCombs School of Business. Pre-conference programming at Rowling Hall and the Harry Ransom Center on April 9–10."
      />

      {/* Sessions */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
            Sessions
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">
            The 2026 program.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {sessions.map((s) => (
            <div key={s.num} className="bg-background p-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-accent">#{s.num}</span>
                <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">{s.blurb}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 pt-3 border-t border-border">
                {s.speakers.map((sp) => (
                  <span
                    key={sp}
                    className="font-mono text-[10px] uppercase tracking-widest text-foreground"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
            Schedule
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">April 9–10, 2026</h2>
        </div>
        <div className="space-y-16">
          {schedule.map((d) => (
            <div key={d.day} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <div className="font-mono text-xs text-accent mb-2">{d.day}</div>
                <div className="text-xl font-bold tracking-tight">{d.date}</div>
              </div>
              <div className="lg:col-span-9 border-t border-border">
                {d.items.map((it) => (
                  <div
                    key={it.time + it.title}
                    className="grid grid-cols-12 gap-4 py-4 border-b border-border items-baseline hover:bg-secondary/50 transition-colors"
                  >
                    <div className="col-span-12 md:col-span-3 font-mono text-xs text-muted">
                      {it.time}
                    </div>
                    <div className="col-span-12 md:col-span-5 text-sm font-bold tracking-tight">
                      {it.title}
                    </div>
                    <div className="col-span-12 md:col-span-4 text-xs text-muted md:text-right">
                      {it.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
            Speakers
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">
            Twenty voices across policy, economics, technology, and the arts.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((s) => (
            <div key={s.name} className="space-y-3">
              <div className="aspect-[4/5] bg-secondary rounded-sm grid place-items-center">
                <span className="font-mono text-xs text-muted">
                  {s.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="text-sm font-bold tracking-tight">{s.name}</div>
                <div className="text-[11px] text-muted leading-tight mt-1">
                  {s.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
