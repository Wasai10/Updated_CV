import { useState } from "react";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.37 5.04L2 22l5.12-1.34A9.95 9.95 0 0 0 12.004 22c5.523 0 10-4.48 10-10s-4.477-10-10-10zm5.82 14.28c-.24.68-1.2 1.25-1.66 1.3-.43.05-.98.07-3.17-.79-2.34-.92-3.83-3.29-3.95-3.45-.12-.16-.95-1.27-.95-2.42 0-1.15.6-1.72.82-1.95.21-.24.47-.3.63-.3.16 0 .32 0 .46.01.15.01.35-.06.55.42.2.49.69 1.68.75 1.8.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.63 1.04 1.35 1.68.93.83 1.71 1.09 1.95 1.21.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.21.08 1.34.63 1.57.74.23.12.38.18.44.28.06.1.06.58-.18 1.26z" />
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
    description: "Best for inquiries & contracts",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "+254 113 738 019",
    href: "https://wa.me/254113738019?text=Hi%20Wasai,%20I%20saw%20your%20portfolio!",
    description: "Instant chat & messaging",
    external: true,
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
    description: "Codebase & open source",
    external: true,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    opportunityType: "Full-Stack Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formState.opportunityType} - ${formState.name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nLocation/Org: ${formState.location}\nOpportunity Type: ${formState.opportunityType}\n\nMessage:\n${formState.message}`
    );

    // Open mail client
    window.location.href = `mailto:wasaimjomba01@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">Let's Connect</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm currently available for full-stack software development roles, frontend projects,
            internships, and freelance builds across Nairobi, Kenya, and remote teams worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Quick Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Direct Reach</h3>
              <p className="text-sm text-muted-foreground">
                Feel free to reach out directly through any of these channels.
              </p>
            </div>

            <div className="space-y-3">
              {contactMethods.map(({ icon, label, value, href, description, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 bg-card rounded-2xl border border-border p-4 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 flex-shrink-0">
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="font-semibold text-foreground text-sm truncate">{value}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                  {external && <ExternalIcon />}
                </a>
              ))}
            </div>

            {/* Availability status */}
            <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-2xl p-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Available for Hire</p>
                <p className="text-xs text-muted-foreground">
                  Immediate availability for internship, contract, or full-time roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Opportunity Inquiry Form */}
          <div className="lg:col-span-7 bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-bold text-foreground">Discuss an Opportunity</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Fill in the details below, and I'll respond promptly to coordinate next steps.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center space-y-3">
                <span className="text-3xl">🎉</span>
                <h4 className="font-bold text-foreground text-base">Inquiry Prepared!</h4>
                <p className="text-xs text-muted-foreground">
                  Your email client has been launched with the pre-filled inquiry. You can also
                  reach me directly at{" "}
                  <a href="mailto:wasaimjomba01@gmail.com" className="text-primary underline">
                    wasaimjomba01@gmail.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-foreground">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-foreground">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="location" className="text-xs font-medium text-foreground">
                      Location / Organization
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Nairobi / Company Name"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Type of Opportunity Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="opportunityType" className="text-xs font-medium text-foreground">
                    Type of Opportunity <span className="text-primary">*</span>
                  </label>
                  <select
                    id="opportunityType"
                    required
                    value={formState.opportunityType}
                    onChange={(e) => setFormState({ ...formState, opportunityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  >
                    <option value="Full-Stack Development">Full-Stack Software Development</option>
                    <option value="Frontend Engineering">Frontend Engineering (React / TypeScript)</option>
                    <option value="Internship / Attachment">Internship / Student Attachment</option>
                    <option value="Freelance Web Project">Freelance / Contract Web Project</option>
                    <option value="Video Editing / Creative Media">Video Editing &amp; Creative Media</option>
                    <option value="General Inquiry">General Inquiry / Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-foreground">
                    Message / Project Details <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about the role, project scope, or requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:opacity-90 shadow-md shadow-primary/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MailIcon /> Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
