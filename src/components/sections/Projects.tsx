const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    title: "Equity Bank Website",
    subtitle: "equitybank.co.ke",
    description:
      "Built Equity Bank's web presence — a full-featured banking website serving millions of customers across Africa. Showcases clean, accessible, and responsive web design at scale.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Banking UI"],
    link: "https://equitybank.co.ke",
    image:
      "https://equitybank.co.ke/wp-content/uploads/2023/09/equity-bank-website.jpg",
    badge: "Featured",
    featured: true,
  },
  {
    title: "Portfolio Website",
    subtitle: "This very site!",
    description:
      "Responsive portfolio built with React and Tailwind CSS to showcase projects, skills, and experience.",
    tags: ["React", "Tailwind CSS", "Responsive"],
    link: "https://github.com/Wasai10",
    badge: "Personal",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            What I've Built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real-world work and practice builds that sharpen my craft.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ── Equity Bank — featured (spans 2 cols) ── */}
          <div className="md:col-span-2 group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 overflow-hidden bg-muted">
              <img
                src="https://equitybank.co.ke/wp-content/uploads/2024/01/EB-Homepage-Hero.jpg"
                alt="Equity Bank Website"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Fallback */}
              <div
                style={{ display: "none" }}
                className="w-full h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5"
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">EB</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">equitybank.co.ke</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                Featured
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Equity Bank Website</h3>
                  <p className="text-primary text-sm font-medium">equitybank.co.ke</p>
                </div>
                <a
                  href="https://equitybank.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <ExternalIcon /> Visit
                </a>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built Equity Bank's web presence — a full-featured banking website serving millions
                of customers across Africa. Showcases the power of clean, accessible, and responsive
                web design at scale.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["HTML", "CSS", "JavaScript", "Responsive Design", "Banking UI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Portfolio site ── */}
          <div className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="h-56 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center relative">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">WM</span>
                </div>
                <p className="text-xs text-muted-foreground font-mono">wasai.dev</p>
              </div>
              <span className="absolute top-4 left-4 px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">
                Personal
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Portfolio Website</h3>
                  <p className="text-primary text-sm font-medium">This very site!</p>
                </div>
                <a
                  href="https://github.com/Wasai10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-1.5 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <GithubIcon />
                </a>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Responsive portfolio built with React and Tailwind CSS to showcase projects and
                skills.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["React", "Tailwind CSS", "Responsive"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Wasai10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <GithubIcon /> View all projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}