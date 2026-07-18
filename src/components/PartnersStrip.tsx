const partners = [
  "Consulate General of India, Houston",
  "South Asia Institute",
  "Texas McCombs",
  "Clements Center for National Security",
  "Strauss Center",
  "Global Sustainability Leadership Institute",
  "Texas Global",
];

export function PartnersStrip() {
  return (
    <section className="py-12 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-8 text-center">
          Thanks to our Partners who made this possible
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-80">
          {partners.map((p) => (
            <span key={p} className="font-bold tracking-tighter text-sm">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
