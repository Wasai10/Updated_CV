const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
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

const contactMethods = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "wasaimjomba01@gmail.com",
    href: "mailto:wasaimjomba01@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+254 113 738 019",
    href: "tel:+254113738019",
    description: "Mon–Fri, 8am–6pm EAT",
  },
  {
    icon: <GithubIcon />,
    label: "GitHub",
    value: "github.com/Wasai10",
    href: "https://github.com/Wasai10",
    description: "Check out my code",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            Let's Talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Whether you have a project in mind, an opportunity, or just want to say hi — my inbox
            is always open. 📬
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-5">

          {/* Contact cards */}
          {contactMethods.map(({ icon, label, value, href, description, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 bg-background rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                  {label}
                </p>
                <p className="font-semibold text-foreground text-sm truncate">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              </div>
              {external && (
                <ExternalIcon />
              )}
            </a>
          ))}

          {/* Availability banner */}
          <div className="flex items-center gap-3 bg-green-500/5 border border-green-500/20 rounded-2xl px-6 py-4">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
            <p className="text-sm text-foreground font-medium">
              Currently open to internships, freelance projects & full-time opportunities.
            </p>
          </div>

          {/* Big CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground font-bold text-xl">Ready to build something great?</p>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              I bring the same big energy to every project. Let's create something amazing together.
            </p>
            <a
              href="mailto:wasaimjomba01@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
            >
              <MailIcon /> Send Me an Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}