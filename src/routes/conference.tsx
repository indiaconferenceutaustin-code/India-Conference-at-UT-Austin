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
    title: "One Sixth of Humanity: Tracing India’s Macroeconomic Journey",
    blurb:
      "India is home to one-sixth of humanity and stands at the center of the global economy, democracy, and geopolitics. As the country approaches its centenary of independence, this fireside conversation explores the policies, institutions, and leadership that will determine whether India can sustain high growth while strengthening democratic governance and expanding opportunity.",
    speakers: ["Arvind Subramanian", "Devesh Kapur", "Dilawar Syed"],
    youtubeUrl: "https://www.youtube.com/watch?v=JL6lVK_Ta-U&t=2585s",
  },
  {
    num: "02",
    title: "Labels of Perception: Art in the Age of Algorithmic Reproduction",
    blurb:
      "Artificial intelligence is transforming how stories are created, consumed, and trusted. From filmmaking and visual media to authorship and creative expression, this conversation examines what remains uniquely human as AI reshapes culture, identity, and the future of storytelling.",
    speakers: ["Aranya Sahay", "Alka Bhanot"],
    youtubeUrl: "https://www.youtube.com/watch?v=RFMaBgGE5UU&t=2s",
  },
  {
    num: "03",
    title: "The Growth Triangle: The Future of the Indo-US-TX Corridor",
    blurb:
      "India, the United States, and Texas are becoming one of the world's most dynamic innovation corridors. This panel explores how trade, investment, advanced manufacturing, talent, and diplomacy are strengthening economic ties—and what this partnership means for the future of global innovation.",
    speakers: ["D.C. Manjunath", "Tanvi Madan", "Aaron Demerson", "Vijay Mahajan"],
    youtubeUrl: "https://www.youtube.com/watch?v=0z4YnO6SVYc",
  },
  {
    num: "04",
    title: "Accelerating India’s Development: Unlocking Human Capital at Scale",
    blurb:
      "India's next stage of development will depend not only on economic growth but also on the quality of governance. This discussion highlights evidence-based reforms, state capacity, and public policy innovations that can improve education, healthcare, public services, and long-term economic opportunity across India.",
    speakers: ["Karthik Muralidharan", "Kishore Gawande"],
    youtubeUrl: "https://www.youtube.com/watch?v=_TFYBPA6MIY",
  },
  {
    num: "05",
    title: "Walk This Way: India and the Future of Sustainable Growth",
    blurb:
      "India is one of the world's fastest-growing economies and among its largest energy consumers. This panel examines whether economic development and climate responsibility can advance together, exploring clean energy, sustainable finance, and the policy choices that will shape India's environmental future.",
    speakers: ["Sonal Shah", "Ashish Gupta", "Meeta Kothare"],
    youtubeUrl: "https://www.youtube.com/watch?v=aHmzlIJefPk",
  },
  {
    num: "06",
    title: "A Brave New World: India’s Position in the Global AI Ecosystem",
    blurb:
      "From digital public infrastructure and artificial intelligence to semiconductors and advanced manufacturing, India is investing in technologies that could define the next generation of economic growth. This discussion examines whether India can transform technological ambition into global leadership while building an inclusive digital future.",
    speakers: ["Gaurav Tembey", "Ashish Agarwal", "Sanjay Banerjee"],
    youtubeUrl: "https://www.youtube.com/watch?v=uEGfyOz8z_c",
  },
  {
    num: "07",
    title: "The Happiness Hypothesis: Unlocking Modern Happiness Through Ancient Wisdom",
    blurb:
      "Can happiness be learned? Drawing from behavioral science, psychology, and India's philosophical traditions, this conversation explores how well-being influences leadership, relationships, productivity, and purpose in an increasingly fast-moving world.",
    speakers: ["Raj Raghunathan"],
    youtubeUrl: "https://www.youtube.com/watch?v=YL7sDOHv7h8",
  },
  {
    num: "08",
    title: "Whose Language Is It: Language, Stories, and Identity of New India (Hindi Session)",
    blurb:
      "Language is more than communication—it shapes culture, identity, politics, and belonging. Conducted in Hindi, this conversation explores the evolving role of language and storytelling in contemporary India and how regional voices are redefining the country's cultural landscape.",
    speakers: ["Saurabh Dwivedi", "Dalpat Rajpurohit"],
    youtubeUrl: "https://www.youtube.com/watch?v=HWwk5G93SvE",
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
  { name: "Arvind Subramanian", role: "Peterson Institute; Former Chief Economic Adviser, GoI", image: "/speakers/arvind-subramanian.jpg" },
  { name: "Devesh Kapur", role: "Starr Foundation Professor, Johns Hopkins SAIS", image: "/speakers/devesh-kapur.jpg" },
  { name: "Dilawar Syed", role: "McCombs & LBJ; former US Cabinet Official", image: "/speakers/dilawar-syed.jpg" },
  { name: "Aranya Sahay", role: "Filmmaker · Director, Humans in the Loop", image: "/speakers/aranya-sahay.jpg" },
  { name: "Alka Bhanot", role: "Co-Founder, Indie Meme Film Festival", image: "/speakers/alka-bhanot.jpg" },
  { name: "D.C. Manjunath", role: "Consul General of India, Houston", image: "/speakers/dc-manjunath.jpg" },
  { name: "Tanvi Madan", role: "Director, The India Project, Brookings", image: "/speakers/tanvi-madan.jpg" },
  { name: "Aaron Demerson", role: "President & CEO, Texas Economic Development Corp.", image: "/speakers/aaron-demerson.jpg" },
  { name: "Vijay Mahajan", role: "Harbin Centennial Chair, McCombs", image: "/speakers/vijay-mahajan.jpg" },
  { name: "Raj Raghunathan", role: "Zale Centennial Professor of Business, UT Austin", image: "/speakers/raj-raghunathan.jpg" },
  { name: "Gaurav Tembey", role: "Semiconductor & AI ecosystem leader", image: "/speakers/gaurav-tembey.jpg" },
  { name: "Sanjay Banerjee", role: "Semiconductor & AI ecosystem leader", image: "/speakers/sanjay-banerjee.avif" },
  { name: "Ashish Agarwal", role: "AI & digital infrastructure practitioner", image: "/speakers/ashish-agarwal.jpg" },
  { name: "Saurabh Dwivedi", role: "Founding Editor, The Lallantop", image: "/speakers/saurabh-dwivedi.webp" },
  { name: "Dalpat Rajpurohit", role: "Assistant Professor, College of Liberal Arts, UT", image: "/speakers/dalpat-rajpurohit.jpg" },
  { name: "Sonal Shah", role: "Philanthropy & sustainable growth leader", image: "/speakers/sonal-shah.jpg" },
  { name: "Ashish Gupta", role: "Climate-tech investor", image: "/speakers/ashish-gupta.jpg" },
  { name: "Meeta Kothare", role: "McCombs; sustainability & impact", image: "/speakers/meeta-kothare.avif" },
  { name: "Karthik Muralidharan", role: "Tata Chancellor's Professor of Economics, UC San Diego", image: "/speakers/karthik-muralidharan.jpg" },
  { name: "Kishore Gawande", role: "Chair, BGS Department, McCombs", image: "/speakers/kishore-gawande.jpg" },
];

