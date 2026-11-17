export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-muted/30 border-b border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            The Human Behind The Code
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Photo ── */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-primary/20 -rotate-2" />
              <div className="absolute -inset-3 rounded-2xl border border-primary/10 rotate-1" />

              <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1775479115/20260406_1536_Image_Generation_remix_01knhcn9bbef986exjm0st6kdg_kptkcp.png"
                  alt="Wasai Mjomba"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fun height badge */}
              <div className="absolute -top-4 -right-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg text-center">
                <div className="text-2xl font-black text-primary">5'1"</div>
                <div className="text-xs text-muted-foreground font-medium">Tall enough 😄</div>
              </div>

              {/* University badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-4 py-2.5 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <div>
                    <p className="text-xs font-bold text-foreground leading-tight">KCA University</p>
                    <p className="text-xs text-muted-foreground">2024 – 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hi! I'm{" "}
                <span className="text-foreground font-semibold">Wasai Mjomba</span> — a short{" "}
                <span className="text-primary font-semibold">5'1</span> girl with a{" "}
                <span className="text-primary font-semibold">huge personality</span> and an even
                bigger love for technology. 🔥
              </p>
              <p>
                I'm currently an IT student at{" "}
                <span className="text-foreground font-medium">KCA University</span> (2024–2026),
                diving deep into frontend development, databases, networking, and programming. What
                started as curiosity quickly became a calling.
              </p>
              <p>
                I'm a{" "}
                <span className="text-foreground font-medium">Full Stack Developer</span> who loves
                turning complex problems into clean, elegant, and user-friendly solutions. Whether
                it's crafting pixel-perfect interfaces or wiring up databases, I bring the same
                energy to every layer of the stack.
              </p>
              <p>
                When I'm not coding, you'll find me editing videos, creating digital content, or
                figuring out how to make things look effortlessly cool. Small stature, massive
                ambition. 💪
              </p>
            </div>

            {/* Fun fact chips */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                ["📍", "Nairobi, Kenya"],
                ["🎓", "KCA University"],
                ["💻", "Full Stack Dev"],
                ["⚡", "Always Learning"],
                ["🎬", "Video Editor"],
                ["✨", "Creative Designer"],
              ].map(([emoji, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-background rounded-xl border border-border px-4 py-3 hover:border-primary/30 transition-colors"
                >
                  <span className="text-lg">{emoji}</span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
              >
                Let's Work Together →
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}