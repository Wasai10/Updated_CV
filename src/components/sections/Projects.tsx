const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projectsList: Project[] = [
  {
    title: "Equity Bank Website",
    subtitle: "equitybank.co.ke",
    category: "Featured Enterprise Build",
    description:
      "Engineered web features and modern layout components for Equity Bank's digital presence — serving millions across Africa with clean, accessible, and high-performance UI.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Banking UI"],
    liveUrl: "https://equitybank.co.ke",
    featured: true,
  },
  {
    title: "Student Academic & Records Portal",
    subtitle: "KCA Academic System Concept",
    category: "Full-Stack & Database",
    description:
      "Designed a student and course management portal interface featuring relational database schema modeling, student record updates, and role-based views.",
    tags: ["React", "TypeScript", "SQL", "Database Design", "RBAC"],
    githubUrl: "https://github.com/Wasai10",
    featured: false,
  },
  {
    title: "Modern Interactive Portfolio",
    subtitle: "wasai.dev",
    category: "Modern Frontend",
    description:
      "A fast, accessible portfolio constructed with React 19, Tailwind CSS v4, dynamic ticker ribbons, and SEO structured schema for maximum recruiter engagement.",
    tags: ["React 19", "Tailwind CSS v4", "TypeScript", "Vite", "Schema.org"],
    liveUrl: "#home",
    githubUrl: "https://github.com/Wasai10",
    featured: false,
  },
  {
    title: "Inventory & Business Analytics Dashboard",
    subtitle: "Database & Automation Tool",
    category: "Database & Analytics",
    description:
      "Built relational tracking tables, summary queries, and spreadsheet automation workflows for real-time inventory tracking and operational reporting.",
    tags: ["SQL", "Relational Models", "Reporting", "Automation"],
    githubUrl: "https://github.com/Wasai10",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-background py-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            Proven Track Record
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            From large-scale corporate web platforms to custom software tools and database systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-card rounded-2xl border border-border p-6 sm:p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                project.featured ? "border-primary/30 bg-primary/[0.02]" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Badges row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub Repository"
                        className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                        rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label="Visit Live Project"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        <ExternalIcon /> Visit
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary text-xs font-medium mt-0.5">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Wasai10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <GithubIcon /> View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