function renderSessionImage(num: string, title: string) {
  const numInt = parseInt(num, 10);

  // Session 4: Accelerating India's Development (Governance & Reforms) - SVG
  if (numInt === 4) {
    return (
      <svg
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 400 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="225" fill="oklch(0.96 0.005 60)" />
        {/* Geometric Pillars / Steps */}
        <g fill="oklch(0.55 0.16 45 / 0.15)" stroke="oklch(0.55 0.16 45)" strokeWidth="1.5">
          {/* Step 1 */}
          <rect x="50" y="160" width="60" height="40" rx="2" />
          {/* Step 2 */}
          <rect x="130" y="130" width="60" height="70" rx="2" />
          {/* Step 3 */}
          <rect x="210" y="100" width="60" height="100" rx="2" />
          {/* Step 4 */}
          <rect x="290" y="70" width="60" height="130" rx="2" />
        </g>
        {/* Architectural arches background */}
        <path
          d="M80 200V120C80 100 120 100 120 120V200"
          stroke="oklch(0.55 0.16 45 / 0.3)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M160 200V90C160 70 200 70 200 90V200"
          stroke="oklch(0.55 0.16 45 / 0.3)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M240 200V60C240 40 280 40 280 60V200"
          stroke="oklch(0.55 0.16 45 / 0.3)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Trend line arrow */}
        <path
          d="M60 170L140 140L220 110L300 80"
          stroke="oklch(0.55 0.16 45)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M290 80H300V90" stroke="oklch(0.55 0.16 45)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Session 5: Walk This Way (Sustainability & Climate) - SVG
  if (numInt === 5) {
    return (
      <svg
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        viewBox="0 0 400 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="225" fill="oklch(0.96 0.005 60)" />
        {/* Abstract organic landscape */}
        <path d="M-50 225C100 120 200 180 450 100V225H-50Z" fill="oklch(0.85 0.05 140 / 0.3)" />
        <path d="M-50 225C50 150 250 130 450 160V225H-50Z" fill="oklch(0.75 0.08 135 / 0.2)" />
        {/* Abstract Wind Turbine */}
        <g stroke="oklch(0.55 0.16 45)" strokeWidth="2" strokeLinecap="round">
          <line x1="200" y1="180" x2="200" y2="70" />
          <path d="M200 70L230 50M200 70L170 50M200 70L200 110" />
        </g>
        {/* Geometric Sun */}
        <circle cx="320" cy="60" r="25" fill="oklch(0.85 0.12 75 / 0.4)" stroke="oklch(0.85 0.12 75)" strokeWidth="1.5" />
        {/* Foliage Leaf line art */}
        <path
          d="M80 180C80 120 130 110 130 110C130 110 120 150 80 180Z"
          fill="none"
          stroke="oklch(0.55 0.16 45)"
          strokeWidth="2"
        />
        <path d="M80 180C100 150 120 140 130 110" stroke="oklch(0.55 0.16 45)" strokeWidth="1.5" />
      </svg>
    );
  }

  // All other sessions (1, 2, 3, 6, 7, 8) have image assets
  return (
    <img
      src={`/sessions/session-${numInt}.png`}
      alt={title}
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
    />
  );
}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sessions.map((s) => (
            <div key={s.num} className="group flex flex-col space-y-4 border border-border p-6 bg-card rounded-sm hover:shadow-md transition-all duration-300">
              <div className="aspect-[16/9] bg-secondary outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden rounded-sm relative flex items-center justify-center">
                {renderSessionImage(s.num, s.title)}
              </div>
              <div className="flex-1 flex flex-col justify-between pt-2">
                <div>
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-accent">#{s.num}</span>
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-accent">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-6">{s.blurb}</p>
                </div>
                <div className="flex items-center justify-between gap-4 pt-3 border-t border-border flex-wrap sm:flex-nowrap">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {s.speakers.map((sp) => (
                      <span
                        key={sp}
                        className="font-mono text-[10px] uppercase tracking-widest text-foreground"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                  {s.youtubeUrl && (
                    <a
                      href={s.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-accent/20 bg-accent/5 hover:bg-accent hover:text-accent-foreground text-[10px] font-mono uppercase tracking-wider transition-colors rounded-sm text-accent shrink-0"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Watch
                    </a>
                  )}
                </div>
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
            <div key={s.name} className="space-y-3 group">
              <div className="aspect-[4/5] bg-secondary outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden rounded-sm relative flex items-center justify-center">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-mono text-xs text-muted">
                    {s.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
              </div>
              <div>
                <div className="text-sm font-bold tracking-tight transition-colors group-hover:text-accent">{s.name}</div>
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
