import React, { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  logo?: string;
  logoAlt?: string;
  logoText?: string;
  links: NavLink[];
  onLinkClick?: (href: string) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  logo,
  logoAlt = "Logo",
  logoText,
  links,
  onLinkClick,
  theme,
  onToggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    onLinkClick?.(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-lg"
          : "glass-panel bg-white/55 dark:bg-slate-950/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#" className="flex flex-shrink-0 items-center space-x-3">
            {logo && (
              <img
                src={logo}
                alt={logoAlt}
                className="h-12 w-12 rounded-2xl border border-white/60 bg-white/95 object-contain p-1.5 shadow-lg dark:border-white/15 dark:bg-slate-900/85"
              />
            )}
            {logoText && <span className="brand-wordmark">{logoText}</span>}
          </a>

          <div className="hidden items-center space-x-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={onToggleTheme}
              className="glass-panel inline-flex items-center justify-center rounded-lg px-3 py-2 text-xl transition-transform duration-200 hover:scale-110 text-gray-700 dark:text-gray-200"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              type="button"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="glass-panel rounded-lg px-3 py-2 text-xl transition-transform duration-200 hover:scale-110 text-gray-700 dark:text-gray-200"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              type="button"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              onClick={() => setIsOpen((open) => !open)}
              className="glass-panel rounded-xl p-2 text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="glass-panel mt-3 space-y-3 rounded-2xl border-t-0 py-4 md:hidden">
            <div className="px-4">
              <button
                onClick={onToggleTheme}
                className="w-full rounded-xl border border-white/50 bg-white/70 px-4 py-3 text-center text-lg font-medium text-gray-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-200 transition-transform duration-200 hover:scale-105"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                type="button"
              >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </div>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
