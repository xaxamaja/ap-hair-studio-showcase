import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar";
import { BOOKSY_URL, PHONE, PHONE_DISPLAY, ADDRESS, HOURS, INSTAGRAM, FACEBOOK } from "@/lib/constants";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Instagram, Facebook, Phone, MapPin, Clock, Scissors, Palette, Sparkles, Wind, Leaf, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpeg";
import aboutImg from "@/assets/about.jpeg";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AP Hair Studio Wrocław — Premium Salon Fryzjerski" },
      { name: "description", content: "Premium salon fryzjerski w Wrocławiu. Strzyżenie, koloryzacja, pielęgnacja i stylizacja damska oraz męska. Umów wizytę online." },
      { property: "og:title", content: "AP Hair Studio — Premium Salon Fryzjerski Wrocław" },
      { property: "og:description", content: "Piękno, styl i precyzja w jednym miejscu. Premium salon fryzjerski w sercu Wrocławia." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HairSalon",
        name: "AP Hair Studio",
        image: "/og.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Generała Romualda Traugutta 69/1B",
          addressLocality: "Wrocław",
          postalCode: "50-417",
          addressCountry: "PL",
        },
        telephone: "+48500377893",
        url: "/",
        priceRange: "$$$",
      }),
    }],
  }),
  component: Index,
});

const services = [
  {
    icon: Scissors,
    category: "Strzyżenie",
    items: [
      { name: "Strzyżenie damskie", desc: "Indywidualne dopasowanie do typu twarzy i włosów", price: "od 120 zł" },
      { name: "Strzyżenie męskie", desc: "Klasyczne i nowoczesne fryzury męskie", price: "od 80 zł" },
      { name: "Strzyżenie dziecięce", desc: "Delikatne strzyżenie dla najmłodszych", price: "od 60 zł" },
    ],
  },
  {
    icon: Palette,
    category: "Koloryzacja",
    items: [
      { name: "Koloryzacja jednolita", desc: "Refleksy w jednym tonie, pełna koloryzacja", price: "od 250 zł" },
      { name: "Balayage / Sombre", desc: "Naturalne, świetlne efekty słońca we włosach", price: "od 450 zł" },
      { name: "Rozjaśnianie", desc: "Bezpieczne rozjaśnianie z odżywianiem", price: "od 350 zł" },
    ],
  },
  {
    icon: Leaf,
    category: "Pielęgnacja włosów",
    items: [
      { name: "Botoks na włosy", desc: "Głębokie odżywienie i wygładzenie", price: "od 280 zł" },
      { name: "Keratynowe prostowanie", desc: "Trwała gładkość i blask", price: "od 600 zł" },
      { name: "Kuracja Olaplex", desc: "Odbudowa wiązań w strukturze włosa", price: "od 100 zł" },
    ],
  },
  {
    icon: Wind,
    category: "Stylizacja",
    items: [
      { name: "Modelowanie", desc: "Mycie, suszenie i stylizacja", price: "od 90 zł" },
      { name: "Fale / loki", desc: "Eleganckie upięcia okolicznościowe", price: "od 150 zł" },
      { name: "Upięcia ślubne", desc: "Stylizacja na wyjątkowy dzień", price: "od 350 zł" },
    ],
  },
  {
    icon: Sparkles,
    category: "Zabiegi regeneracyjne",
    items: [
      { name: "Nanoplastia", desc: "Regeneracja i wygładzenie najwyższej klasy", price: "od 700 zł" },
      { name: "Terapia bondingowa", desc: "Odbudowa zniszczonych włosów", price: "od 200 zł" },
      { name: "Rytuał Kerastase", desc: "Luksusowa pielęgnacja w salonie", price: "od 180 zł" },
    ],
  },
];

const testimonials = [
  { name: "Magdalena K.", text: "Najlepszy salon w Wrocławiu. Profesjonalizm, atmosfera i efekt — wszystko na najwyższym poziomie. Wychodzę zawsze zachwycona.", rating: 5 },
  { name: "Anna W.", text: "Pani Agnieszka zrobiła mi balayage marzeń. Włosy zdrowe, kolor naturalny, a obsługa absolutnie premium. Polecam każdej kobiecie.", rating: 5 },
  { name: "Piotr M.", text: "W końcu znalazłem miejsce, gdzie strzyżenie męskie traktowane jest poważnie. Precyzja, dbałość o detal, świetny klimat.", rating: 5 },
  { name: "Karolina S.", text: "Wnętrze salonu zachwyca, ale to ludzie tworzą tę markę. Indywidualne podejście i fenomenalne doradztwo.", rating: 5 },
  { name: "Justyna B.", text: "Robię tu koloryzację od dwóch lat. Włosy są w idealnej kondycji, a kolor zawsze trafiony. Pełen profesjonalizm.", rating: 5 },
  { name: "Aleksandra T.", text: "Zabieg keratynowy zmienił moje włosy. Spokojnie najwyższa półka w mieście — i atmosfera, i efekt końcowy.", rating: 5 },
];

