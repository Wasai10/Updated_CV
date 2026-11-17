export default function SpecializationsMarquee() {
  const items = [
    "Full-Stack Software Development",
    "React.js & Tailwind CSS",
    "PHP & Laravel Framework",
    "Node.js & Express.js",
    "MySQL & Prisma ORM",
    "REST APIs & JWT Authentication",
    "AI & Machine Learning Fundamentals",
    "EdTech & Student Data Systems",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-2">
      <aside
        id="specializations"
        aria-label="Specialization Highlights"
        className="rounded-2xl border border-border/80 bg-muted/40 py-3 overflow-hidden select-none shadow-xs"
      >
        <div className="flex items-center">
          {/* Ticker tag */}
          <div className="flex items-center gap-2 pl-4 sm:pl-6 pr-4 border-r border-border/80 text-xs font-bold text-primary tracking-wider uppercase flex-shrink-0 z-10 bg-muted/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="hidden xs:inline sm:inline">Specializations</span>
          </div>

          {/* Marquee track */}
          <div className="overflow-hidden flex-1">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
              {/* Repeat list twice to ensure smooth infinite loop */}
              {[...items, ...items].map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-6 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-default"
                >
                  <span>{item}</span>
                  <span className="text-primary/50 text-xs" aria-hidden="true">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
