const partnersLine1 = [
  "Consulate General of India, Houston",
  "South Asia Institute",
  "Texas McCombs",
  "Clements Center for National Security",
];

const partnersLine2 = [
  "Strauss Center",
  "Global Sustainability Leadership Institute",
  "Texas Global",
];

export function PartnersStrip() {
  return (
    <section className="py-12 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-8 text-center whitespace-nowrap">
          Thanks to our Partners who made this possible
        </div>
        <div className="flex flex-col items-center gap-y-4">
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-10 gap-y-3 opacity-80 text-center">
            {partnersLine1.map((p) => (
              <span key={p} className="font-bold tracking-tighter text-sm whitespace-nowrap">
                {p}
              </span>
            ))}
          </div>
          {/* Line 2 */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-10 gap-y-3 opacity-80 text-center">
            {partnersLine2.map((p) => (
              <span key={p} className="font-bold tracking-tighter text-sm whitespace-nowrap">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
