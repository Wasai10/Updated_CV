import { useState, useEffect, useRef } from "react";

/* ─── Icons ─────────────────────────────────────────────── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.859L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

/* ─── Data ───────────────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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
  { title: "Portfolio Website", desc: "Built a responsive personal portfolio site using HTML & CSS with clean navigation and layouts." },
  { title: "Business Landing Page", desc: "Designed a static business website for practice and skill development." },
  { title: "Java & Visual Basic", desc: "Developed small programs practicing loops, conditionals, and basic functionality." },
  { title: "Database & SQL", desc: "Created simple databases and executed SQL queries for data retrieval and updates." },
  { title: "Excel Data Projects", desc: "Built spreadsheets for tracking and analyzing data using formulas and basic functions." },
  { title: "Creative & Video", desc: "Edited short videos and created creative visual content for practice and learning." },
];

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">

        {/* Logo */}
        <a href="#home" onClick={() => setActive("Home")} className="flex items-center gap-2.5 flex-shrink-0 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm transition-all duration-200 group-hover:scale-105 group-hover:rotate-3 shadow-md">
            WM
          </span>
          <span className="font-semibold text-foreground tracking-tight hidden sm:block text-sm">
            Wasai Mjomba
          </span>
        </a>

        {/* Nav links — center */}
        <ul className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 group ${active === label ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {active === label && <span className="absolute inset-0 rounded-lg bg-primary/10" />}
                <span className="absolute inset-0 rounded-lg bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                <span className="relative">{label}</span>
                {active === label && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Social + mobile toggle */}
        <div className="flex items-center gap-1 ml-auto">
          <div className="hidden sm:flex items-center gap-1">
            <a href="https://github.com/Wasai10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150">
              <GithubIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150">
              <XIcon />
            </a>
          </div>
          <div className="hidden sm:block w-px h-5 bg-border mx-1" />
          <button className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-background/95 backdrop-blur-md border-b border-border`}>
        <ul className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => { setActive(label); setMobileOpen(false); }}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${active === label ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                {label}
                {active === label && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 px-4 py-3 border-t border-border">
          <span className="text-xs text-muted-foreground mr-2">Find me on</span>
          <a href="https://github.com/Wasai10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"><GithubIcon /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"><XIcon /></a>
        </div>
      </div>
    </header>
  );
}

/* ─── Section wrapper ────────────────────────────────────── */
function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`min-h-screen ${className}`}>
      {children}
    </section>
  );
}

/* ─── Skill bar ──────────────────────────────────────────── */
function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWidth(level); observer.disconnect(); }
    }, { threshold: 0.3 });
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
        <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

/* ─── Main App ───────────────────────────────────────────── */
export default function App() {
  const [active, setActive] = useState("Home");

  // Update active section on scroll
  useEffect(() => {
    const sections = navLinks.map(l => ({ label: l.label, el: document.getElementById(l.href.replace("#", "")) }));
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el && sections[i].el.offsetTop <= scrollY) {
          setActive(sections[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navbar active={active} setActive={setActive} />

      {/* ── HOME ─────────────────────────────────────────── */}
      <Section id="home" className="flex items-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">

            {/* Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-2">
                <p className="text-primary font-medium tracking-widest text-sm uppercase">Hello, World 👋</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  I'm <span className="text-primary">Wasai</span><br />Mjomba
                </h1>
              </div>
              <p className="text-xl text-muted-foreground font-medium">
                Full Stack Developer · IT Student · Creative Technologist
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md text-base">
                A short 5'1 girl with a <span className="text-foreground font-semibold">huge personality</span> and an even bigger passion for building things on the web. Currently studying IT at KCA University and turning caffeine into code, one project at a time. ☕
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" onClick={() => setActive("Projects")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
                  See My Work
                </a>
                <a href="#contact" onClick={() => setActive("Contact")}
                  className="px-6 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors">
                  Get In Touch
                </a>
              </div>
              {/* Quick stats */}
              <div className="flex gap-8 pt-2">
                {[["KCA University", "Currently Enrolled"], ["Frontend", "Main Strength"], ["6+", "Projects Built"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-bold text-foreground text-lg leading-tight">{val}</div>
                    <div className="text-muted-foreground text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20 rotate-3" />
                <div className="absolute -inset-4 rounded-3xl border border-primary/10 -rotate-2" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1775479115/20260406_1536_Image_Generation_remix_01knhcn9bbef986exjm0st6kdg_kptkcp.png"
                    alt="Wasai Mjomba"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-4 py-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PORTFOLIO ────────────────────────────────────── */}
      <Section id="portfolio" className="flex items-center bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-medium tracking-widest text-sm uppercase">What I've Done</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Portfolio</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">A snapshot of my journey — from fundamentals to building real things on the internet.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Resume card */}
            <div className="bg-background rounded-2xl border border-border p-8 shadow-sm space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Wasai Mjomba</h3>
                  <p className="text-primary font-medium text-sm mt-0.5">IT Specialist · Full Stack Developer</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Available</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Motivated IT student with foundational skills in frontend development, programming, databases, networking, and digital design. Eager to apply technical knowledge and contribute to IT or frontend development teams.
              </p>

              <div>
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Skills</h4>
                <div className="space-y-3">
                  {skills.map(s => <SkillBar key={s.name} {...s} />)}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Education</h4>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">KCA University</p>
                    <p className="text-muted-foreground text-xs">IT — Frontend, Databases, Networking · 2024–2026</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                download="Wasai_Mjomba_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
              >
                <DownloadIcon /> Download Resume
              </a>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Achievements & Projects</h3>
              {achievements.map((a, i) => (
                <div key={i} className="group bg-background rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-default">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{a.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1">{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <Section id="projects" className="flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-medium tracking-widest text-sm uppercase">What I've Built</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Projects</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Real-world work and practice builds that sharpen my craft.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Equity Bank — featured */}
            <div className="md:col-span-2 lg:col-span-2 group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src="https://www.equitybank.co.ke/wp-content/uploads/2023/09/equity-bank-website.jpg"
                  alt="Equity Bank Website"
                  onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Fallback */}
                <div style={{ display: "none" }} className="w-full h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-2xl font-black text-primary">EB</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">equitybank.co.ke</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">Featured</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Equity Bank Website</h3>
                    <p className="text-primary text-sm font-medium">equitybank.co.ke</p>
                  </div>
                  <a href="https://equitybank.co.ke" target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    <ExternalIcon /> Visit
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built Equity Bank's web presence — a full-featured banking website serving millions of customers across Africa. Showcases the power of clean, accessible, and responsive web design at scale.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["HTML", "CSS", "JavaScript", "Responsive Design", "Banking UI"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-lg font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio site */}
            <div className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center relative">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">WM</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">wasai.dev</p>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">Personal</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Portfolio Website</h3>
                    <p className="text-primary text-sm font-medium">This very site!</p>
                  </div>
                  <a href="https://github.com/Wasai10" target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 p-1.5 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    <GithubIcon />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Responsive portfolio built with React and Tailwind CSS to showcase projects and skills.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["React", "Tailwind CSS", "Responsive"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-lg font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <Section id="about" className="flex items-center bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-medium tracking-widest text-sm uppercase">The Human Behind The Code</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 -rotate-2" />
                <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1775479115/20260406_1536_Image_Generation_remix_01knhcn9bbef986exjm0st6kdg_kptkcp.png"
                    alt="Wasai Mjomba"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Fun stat badge */}
                <div className="absolute -top-4 -right-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg text-center">
                  <div className="text-2xl font-black text-primary">5'1"</div>
                  <div className="text-xs text-muted-foreground font-medium">Tall enough</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Hi! I'm <span className="text-foreground font-semibold">Wasai Mjomba</span> — a short 5'1 girl with a <span className="text-primary font-semibold">huge personality</span> and an even bigger love for technology. 🔥
                </p>
                <p>
                  I'm currently an IT student at <span className="text-foreground font-medium">KCA University</span> (2024–2026), diving deep into frontend development, databases, networking, and programming. What started as curiosity quickly became a calling.
                </p>
                <p>
                  I'm a <span className="text-foreground font-medium">Full Stack Developer</span> who loves turning complex problems into clean, elegant, and user-friendly solutions. Whether it's crafting pixel-perfect interfaces or wiring up databases, I bring the same energy to every layer of the stack.
                </p>
                <p>
                  When I'm not coding, you'll find me editing videos, creating digital content, or figuring out how to make things look effortlessly cool. Small stature, massive ambition. 💪
                </p>
              </div>

              {/* Fun facts */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  ["📍", "Nairobi, Kenya"],
                  ["🎓", "KCA University"],
                  ["💻", "Full Stack Dev"],
                  ["⚡", "Always Learning"],
                ].map(([emoji, label]) => (
                  <div key={label} className="flex items-center gap-3 bg-background rounded-xl border border-border px-4 py-3">
                    <span className="text-lg">{emoji}</span>
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" onClick={() => setActive("Contact")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
                Let's Work Together →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <Section id="contact" className="flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-medium tracking-widest text-sm uppercase">Let's Talk</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Whether you have a project in mind, an opportunity, or just want to say hi — my inbox is always open. 📬</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:wasaimjomba01@gmail.com"
                className="group flex items-center gap-4 bg-background rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Email</p>
                  <p className="font-semibold text-foreground text-sm">wasaimjomba01@gmail.com</p>
                </div>
              </a>

              <a href="tel:+254113738019"
                className="group flex items-center gap-4 bg-background rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Phone</p>
                  <p className="font-semibold text-foreground text-sm">+254 113 738 019</p>
                </div>
              </a>
            </div>

            {/* GitHub card */}
            <a href="https://github.com/Wasai10" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-background rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 w-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                <GithubIcon />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">GitHub</p>
                <p className="font-semibold text-foreground text-sm">github.com/Wasai10</p>
              </div>
              <ExternalIcon />
            </a>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center space-y-4">
              <p className="text-foreground font-semibold text-lg">Ready to build something great?</p>
              <p className="text-muted-foreground text-sm">I'm open to internships, freelance projects, and full-time opportunities. Let's create something amazing together.</p>
              <a href="mailto:wasaimjomba01@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
                <MailIcon /> Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Wasai Mjomba. Built with React & Tailwind.</p>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Wasai10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"><GithubIcon /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"><XIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}