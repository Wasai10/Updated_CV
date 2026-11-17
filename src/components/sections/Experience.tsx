import { useState } from "react";

interface JourneyCard {
  id: string;
  category: string;
  title: string;
  institution: string;
  period: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  summary: string;
  studyAreas?: string[];
  detailedSections?: {
    heading: string;
    items: string[];
  }[];
  keyTakeaway: string;
  tags: string[];
}

const journeyCards: JourneyCard[] = [
  {
    id: "kca-academic",
    category: "Academic Foundation",
    title: "My Academic Journey",
    institution: "KCA University",
    period: "September 2024 – June 2026",
    image: "/images/experience/kca-journey.jpg",
    imageAlt: "Wasai Mjomba at KCA University",
    imagePosition: "object-top",
    summary:
      "I joined KCA University in September 2024 to pursue a Diploma in Information Technology, dedicating my academic journey to building a solid, multi-disciplinary foundation across programming, software engineering, computer systems, and modern networking.",
    studyAreas: [
      "Web Design and Development",
      "Database Systems",
      "Computer Applications",
      "Operating Systems",
      "Introduction to Programming",
      "System Analysis and Design",
      "Data Structures and Algorithms",
      "Java Programming",
      "Network Design and Setup",
      "Structured Cabling",
    ],
    keyTakeaway:
      "My studies at KCA University have developed my technical foundation, analytical thinking, and problem-solving capabilities across diverse areas of IT.",
    tags: ["Web Development", "Database Systems", "Java", "Networking", "System Analysis"],
  },
  {
    id: "moe-attachment",
    category: "Industrial Attachment",
    title: "Industrial Attachment",
    institution: "Ministry of Education",
    period: "4th April 2026 – 10th July 2026",
    image: "/images/experience/moe-attachment.jpg",
    imageAlt: "Ministry of Education Stakeholder Session",
    imagePosition: "object-center",
    summary:
      "Gained intensive practical exposure within the Ministry of Education, engaging directly in public-sector IT operations, technical infrastructure support, system development, and stakeholder meetings.",
    detailedSections: [
      {
        heading: "Technical Support & IT Infrastructure",
        items: [
          "Installed and configured operating systems on staff computers.",
          "Participated in troubleshooting server-room overheating issues and identifying ways to improve server-room conditions.",
          "Diagnosed and resolved Ethernet connectivity problems, restoring network connectivity.",
        ],
      },
      {
        heading: "System Development",
        items: [
          "Contributed to frontend development for education-related systems.",
          "Worked on the Education Emergency Management System (EEMS), a platform designed to facilitate the deployment of alerts to schools and emergency response services.",
          "Contributed towards ensuring emergency alerts and relevant information reach appropriate personnel in time for rapid response.",
        ],
      },
      {
        heading: "Meetings & Communication",
        items: [
          "Participated in meetings involving stakeholders, shareholders, and potential investors.",
          "Served as the meeting secretary, recording discussions and documenting important meeting proceedings.",
        ],
      },
    ],
    keyTakeaway:
      "Applied classroom theory to real-world IT challenges, honing troubleshooting skills, professional communication, and collaborative frontend engineering.",
    tags: ["IT Support", "Server Room", "EEMS Frontend", "Networking", "Documentation"],
  },
  {
    id: "machakos-field",
    category: "Field Experience",
    title: "Field Experience — Machakos",
    institution: "Ministry of Education Project",
    period: "Duration: One Week",
    image: "/images/experience/machakos-field.jpg",
    imageAlt: "Fieldwork and System Testing in Machakos",
    imagePosition: "object-center",
    summary:
      "Participated in an intensive one-week field visit to Machakos as part of the Ministry of Education's Education Emergency Management System (EEMS) initiative to observe practical system deployment and user interactions.",
    detailedSections: [
      {
        heading: "System Implementation & Field Testing",
        items: [
          "Participated in field activities to observe and support the implementation of the Education Emergency Management System.",
          "Took part in system testing and demonstrations to assess how the platform performed in a practical environment.",
          "Participated in activities aimed at evaluating the system's functionality and usability.",
        ],
      },
      {
        heading: "User Feedback & Evaluation",
        items: [
          "Participated in sessions where users interacted directly with the system.",
          "Helped assess whether the platform was user-friendly and easy to navigate.",
          "Observed and gathered feedback that could help improve the system and its overall user experience.",
        ],
      },
      {
        heading: "User Documentation",
        items: [
          "Contributed to the preparation of a user manual to guide users on how to navigate and operate the system.",
          "Helped ensure that users would have clear documentation to support their interaction with the platform.",
        ],
      },
    ],
    keyTakeaway:
      "Gained direct exposure to on-the-ground software implementation, live user feedback evaluation, teamwork, and technical manual preparation.",
    tags: ["Field Testing", "User Evaluation", "User Manual", "UX Feedback", "Demonstrations"],
  },
];

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-24 bg-muted/20 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            Practical Growth &amp; Milestones
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            My Journey &amp; Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            How my academic foundation at KCA University and hands-on experiences with the Ministry
            of Education—including on-site field testing in Machakos—have shaped my growth and
            practical capabilities in Information Technology.
          </p>
        </div>

        {/* 3 Horizontal Cards (Desktop) / Vertical Stack (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {journeyCards.map((card) => {
            const isExpanded = !!expandedCards[card.id];

            return (
              <div
                key={card.id}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Visual Image Header */}
                <div
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted cursor-pointer"
                  onClick={() => setSelectedImage({ src: card.image, alt: card.imageAlt })}
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className={`w-full h-full object-cover ${
                      card.imagePosition || "object-center"
                    } group-hover:scale-105 transition-transform duration-500`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-md">
                    {card.category}
                  </span>

                  {/* Expand Photo Hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 text-foreground text-xs font-semibold backdrop-blur-xs">
                      🔍 Click to enlarge
                    </span>
                  </div>

                  {/* Institution & Period overlay at bottom of photo */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-bold text-primary tracking-wide uppercase">
                      {card.institution}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{card.period}</p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.summary}
                    </p>

                    {/* Expandable Detailed Content */}
                    {isExpanded && (
                      <div className="space-y-4 pt-3 border-t border-border/60 animate-in fade-in duration-300">
                        {/* KCA: Areas of Study */}
                        {card.studyAreas && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                              Areas of Knowledge Acquired:
                            </h4>
                            <ul className="grid grid-cols-1 gap-1.5">
                              {card.studyAreas.map((area, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="text-primary font-bold">✓</span>
                                  <span>{area}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* MoE & Machakos: Detailed Categorized Responsibilities */}
                        {card.detailedSections &&
                          card.detailedSections.map((sec, sIdx) => (
                            <div key={sIdx} className="space-y-1.5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                                {sec.heading}:
                              </h4>
                              <ul className="space-y-1.5">
                                {sec.items.map((item, itmIdx) => (
                                  <li
                                    key={itmIdx}
                                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                                  >
                                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                        {/* Key Takeaway */}
                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground leading-relaxed">
                          <strong className="text-foreground block mb-1">Growth Impact:</strong>
                          {card.keyTakeaway}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom: Toggle button & Tags */}
                  <div className="space-y-4 pt-3 border-t border-border/50">
                    <button
                      type="button"
                      onClick={() => toggleExpand(card.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer focus:outline-none"
                    >
                      <span>{isExpanded ? "Show Less" : "Read More & View Details"}</span>
                      <span className="text-sm">{isExpanded ? "▲" : "▼"}</span>
                    </button>

                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox for Full-Size Image Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/80 text-foreground flex items-center justify-center font-bold hover:bg-background transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                ✕
              </button>
              <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-black/60">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-4 bg-card text-center text-xs font-medium text-muted-foreground">
                {selectedImage.alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
