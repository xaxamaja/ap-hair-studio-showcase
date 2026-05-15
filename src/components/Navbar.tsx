import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

const BOOKSY = "https://booksy.com/pl-pl/220307_ap-hair-studio_fryzjer_13750_wroclaw";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#top" className={`font-display text-2xl tracking-wide ${scrolled ? "text-foreground" : "text-background"}`}>
          AP <span className="text-gold">·</span> Hair Studio
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.25em] hover-gold ${
                scrolled ? "text-foreground/80" : "text-background/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.25em] border border-gold text-gold px-5 py-3 hover:bg-gold hover:text-primary transition-all duration-300"
          >
            Rezerwuj
          </a>
        </nav>

        <button
          aria-label="Menu"
          className={`lg:hidden ${scrolled || open ? "text-foreground" : "text-background"}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border mt-3">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-foreground/80 hover-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKSY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.25em] border border-gold text-gold text-center px-5 py-3 mt-2"
            >
              Rezerwuj wizytę
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