const faqs = [
  { q: "Jak przygotować włosy do wizyty?", a: "Przyjdź z czystymi lub lekko nieumytymi włosami. Przy koloryzacji unikaj mycia 24h przed zabiegiem — naturalna warstwa ochronna sebum chroni skórę głowy." },
  { q: "Jak dobrać odpowiednią fryzurę?", a: "Podczas konsultacji nasz stylista analizuje typ twarzy, strukturę włosów i Twój styl życia, aby zaproponować fryzurę, która będzie wyglądać pięknie i łatwo się układać." },
  { q: "Czy używacie profesjonalnych kosmetyków?", a: "Pracujemy wyłącznie na najwyższej jakości produktach renomowanych marek profesjonalnych — Kerastase, Olaplex, Wella Professionals i innych." },
  { q: "Jak odwołać lub zmienić termin wizyty?", a: "Wizytę możesz w każdej chwili zmienić lub odwołać poprzez panel Booksy lub kontaktując się z nami telefonicznie minimum 24h przed terminem." },
  { q: "Czy oferujecie konsultacje przed zabiegiem?", a: "Tak — każdą koloryzację i większy zabieg poprzedzamy bezpłatną konsultacją, podczas której omawiamy Twoje oczekiwania i możliwe efekty." },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Wnętrze AP Hair Studio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
        <div className="relative z-10 text-center px-6 max-w-4xl fade-up">
          <p className="eyebrow text-gold mb-8">Premium Hair Studio · Wrocław</p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-background leading-[0.95] text-balance">
            AP Hair <span className="italic text-gold-soft">Studio</span>
          </h1>
          <div className="gold-line h-px w-32 mx-auto my-10" />
          <p className="text-background/85 text-lg md:text-xl font-light tracking-wide mb-12 text-balance max-w-2xl mx-auto">
            Piękno, styl i precyzja w jednym miejscu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold text-primary px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:bg-background transition-colors duration-300 inline-flex items-center gap-3"
            >
              Zarezerwuj wizytę
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#oferta"
              className="border border-background/40 text-background px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Poznaj ofertę
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-background/60 text-[10px] uppercase tracking-[0.3em] animate-pulse">
          Przewiń ↓
        </div>
      </section>

      {/* O NAS */}
      <section id="o-nas" className="py-28 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative">
              <img src={aboutImg} alt="Wnętrze salonu" className="w-full h-[600px] object-cover" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-gold text-primary p-8 hidden md:block">
                <p className="font-display text-5xl">5+</p>
                <p className="eyebrow mt-1">lat doświadczenia</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-gold">O nas</p>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-tight text-balance">
              Miejsce stworzone z <span className="italic">pasji</span> do piękna.
            </h2>
            <div className="gold-line h-px w-20 my-8" />
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light">
              AP Hair Studio to przestrzeń, w której łączymy najwyższy profesjonalizm z indywidualnym podejściem do każdego klienta. Nasz zespół doświadczonych stylistów tworzy fryzury skrojone na miarę — z dbałością o detal i Twój komfort.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Pracujemy wyłącznie na kosmetykach najwyższej klasy renomowanych marek profesjonalnych. Wierzymy, że wizyta w salonie to nie tylko usługa — to rytuał, czas tylko dla Ciebie, w atmosferze luksusu i pełnego skupienia.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              {[
                { n: "1000+", l: "Klientek i klientów" },
                { n: "100%", l: "Premium kosmetyki" },
                { n: "5.0", l: "Średnia ocen" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-gold">{s.n}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-28 md:py-40 px-6 lg:px-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="eyebrow text-gold">Oferta</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance">
                Usługi salonu
              </h2>
              <div className="gold-line h-px w-20 mx-auto my-8" />
              <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                Pełen zakres pielęgnacji i stylizacji włosów dla kobiet i mężczyzn.
              </p>
            </div>
          </Reveal>

          <div className="space-y-20">
            {services.map((cat, idx) => (
              <Reveal key={cat.category} delay={idx * 80}>
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <cat.icon className="text-gold" size={28} strokeWidth={1.2} />
                    <h3 className="font-display text-3xl md:text-4xl">{cat.category}</h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {cat.items.map((s) => (
                      <div
                        key={s.name}
                        className="group bg-background border border-border p-8 hover:border-gold transition-all duration-500 hover:-translate-y-1"
                      >
                        <div className="flex items-baseline justify-between gap-4 mb-3">
                          <h4 className="font-display text-2xl">{s.name}</h4>
                          <span className="text-gold text-sm font-medium whitespace-nowrap">{s.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-20">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold hover-gold border-b border-gold pb-2"
              >
                Pełna oferta i ceny w Booksy <ChevronRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REZERWACJA CTA */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden bg-primary text-background">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
        <Reveal>
          <div className="relative max-w-3xl mx-auto text-center">
            <Calendar className="text-gold mx-auto mb-6" size={36} strokeWidth={1} />
            <p className="eyebrow text-gold mb-6">Rezerwacja online</p>
            <h2 className="font-display text-5xl md:text-7xl text-background leading-tight text-balance">
              Twój termin <span className="italic">czeka</span>.
            </h2>
            <div className="gold-line h-px w-24 mx-auto my-10" />
            <p className="text-background/70 mb-12 text-lg font-light max-w-xl mx-auto">
              Sprawdź dostępne terminy i zarezerwuj wizytę w wygodny sposób przez Booksy — w kilka sekund.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-primary px-12 py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-background transition-colors duration-300"
            >
              Umów wizytę online <ChevronRight size={14} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-28 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="eyebrow text-gold">Galeria</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4">Nasze realizacje</h2>
              <div className="gold-line h-px w-20 mx-auto my-8" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[
              { src: g1, span: "row-span-2", h: "h-full" },
              { src: g2, span: "", h: "h-64 md:h-80" },
              { src: g4, span: "row-span-2", h: "h-full" },
              { src: g5, span: "", h: "h-64 md:h-80" },
              { src: g3, span: "", h: "h-64 md:h-80" },
              { src: g6, span: "row-span-2 col-span-2 md:col-span-1", h: "h-full" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 60} className={`${img.span} overflow-hidden group`}>
                <div className="overflow-hidden h-full">
                  <img
                    src={img.src}
                    alt={`Realizacja ${i + 1}`}
                    loading="lazy"
                    className={`w-full ${img.h} object-cover transition-transform duration-1000 group-hover:scale-110`}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground hover-gold"
              >
                <Instagram size={16} /> Zobacz więcej na Instagramie
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPINIE */}
      <section id="opinie" className="py-28 md:py-40 px-6 lg:px-12 bg-primary text-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="eyebrow text-gold">Opinie klientów</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4 text-background">
                Co mówią o nas <span className="italic text-gold-soft">klienci</span>
              </h2>
              <div className="gold-line h-px w-20 mx-auto my-8" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="border border-background/15 p-10 h-full hover:border-gold transition-colors duration-500">
                  <div className="text-gold mb-6 tracking-widest text-sm">{"★".repeat(t.rating)}</div>
                  <p className="font-display text-xl leading-relaxed text-background/90 italic mb-8">
                    „{t.text}"
                  </p>
                  <p className="eyebrow text-background/60">— {t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-28 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="eyebrow text-gold">Kontakt</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4">Odwiedź nas</h2>
              <div className="gold-line h-px w-20 mx-auto my-8" />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal>
              <div className="space-y-10">
                <div className="flex gap-5">
                  <MapPin className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.4} />
                  <div>
                    <p className="eyebrow text-muted-foreground mb-2">Adres</p>
                    <p className="font-display text-2xl">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Phone className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.4} />
                  <div>
                    <p className="eyebrow text-muted-foreground mb-2">Telefon</p>
                    <a href={`tel:${PHONE}`} className="font-display text-2xl hover-gold">{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Clock className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.4} />
                  <div className="flex-1">
                    <p className="eyebrow text-muted-foreground mb-4">Godziny otwarcia</p>
                    <ul className="space-y-2">
                      {HOURS.map((h) => (
                        <li key={h.day} className="flex justify-between text-sm font-light border-b border-border/60 pb-2">
                          <span className="text-foreground">{h.day}</span>
                          <span className={h.time === "Zamknięte" ? "text-muted-foreground" : "text-foreground"}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-[500px] lg:h-full min-h-[500px] border border-border">
                <iframe
                  title="Mapa AP Hair Studio"
                  src="https://www.google.com/maps?q=Generała+Romualda+Traugutta+69%2F1B%2C+50-417+Wrocław&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-40 px-6 lg:px-12 bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="eyebrow text-gold">FAQ</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4">Często zadawane pytania</h2>
              <div className="gold-line h-px w-20 mx-auto my-8" />
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <FaqItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-background pt-20 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-background/15">
            <div>
              <p className="font-display text-3xl">AP <span className="text-gold">·</span> Hair Studio</p>
              <p className="text-background/60 mt-4 text-sm font-light leading-relaxed">
                Premium salon fryzjerski w sercu Wrocławia. Tworzymy fryzury, które podkreślają Twoją indywidualność.
              </p>
            </div>
            <div>
              <p className="eyebrow text-gold mb-5">Kontakt</p>
              <p className="text-sm text-background/70 font-light">{ADDRESS}</p>
              <a href={`tel:${PHONE}`} className="text-sm text-background/70 hover-gold block mt-2">{PHONE_DISPLAY}</a>
            </div>
            <div>
              <p className="eyebrow text-gold mb-5">Obserwuj nas</p>
              <div className="flex gap-3">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-11 h-11 border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Instagram size={16} />
                </a>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-11 h-11 border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/50 uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} AP Hair Studio. Wszelkie prawa zastrzeżone.</p>
            <p>Wrocław · Polska</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border bg-background">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 p-6 text-left"
      >
        <span className="font-display text-xl">{q}</span>
        <span className={`text-gold text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-muted-foreground font-light leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
