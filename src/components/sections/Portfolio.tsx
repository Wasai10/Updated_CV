import { useState, useEffect, useRef } from "react";

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 72 },
  { name: "React", level: 68 },
  { name: "Java", level: 55 },
  { name: "SQL", level: 60 },
  { name: "Visual Basic", level: 50 },
  { name: "Responsive Design", level: 88 },
];

const achievements = [
  {
    title: "Portfolio Website",
    desc: "Built a responsive personal portfolio site using HTML & CSS with clean navigation and layouts.",
  },
  {
    title: "Business Landing Page",
    desc: "Designed a static business website for practice and skill development.",
  },
  {
    title: "Java & Visual Basic",
    desc: "Developed small programs practicing loops, conditionals, and basic functionality.",
  },
  {
    title: "Database & SQL",
    desc: "Created simple databases and executed SQL queries for data retrieval and updates.",
  },
  {
    title: "Excel Data Projects",
    desc: "Built spreadsheets for tracking and analyzing data using formulas and basic functions.",
  },
  {
    title: "Creative & Video",
    desc: "Edited short videos and created creative visual content for practice and learning.",
  },
];

interface SkillBarProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center bg-muted/30 border-b border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            What I've Done
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Portfolio
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A snapshot of my journey — from fundamentals to building real things on the internet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Resume card ── */}
          <div className="bg-background rounded-2xl border border-border p-8 shadow-sm space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">Wasai Mjomba</h3>
                <p className="text-primary font-medium text-sm mt-0.5">
                  IT Specialist · Full Stack Developer
                </p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                Available
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Motivated IT student with foundational skills in frontend development, programming,
              databases, networking, and digital design. Eager to apply technical knowledge and
              contribute to IT or frontend development teams.
            </p>

            {/* Skills */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Skills
              </h4>
              <div className="space-y-3">
                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                Education
              </h4>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">KCA University</p>
                  <p className="text-muted-foreground text-xs">
                    IT — Frontend, Databases, Networking · 2024–2026
                  </p>
                </div>
              </div>
            </div>

            {/* Download */}
            <a
              href="/Wasai_Mjomba_CV.pdf"
              download="Wasai_Mjomba_CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
            >
              <DownloadIcon /> Download Resume PDF
            </a>
          </div>

          {/* ── Achievements ── */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Achievements & Projects</h3>
            {achievements.map((a, i) => (
              <div
                key={i}
                className="group bg-background rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      {a.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-1">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}