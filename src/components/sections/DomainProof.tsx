const proofs = [
  {
    domain: "Full-Stack Development",
    tag: "Core Focus",
    description:
      "Building responsive frontend web interfaces, reusable component systems, and wiring clean data flow from frontend to backend.",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    domain: "Modern UI/UX & Responsive Layouts",
    tag: "Design & UX",
    description:
      "Crafting pixel-perfect, accessible, mobile-first layouts with smooth animations, dark/light theme support, and modern aesthetics.",
    skills: ["Tailwind CSS", "Radix UI", "CSS Grid/Flexbox"],
  },
  {
    domain: "Database Modeling & Backend APIs",
    tag: "Data Layer",
    description:
      "Designing structured database schemas, executing relational SQL queries, and integrating REST API endpoints for persistent web apps.",
    skills: ["SQL", "Relational Schemas", "Node.js", "REST APIs"],
  },
  {
    domain: "Creative Media & Video Production",
    tag: "Visual Craft",
    description:
      "Editing engaging short-form and promotional videos, visual pacing, and multimedia content that make tech brands stand out.",
    skills: ["Video Editing", "Visual Pacing", "Digital Content"],
  },
  {
    domain: "IT Systems & Infrastructure",
    tag: "Academic Foundation",
    description:
      "Grounding in computer architecture, networking, database management, and troubleshooting through KCA University's IT curriculum.",
    skills: ["Networking Basics", "OS Config", "Diagnostics"],
  },
  {
    domain: "Disciplined Delivery & Version Control",
    tag: "Workflow",
    description:
      "Structured Git workflows, modular code organization, clear documentation, and rapid problem-solving habits.",
    skills: ["Git & GitHub", "Component Architecture", "Vite"],
  },
];

export default function DomainProof() {
  return (
    <section className="py-20 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 space-y-3">
          <p className="text-primary font-medium tracking-widest text-xs uppercase">
            Capabilities &amp; Core Strengths
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Practical skills forged through academic rigor at KCA University and active, hands-on
            software development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofs.map((proof, i) => (
            <div
              key={i}
              className="group bg-card hover:bg-accent/40 rounded-2xl border border-border/80 p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                    {proof.tag}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {proof.domain}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {proof.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50 mt-4">
                {proof.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
