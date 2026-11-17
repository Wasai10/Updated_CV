export default function WhatsAppFloat() {
  const phone = "254113738019";
  const defaultMessage = encodeURIComponent(
    "Hi Wasai, I came across your portfolio and would like to discuss an opportunity!"
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Wasai on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] text-white hover:bg-[#20ba59] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.37 5.04L2 22l5.12-1.34A9.95 9.95 0 0 0 12.004 22c5.523 0 10-4.48 10-10s-4.477-10-10-10zm5.82 14.28c-.24.68-1.2 1.25-1.66 1.3-.43.05-.98.07-3.17-.79-2.34-.92-3.83-3.29-3.95-3.45-.12-.16-.95-1.27-.95-2.42 0-1.15.6-1.72.82-1.95.21-.24.47-.3.63-.3.16 0 .32 0 .46.01.15.01.35-.06.55.42.2.49.69 1.68.75 1.8.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.63 1.04 1.35 1.68.93.83 1.71 1.09 1.95 1.21.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.21.08 1.34.63 1.57.74.23.12.38.18.44.28.06.1.06.58-.18 1.26z" />
        </svg>
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
