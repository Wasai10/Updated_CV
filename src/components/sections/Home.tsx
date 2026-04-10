export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-background"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* ── Text ── */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-widest text-sm uppercase">
                Hello, World 👋
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                I'm <span className="text-primary">Wasai</span>
                <br />Mjomba
              </h1>
            </div>

            <p className="text-xl text-muted-foreground font-medium">
              Full Stack Developer · IT Student · Creative Technologist
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-md text-base">
              A short <span className="text-foreground font-semibold">5'1</span> girl with a{" "}
              <span className="text-foreground font-semibold">huge personality</span> and an even
              bigger passion for building things on the web. Currently studying IT at KCA University
              and turning caffeine into code, one project at a time. ☕
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-2">
              {[
                ["KCA University", "Currently Enrolled"],
                ["Frontend", "Main Strength"],
                ["6+", "Projects Built"],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="font-bold text-foreground text-lg leading-tight">{val}</div>
                  <div className="text-muted-foreground text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20 rotate-3" />
              <div className="absolute -inset-4 rounded-3xl border border-primary/10 -rotate-2" />

              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1775479115/20260406_1536_Image_Generation_remix_01knhcn9bbef986exjm0st6kdg_kptkcp.png"
                  alt="Wasai Mjomba"
                  className="w-full h-full object-cover"
                />
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
    </section>
  );
}