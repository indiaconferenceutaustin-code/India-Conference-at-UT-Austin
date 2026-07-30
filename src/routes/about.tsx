import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Linkedin, Mail, Globe, Twitter, Instagram, User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — UT Austin India Conference" },
      {
        name: "description",
        content:
          "The story behind the inaugural UT Austin India Conference — a pan-university forum shaped by faculty from McCombs, LBJ, Cockrell, Liberal Arts, and the South Asia Institute.",
      },
    ],
  }),
  component: About,
});

const advisors = [
  {
    name: "Urooj Khan",
    role: "Professor of Accounting; Associate Dean, Hildebrand MBA programs, McCombs",
    image: "/advisors/urooj-khan.jpg",
    links: {
      web: "https://www.mccombs.utexas.edu/faculty-and-research/faculty-directory/profile/?username=uk866",
      email: "urooj.khan@mccombs.utexas.edu",
      linkedin: "https://www.linkedin.com/in/urooj-khan-0b981017/",
    },
  },
  {
    name: "Vijay Mahajan",
    role: "John P. Harbin Centennial Chair in Business, McCombs",
    image: "/advisors/vijay-mahajan.jpg",
    links: {
      web: "https://liberalarts.utexas.edu/southasia/faculty/mahajanv",
      email: "vijay.mahajan@mccombs.utexas.edu",
      linkedin: "https://www.linkedin.com/in/vijay-mahajan-3aa648168/",
    },
  },
  {
    name: "Kishore Gawande",
    role: "Chair, Department of Business, Government & Society, McCombs",
    image: "/advisors/kishore-gawande.jpg",
    links: {
      email: "kishore.gawande@mccombs.utexas.edu",
      linkedin: "https://www.linkedin.com/in/kishore-gawande-9327773/",
    },
  },
  {
    name: "Syed Akbar Hyder",
    role: "Director, South Asia Institute; Meyerson Centennial Chair Fellow",
    image: "/advisors/syed-akbar-hyder.jpg",
    links: {
      web: "https://liberalarts.utexas.edu/rs/faculty/hydersa",
      email: "akbarhyder@utexas.edu",
      linkedin: "https://www.linkedin.com/in/syed-hyder-06ab60210/",
    },
  },
  {
    name: "Dilawar Syed",
    role: "Associate Professor of Instruction, McCombs & LBJ; former US Cabinet Official",
    image: "/advisors/dilawar-syed.jpg",
    links: {
      web: "https://lbj.utexas.edu/dilawar-syed",
      personalWeb: "https://www.dilawarsyed.com/",
      twitter: "https://x.com/dilawar",
      instagram: "https://www.instagram.com/syeddilawar/",
      email: "dilawar.syed@austin.utexas.edu",
      linkedin: "https://www.linkedin.com/in/dilawarsyed/",
    },
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About UTAIC 2026"
        title="A pan-university effort to read the palimpsest of India."
        lede="Faculty from McCombs, the LBJ School, the Cockrell School, the College of Liberal Arts, and the South Asia Institute have shaped this conference's intellectual and aesthetic direction."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-border">
        <div className="lg:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            Our Story
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-pretty">
          <p>
            At the stroke of midnight on August 15, 2047, India will turn 100. The
            choices made over the next two decades — on growth, governance,
            technology, sustainability, and global positioning — will determine what
            kind of century it becomes.
          </p>
          <p>
            The UT Austin India Conference was born from a simple observation: a
            university with this depth of engagement with India had no single forum
            to bring those conversations together. This is the first such
            conference, and it has been, from the start, a pan-university effort.
          </p>
          <p>
            As India seeks a larger role in shaping the agenda for the Global South,
            questions of climate, trade, and the architecture of a multipolar world
            are no longer questions for India alone. They belong to everyone. Across
            eight sessions, we trace India's macroeconomic journey, map the
            Indo–US–Texas corridor, examine human capital and sustainable
            development, assess India's place in the global AI race, reflect on the
            humanity of a post-AI world, and explore the language and stories that
            shape identity.
          </p>
          <p className="italic text-muted">
            In true Indian fashion, the conference is multidisciplinary,
            multilingual, and multilayered — layers that prompted Nehru to describe
            India as a palimpsest. Today, we attempt to read some of those layers.
          </p>
          <p className="font-mono text-sm text-accent">
            — Pranjal Awasthi, Student Chair
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-border">
        <div className="lg:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            About the Logo
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-4 text-base leading-relaxed text-pretty">
          <p>
            The conference logo brings together four symbols: the Gutenberg Bible,
            the Bodhi Tree, India Gate, and the UT Tower — the intersection of
            knowledge, memory, place, and ambition.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="border-l-2 border-accent pl-4">
              <span className="font-bold">The Gutenberg Bible.</span>{" "}
              <span className="text-muted">
                UT's Harry Ransom Center holds one of only five complete US copies —
                the transformative power of the written word.
              </span>
            </li>
            <li className="border-l-2 border-accent pl-4">
              <span className="font-bold">India Gate.</span>{" "}
              <span className="text-muted">
                A symbol of UT Austin's deep and enduring engagement with India, its
                people, and its scholarship.
              </span>
            </li>
            <li className="border-l-2 border-accent pl-4">
              <span className="font-bold">The Bodhi Tree.</span>{" "}
              <span className="text-muted">
                A sapling gifted to UT by His Holiness the Dalai Lama — patience,
                wisdom, and resilience.
              </span>
            </li>
            <li className="border-l-2 border-accent pl-4">
              <span className="font-bold">The UT Tower.</span>{" "}
              <span className="text-muted">
                The heart of the Forty Acres, a beacon of intellectual ambition and
                public purpose.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
            With Gratitude
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">Faculty Advisors</h2>
          <p className="mt-3 text-muted max-w-2xl">
            This would not have been possible without the guidance, support, and
            generosity of our faculty advisors.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 md:gap-6">
          {advisors.map((a) => (
            <div key={a.name} className="group flex flex-col justify-between h-full space-y-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-secondary outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden rounded-sm relative">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {a.name}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {a.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                {a.links.linkedin && (
                  <a
                    href={a.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="p-1.5 border border-white/5 bg-secondary/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors rounded-sm text-muted"
                  >
                    <Linkedin className="size-3.5" />
                  </a>
                )}
                {a.links.twitter && (
                  <a
                    href={a.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X / Twitter"
                    className="p-1.5 border border-white/5 bg-secondary/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors rounded-sm text-muted"
                  >
                    <Twitter className="size-3.5" />
                  </a>
                )}
                {a.links.instagram && (
                  <a
                    href={a.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="p-1.5 border border-white/5 bg-secondary/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors rounded-sm text-muted"
                  >
                    <Instagram className="size-3.5" />
                  </a>
                )}
                {a.links.web && (
                  <a
                    href={a.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Faculty Profile"
                    className="p-1.5 border border-white/5 bg-secondary/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors rounded-sm text-muted"
                  >
                    <Globe className="size-3.5" />
                  </a>
                )}
                {a.links.personalWeb && (
                  <a
                    href={a.links.personalWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Personal Website"
                    className="p-1.5 border border-white/5 bg-secondary/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors rounded-sm text-muted"
                  >
                    <User className="size-3.5" />
                  </a>
                )}
                {a.links.email && (
                  <a
                    href={`mailto:${a.links.email}`}
                    title="Email"
                    className="p-1.5 border border-white/5 bg-secondary/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors rounded-sm text-muted"
                  >
                    <Mail className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
