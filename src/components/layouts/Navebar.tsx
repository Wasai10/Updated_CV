import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.859L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Specializations", href: "#specializations" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const socialLinks = [
  { icon: <GithubIcon />, href: "https://github.com/Wasai10", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com/in/agnes-mjomba-93258a3a4", label: "LinkedIn" },
  { icon: <XIcon />, href: "https://x.com", label: "X" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-y border-border/60 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-background/70 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo — left */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm transition-transform duration-200 group-hover:scale-105">
              WM
              <span className="absolute inset-0 rounded-lg ring-2 ring-primary/30 ring-offset-1 ring-offset-background opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
            <span className="font-semibold text-foreground tracking-tight hidden sm:block whitespace-nowrap">
              Wasai Mjomba
            </span>
          </a>

          {/* Nav links — center */}
          <ul className="hidden md:flex items-center justify-center gap-1 xl:gap-2 flex-1 min-w-0">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="shrink-0">
                <a
                  href={href}
                  onClick={() => setActive(label)}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-150 inline-flex items-center justify-center ${
                    active === label
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  {active === label && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions: Social links + CV button */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="hidden xl:flex items-center gap-1">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Divider (visible when socials are visible) */}
            <div className="hidden xl:block w-px h-5 bg-border mx-1" />

            {/* Direct CV Download CTA */}
            <a
              href="/Wasai_Mjomba_CV.pdf"
              download="Wasai_Mjomba_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 shadow-sm transition-opacity whitespace-nowrap"
            >
              <DownloadIcon /> CV
            </a>

            {/* Dark/Light Theme Switcher (Available on all devices) */}
            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-background/95 backdrop-blur-md border-b border-border`}
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => { setActive(label); setMobileOpen(false); }}
                  className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    active === label
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {label}
                  {active === label && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-border">
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground mr-1">Social:</span>
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle showLabel className="h-8 text-xs" />
              <a
                href="/Wasai_Mjomba_CV.pdf"
                download="Wasai_Mjomba_CV.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <DownloadIcon /> CV
              </a>
            </div>
          </div>
        </div>
      </header>

     
    </>
  );
}