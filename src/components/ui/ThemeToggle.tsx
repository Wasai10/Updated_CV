import { useTheme } from "@/components/theme-provider";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-amber-500 transition-all duration-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
  >
    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.25" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#00D4FF] transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  // Determine current active mode
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Current mode: Dark. Click to switch to Light mode" : "Current mode: Light. Click to switch to Dark mode"}
      title={isDark ? "Dark theme active (Click for Light mode)" : "Light theme active (Click for Dark mode)"}
      className={`relative inline-flex items-center justify-center gap-2 h-9 px-2.5 rounded-xl border border-border/80 bg-card hover:bg-accent/60 text-foreground transition-all duration-200 cursor-pointer shadow-xs hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 group ${className}`}
    >
      <span className="relative flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover:scale-110">
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
      {showLabel && (
        <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
