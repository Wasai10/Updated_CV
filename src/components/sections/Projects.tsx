import { useState } from "react";

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
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projectsList: Project[] = [
  {
    title: "Elimu Trees Monitoring System",
    subtitle: "elimutrees.education.go.ke",
    category: "Featured Project",
    description:
      "School tree-planting monitoring website supporting Kenya's greener future. Features nationwide school tree tracking, environmental metrics, county-level data, and green initiative analytics.",
    tags: ["Education", "Tree Planting", "Monitoring System", "Web Platform", "Kenya"],
    image: "/images/projects/elimu-trees.png",
    liveUrl: "https://elimutrees.education.go.ke/",
    featured: true,
  },
  {
    title: "Education Emergency Management System",
    subtitle: "kplp.education.go.ke",
    category: "Featured Project",
    description:
      "Education platform for school protection, hazard monitoring, and emergency management across Kenya. Comprehensive platform for managing school risk profiles, incident alerts, and student safety.",
    tags: ["Education", "Emergency Management", "School Protection", "Hazard Monitoring", "Ministry of Education"],
    image: "/images/projects/education-emergency.png",
    liveUrl: "https://kplp.education.go.ke/",
    featured: true,
  },
  {
    title: "Jet Ministry Website",
    subtitle: "Community & Faith Organization",
    category: "Web Development",
    description:
      "Modern web platform for Jet Ministry featuring dynamic event calendars, sermon broadcasts, community outreach programs, and member engagement features.",
    tags: ["Web Development", "Community Platform", "Event Scheduling", "Responsive UI"],
    image: "/images/projects/jet-ministry.jpg",
    featured: false,
  },
  {
    title: "Wallpaper Homes Kenya",
    subtitle: "Interior Decor & E-Commerce Showcase",
    category: "Commercial Website",
    description:
      "Modern product showcase and client booking website for luxury wallpapers and residential interior decor services across Kenya, featuring interactive galleries and consultation inquiries.",
    tags: ["Interior Decor", "E-Commerce UI", "Product Catalog", "Home Styling", "Kenya"],
    image: "/images/projects/wallpaper-homes.jpg",
    featured: false,
  },
  {
    title: "Wasai Mjomba Portfolio",
    subtitle: "wasai.dev",
    category: "Personal Portfolio",
    description:
      "Personal developer portfolio built with React 19, TypeScript, and Tailwind CSS v4 to showcase web development projects, IT expertise, and creative media work.",
    tags: ["React 19", "Tailwind CSS v4", "TypeScript", "Vite", "Schema.org"],
    image: "/images/projects/portfolio-preview.svg",
    liveUrl: "#home",
    githubUrl: "https://github.com/Wasai10",
    featured: false,
  },
  {
    title: "Equity Bank Website",
    subtitle: "equitybank.co.ke",
    category: "Enterprise Web",
    description:
      "Engineered web features and modern layout components for Equity Bank's digital presence — serving millions across Africa with clean, accessible, and high-performance UI.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Banking UI"],
    image: "https://equitybank.co.ke/wp-content/uploads/2024/01/EB-Homepage-Hero.jpg",
    liveUrl: "https://equitybank.co.ke",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Featured">("All");

  const displayedProjects =
    filter === "Featured"
      ? projectsList.filter((p) => p.featured)
      : projectsList;

  return (
    <section id="projects" className="min-h-screen flex items-center bg-background py-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            Proven Track Record
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            From national monitoring platforms and enterprise systems to commercial web applications.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === "All"
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              All Projects ({projectsList.length})
            </button>
            <button
              onClick={() => setFilter("Featured")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === "Featured"
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Featured Projects ({projectsList.filter((p) => p.featured).length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              {/* Image preview with fallback */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* Fallback placeholder */}
                <div
                  style={{ display: "none" }}
                  className="w-full h-full items-center justify-center bg-gradient-to-br from-primary/20 via-background to-primary/5 p-6"
                >
                  <div className="text-center space-y-1">
                    <span className="text-2xl font-black text-primary">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                    <p className="text-xs text-muted-foreground font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Category badge */}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md shadow-sm ${
                    project.featured
                      ? "bg-amber-500/90 text-amber-950 font-extrabold"
                      : "bg-background/80 text-foreground border border-border/60"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-primary text-xs font-medium mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Case tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-muted text-muted-foreground text-[11px] rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                        rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-xs font-semibold transition-colors"
                      >
                        <ExternalIcon /> Visit Platform
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent text-xs font-semibold transition-colors"
                      >
                        <GithubIcon /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Wasai10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors shadow-xs"
          >
            <GithubIcon /> View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
