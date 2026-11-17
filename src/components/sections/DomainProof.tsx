const proofs = [
  {
    domain: "Full-Stack Web Development",
    tag: "Core Strength",
    description:
      "Engineering full-stack web applications from interactive frontend interfaces to server-side architectures, featuring seamless API communication and responsive user experiences.",
    skills: ["React.js", "JavaScript", "PHP", "Laravel", "Node.js", "Tailwind CSS"],
  },
  {
    domain: "Backend Engineering & REST APIs",
    tag: "Backend & Auth",
    description:
      "Developing resilient backend services and REST APIs with PHP, Laravel, Node.js, and Express.js, incorporating secure JWT authentication, route protection, and request handling.",
    skills: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    domain: "Database Systems & Prisma ORM",
    tag: "Data Architecture",
    description:
      "Designing normalized relational database schemas, managing migrations, executing complex SQL queries, and utilizing Prisma ORM alongside MySQL for reliable persistence.",
    skills: ["MySQL", "Prisma ORM", "SQL", "Database Design", "Relational Schemas"],
  },
  {
    domain: "AI & Machine Learning Fundamentals",
    tag: "Emerging Tech",
    description:
      "Grounded in Artificial Intelligence and Machine Learning fundamentals, exploring predictive modeling, intelligent workflows, and emerging automation solutions.",
    skills: ["AI Fundamentals", "Machine Learning", "Data Logic", "Automation"],
  },
  {
    domain: "Impactful EdTech & Public Systems",
    tag: "Field-Tested Impact",
    description:
      "Direct technical experience contributing to national platforms with the Ministry of Education, UNICEF, and Save the Children—including Student Data Verification (SDV) and emergency monitoring.",
    skills: ["MoE Intern", "UNICEF", "Save the Children", "SDV Platform", "EEMS"],
  },
  {
    domain: "Modern Dev Tools & Media Production",
    tag: "Workflow & Media",
    description:
      "Disciplined version control with Git & GitHub, collaborative workflows, multimedia creation with Canva, digital video editing, and clear technical documentation.",
    skills: ["Git & GitHub", "Canva", "Video Editing", "Technical Docs", "MS Office"],
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
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
            Proficiencies forged through rigorous IT training at KCA University and practical software
            engineering contributions for the Ministry of Education, UNICEF, and Save the Children.
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
