import { useEffect, useState } from "react"
import { featuredDrops, storeProducts } from "./data/products"

export default function Storefront() {
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false)
    }
    const desktop = window.matchMedia("(min-width: 1024px)")
    const sync = () => {
      if (desktop.matches) setNavOpen(false)
    }
    window.addEventListener("keydown", onKey)
    desktop.addEventListener("change", sync)
    return () => {
      window.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", sync)
    }
  }, [])
  return (
<div>
    <header className="site-header">
    <div className="site-header-shell">
      <div className="site-header-card">
        <a aria-label="LAYERED home" className="site-logo" data-path="shop" href="#">
          <span aria-hidden="true" className="site-logo-mark">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
          </span>
          <span className="site-logo-word">LAYERED</span>
        </a>
        <nav aria-label="Primary" className="site-nav hidden lg:flex items-center gap-7">
          <a aria-current="page" className="site-nav-link is-active" data-path="shop" href="#">Shop</a>
          <a className="site-nav-link" data-path="custom-print" href="#custom-quote">Custom print</a>
          <a className="site-nav-link" data-path="how-it-works" href="#how-it-works">How it works</a>
          <a className="site-nav-link" data-path="gallery" href="#featured-drops">Featured Drops</a>
          <a className="site-nav-link" data-path="faq" href="#faq-container">FAQ</a>
        </nav>
        <div className="site-actions">
          <button aria-label="Search catalog" className="site-icon-btn neo-btn-active" type="button"><span aria-hidden="true" className="material-symbols-outlined">search</span></button>
          <a aria-label="Cart" className="site-icon-btn site-cart" data-path="cart" href="#">
            <span aria-hidden="true" className="material-symbols-outlined">shopping_bag</span>
            <span aria-hidden="true" className="site-cart-count">3</span>
          </a>
          <a className="site-cta hidden sm:inline-flex" data-path="custom-print" href="#custom-quote">Upload &amp; print</a>
          <button aria-label="Account" className="site-avatar" type="button"><span aria-hidden="true" className="material-symbols-outlined">person</span></button>
          <button aria-controls="site-mobile-nav" aria-expanded={navOpen} aria-label={navOpen ? "Close menu" : "Open menu"} className="site-icon-btn site-menu-btn" type="button" onClick={() => setNavOpen((v) => !v)}>
            <span aria-hidden="true" className="material-symbols-outlined">{navOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      <div className="site-mobile-nav" hidden={!navOpen} id="site-mobile-nav">
        <nav aria-label="Mobile navigation" className="site-mobile-list">
          <a aria-current="page" className="site-mobile-link" data-path="shop" href="#" onClick={() => setNavOpen(false)}><span aria-hidden="true">01</span>Shop</a>
          <a className="site-mobile-link" data-path="custom-print" href="#custom-quote" onClick={() => setNavOpen(false)}><span aria-hidden="true">02</span>Custom print</a>
          <a className="site-mobile-link" data-path="how-it-works" href="#how-it-works" onClick={() => setNavOpen(false)}><span aria-hidden="true">03</span>How it works</a>
          <a className="site-mobile-link" data-path="gallery" href="#featured-drops" onClick={() => setNavOpen(false)}><span aria-hidden="true">04</span>Featured Drops</a>
          <a className="site-mobile-link" data-path="faq" href="#faq-container" onClick={() => setNavOpen(false)}><span aria-hidden="true">05</span>FAQ</a>
        </nav>
        <a className="site-mobile-cta" data-path="custom-print" href="#custom-quote" onClick={() => setNavOpen(false)}>
          Upload &amp; print
          <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  </header>
  <main className="w-full bg-surface pt-28 sm:pt-32 lg:pt-36"><div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="hero-section w-full px-gutter-mobile md:px-margin pt-space-lg pb-space-xl">
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center max-w-[1440px] mx-auto">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-copy lg:col-span-6 flex flex-col space-y-4 reveal-on-scroll">
            <div className="status-label inline-flex items-center gap-2 self-start bg-surface-container-lowest text-on-surface px-3.5 py-1.5 rounded-full border border-on-surface/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-spec-code text-[12px] uppercase font-bold tracking-wider text-on-surface">Nozzle Hot: 215°C • Batch #84 Slicing</span>
            </div>
            <h1 className="font-headline-lg text-[52px] sm:text-[72px] lg:text-[88px] leading-[1.02] text-on-surface tracking-tight">
              If you can imagine it, we can{" "}
              <span className="inline-block bg-primary text-on-primary font-badge-display text-[54px] sm:text-[76px] lg:text-[92px] px-3.5 py-1 rounded-xl shadow-sm leading-none align-middle mx-1">
                print it.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Send a photo, sketch or CAD file. Pick the scale and material. We print, finish and ship straight off our calibrated build plates.
            </p>
            {/* CTA Buttons with Emil Kowalski spring and active scale */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a className="btn-primary-specimen px-8 py-3.5 bg-primary text-on-primary font-badge-md text-badge-md rounded-xl border border-primary hover:bg-[#00479b] shadow-sm flex items-center gap-2" href="#custom-quote">
                <span>Upload your design</span>
                <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
              </a>
              <a className="btn-secondary-specimen px-8 py-3.5 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md rounded-xl border border-on-surface/20 hover:border-on-surface/40 hover:bg-surface-container-low shadow-sm" href="#ready-to-ship">
                Shop ready-made
              </a>
            </div>
            {/* Trust Row */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 text-on-surface font-spec-code text-[12px] font-bold opacity-90">
              <span className="trust-mark-pill flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 border border-on-surface/15 rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span> 500+ prints delivered
              </span>
              <span className="trust-mark-pill flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 border border-on-surface/15 rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">straighten</span> Any size up to 40cm
              </span>
              <span className="trust-mark-pill flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 border border-on-surface/15 rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">view_in_ar</span> PLA, PETG, Resin
              </span>
            </div>
          </div>

          {/* Right Column: Interactive keycap orb */}
          <div className="hero-visual lg:col-span-6 relative min-h-[480px] lg:min-h-[640px] flex items-center justify-center lg:justify-start xl:justify-center p-0 reveal-on-scroll reveal-delay-2">
            <div className="orb-react-host" id="keycap-orb-react-root" />
          </div>
        </div>
      </section>
      {/* SECTION: CATEGORY NAVIGATION (From User Reference: 8 Categories) */}
      <section aria-label="Shop by category" className="categories-section w-full px-gutter-mobile md:px-margin py-space-lg reveal-on-scroll">
        <div className="section-heading flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">Browse by Category</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[44px] text-on-surface mt-1">
              Explore Our 3D Print Collections
            </h2>
          </div>
          <div className="flex items-center gap-2 self-start bg-surface-container-low px-3.5 py-1.5 border border-on-surface/10 rounded-full">
            <span aria-hidden="true" className="material-symbols-outlined text-primary text-[17px]">category</span>
            <span className="font-spec-code text-[12px] text-on-surface/80">08 curated categories &middot; precision fabrication</span>
          </div>
        </div>

        {/* 8-Card Grid matching exact reference design with high-quality retina assets */}
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Figurines & Collectibles */}
          <a
            href="#ready-to-ship"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/figurines-photo.png"
                alt="Figurines & Collectibles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Figurines &amp; Collectibles
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  ANIME &bull; MOVIES &bull; CUSTOM
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 2: Home Decor */}
          <a
            href="#ready-to-ship"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/home-decor-photo.png"
                alt="Home Decor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Home Decor
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  VASES &bull; LAMPS &bull; ART PIECES
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 3: Functional Parts */}
          <a
            href="#custom-quote"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-3"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/functional-parts-photo.png"
                alt="Functional Parts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Functional Parts
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  PROTOTYPES &bull; REPLACEMENTS &bull; TOOLS
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 4: Lighting */}
          <a
            href="#ready-to-ship"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/lighting-photo.png"
                alt="Lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Lighting
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  DESK LAMPS &bull; NIGHT LIGHTS &bull; CUSTOM
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 5: Gifts & Personalised */}
          <a
            href="#custom-quote"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/gifts-personalised-photo.png"
                alt="Gifts & Personalised"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Gifts &amp; Personalised
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  CUSTOM NAMES &bull; FRAMES &bull; KEEPSAKES
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 6: Desk Accessories */}
          <a
            href="#ready-to-ship"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/desk-accessories-photo.png"
                alt="Desk Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Desk Accessories
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  ORGANIZERS &bull; STANDS &bull; HOLDERS
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 7: Planters */}
          <a
            href="#ready-to-ship"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-3"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/planters-photo.png"
                alt="Planters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Planters
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  INDOOR &bull; OUTDOOR &bull; CREATIVE
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>

          {/* Card 8: Custom 3D Printing */}
          <a
            href="#custom-quote"
            className="group relative bg-[#f2f4f7] rounded-3xl overflow-hidden border border-black/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal-on-scroll reveal-delay-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e9f0]">
              <img
                src="/categories/custom-3d-printing-photo.png"
                alt="Custom 3D Printing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#f2f4f7] to-[#f2f4f7]/90 mt-auto">
              <div>
                <h3 className="font-body-md font-bold text-[18px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Custom 3D Printing
                </h3>
                <p className="font-spec-code text-[10px] font-bold text-on-surface-variant/70 tracking-wider uppercase mt-1">
                  YOUR IDEA &bull; OUR PRINT &bull; ENDLESS
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-primary group-hover:text-white text-on-surface shadow-xs flex items-center justify-center transition-all flex-shrink-0 ml-3">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* SECTION: FEATURED DROPS */}
      <section aria-label="Featured Drops" className="featured-drops-section w-full px-gutter-mobile md:px-margin py-space-xl bg-[#f4f7fb] border-y border-on-surface/10 reveal-on-scroll" id="featured-drops">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">Specimen Releases</span>
              <h2 className="font-headline-lg text-[32px] sm:text-[44px] text-on-surface leading-tight mt-1">
                Featured Drops
              </h2>
            </div>
            <a
              href="#ready-to-ship"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto px-5 py-2.5 bg-surface-container-lowest text-on-surface font-spec-code text-[13px] font-bold uppercase border border-on-surface/15 rounded-xl shadow-sm hover:border-on-surface/30 hover:bg-surface-container-low active:scale-[0.98] transition-all"
            >
              View catalog →
            </a>
          </div>

          {/* 8-Card Grid (Specimen Catalogue layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredDrops.map((drop, idx) => (
              <article
                key={drop.id}
                className={`group bg-surface-container-lowest border border-on-surface/10 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200 reveal-on-scroll reveal-delay-${(idx % 4) + 1}`}
              >
                <div className="relative aspect-square w-full bg-[#eef3f9] overflow-hidden">
                  <img
                    src={drop.image}
                    alt={drop.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    loading="lazy"
                  />
                  {drop.badge && (
                    <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-spec-code text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-primary/20 shadow-xs">
                      {drop.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="font-body-md font-bold text-[15px] text-on-surface line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                      {drop.title}
                    </h3>
                    <div className="mt-2.5 flex items-baseline justify-between">
                      <div className="font-badge-display text-[26px] text-primary leading-tight">
                        {drop.price}
                      </div>
                      {drop.originalPrice && (
                        <div className="flex items-center gap-1.5 font-spec-code text-[11px]">
                          <span className="text-on-surface-variant line-through opacity-70">{drop.originalPrice}</span>
                          <span className="text-primary font-bold">
                            {drop.discount}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <a
                    href={drop.href}
                    className="w-full py-2.5 px-4 bg-primary hover:bg-[#00479b] text-on-primary font-spec-code text-[12px] font-bold uppercase rounded-xl border border-primary shadow-xs active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-center"
                  >
                    {drop.ctaText}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="#ready-to-ship"
              className="inline-flex items-center gap-2 px-7 py-3 bg-surface-container-lowest text-on-surface font-spec-code text-[13px] font-bold uppercase border border-on-surface/20 rounded-xl shadow-sm hover:border-on-surface/40 hover:bg-surface-container-low active:scale-[0.98] transition-all"
            >
              Explore all 24 workshop specimens →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: CUSTOM PRINT UPLOADER (Interactive Estimator) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl reveal-on-scroll" id="custom-quote">
        <div className="w-full bg-surface-container-lowest border border-on-surface/12 rounded-[24px] shadow-sm p-6 sm:p-10">
          {/* Box Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-on-surface/10 gap-4">
            <div>
              <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">Instant Fabrication Workbench</span>
              <h2 className="font-headline-lg text-[28px] sm:text-[38px] text-on-surface mt-1">Instant Slicer &amp; Quote Estimator</h2>
            </div>
            <div className="flex items-center gap-2.5 bg-surface-container-low px-4 py-2 border border-on-surface/10 rounded-full">
              <span className="material-symbols-outlined text-primary text-[20px]">precision_manufacturing</span>
              <span className="font-spec-code text-[12px] text-on-surface/80">Max Build: 400 × 400 × 450 mm</span>
            </div>
          </div>
          {/* Main Slicer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left Dropzone */}
            <div className="lg:col-span-6 flex flex-col">
              <label className="block font-spec-code text-[12px] font-bold uppercase tracking-wider mb-2.5 text-on-surface">1. Upload CAD or 2D Reference</label>
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-on-surface/20 rounded-2xl bg-[#f8faff] hover:bg-surface-container-low p-8 text-center transition-all cursor-pointer group" id="drop-area">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform mb-4">
                  <span className="material-symbols-outlined text-[32px]">upload_file</span>
                </div>
                <h3 className="font-headline-sm text-[20px] text-on-surface mb-1.5">Drop image or 3D file here</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant max-w-sm mb-5">
                  Accepts <strong>STL, OBJ, STEP, 3MF</strong>, or 2D phone photos, sketches &amp; vector logos.
                </p>
                <input accept=".stl,.obj,.step,.3mf,.png,.jpg,.jpeg" className="hidden" id="file-selector" type="file" />
                <button className="px-6 py-2.5 bg-surface-container-lowest text-on-surface font-spec-code text-[13px] font-bold uppercase border border-on-surface/20 rounded-xl shadow-xs hover:border-on-surface/40 hover:bg-surface-container-low active:scale-[0.98] transition-all" onClick={() => document.getElementById("file-selector")?.click()} type="button">
                  Browse Workshop Files
                </button>
                <p className="font-spec-code text-[11px] text-on-surface-variant/80 mt-3.5">Max file size: 120MB per item</p>
              </div>
            </div>
            {/* Right Options & Live Quote */}
            <div className="lg:col-span-6 flex flex-col space-y-5">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-spec-code text-[12px] font-bold uppercase tracking-wider text-on-surface">2. Select Scale / Height</span>
                  <span className="font-spec-code text-[11px] text-on-surface-variant">Z-Axis Dimensions</span>
                </div>
                <div className="flex flex-wrap gap-2" id="size-chip-group">
                  <button className="size-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-multiplier="0.8" type="button">5cm</button>
                  <button className="size-chip active-chip px-4 py-2 rounded-xl border border-primary font-spec-code text-[12px] font-bold bg-primary text-on-primary shadow-xs active:scale-[0.98] transition-all" data-multiplier={1.0} type="button">10cm</button>
                  <button className="size-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-multiplier="1.6" type="button">15cm</button>
                  <button className="size-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-multiplier="2.2" type="button">20cm</button>
                  <button className="size-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-multiplier="3.5" type="button">Custom (Up to 40cm)</button>
                </div>
              </div>
              {/* Material Selector */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-spec-code text-[12px] font-bold uppercase tracking-wider text-on-surface">3. Filament / Resin Polymer</span>
                  <span className="font-spec-code text-[11px] text-on-surface-variant">Density &amp; Toughness</span>
                </div>
                <div className="flex flex-wrap gap-2" id="mat-chip-group">
                  <button className="mat-chip active-chip px-4 py-2 rounded-xl border border-primary font-spec-code text-[12px] font-bold bg-primary text-on-primary shadow-xs active:scale-[0.98] transition-all" data-cost={0} type="button">PLA Pure</button>
                  <button className="mat-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-cost={120} type="button">PETG Tough</button>
                  <button className="mat-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-cost={280} type="button">8K Resin</button>
                  <button className="mat-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-cost={190} type="button">TPU Flex</button>
                </div>
              </div>
              {/* Finish Selector */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-spec-code text-[12px] font-bold uppercase tracking-wider text-on-surface">4. Post-Processing Finish</span>
                </div>
                <div className="flex flex-wrap gap-2" id="finish-chip-group">
                  <button className="finish-chip active-chip px-4 py-2 rounded-xl border border-primary font-spec-code text-[12px] font-bold bg-primary text-on-primary shadow-xs active:scale-[0.98] transition-all" data-cost={0} type="button">Raw Layer Lines</button>
                  <button className="finish-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-cost={150} type="button">Sanded Matte</button>
                  <button className="finish-chip px-4 py-2 rounded-xl border border-on-surface/15 font-spec-code text-[12px] font-bold bg-surface-container-lowest text-on-surface hover:border-on-surface/30 active:scale-[0.98] transition-all" data-cost={390} type="button">Studio Painted</button>
                </div>
              </div>
              {/* Live Price Banner Card */}
              <div className="bg-[#f0f5fc] border border-primary/20 rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <span className="font-spec-code text-[11px] text-on-surface/70 font-bold uppercase tracking-wider block">Estimated Build Cost</span>
                  <span className="font-badge-display text-[42px] text-primary leading-none transition-transform duration-200 inline-block" id="price-display">Rs 480</span>
                </div>
                <div className="text-right">
                  <span className="lead-time-tag font-spec-code text-[11px] font-bold bg-surface-container-lowest px-3 py-1 border border-on-surface/15 rounded-full inline-block text-on-surface">
                    Ready in ~3 days
                  </span>
                  <p className="font-spec-code text-[11px] text-on-surface/60 mt-1">Includes support removal</p>
                </div>
              </div>
              {/* Action Button */}
              <button className="w-full py-3.5 bg-primary text-on-primary font-spec-code text-[13px] font-bold uppercase rounded-xl border border-primary shadow-xs hover:bg-[#00479b] active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button">
                <span>Lock in fabrication quote</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              {/* Disclaimer Note */}
              <p className="font-spec-code text-[11px] text-on-surface-variant/80 text-center">
                * No CAD file? Any photo or napkin sketch works. Our engineering team prepares geometry.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3: HOW IT WORKS */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl reveal-on-scroll" id="how-it-works">
        <div className="section-heading flex flex-col space-y-2 mb-8">
          <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">
            Fabrication Protocol
          </span>
          <h2 className="font-headline-lg text-[32px] sm:text-[46px] leading-tight text-on-surface">
            From your concept to your desk in 4 steps
          </h2>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-badge-display text-[38px] text-primary leading-none">01</span>
                <span className="font-spec-code text-[11px] font-bold text-on-surface/70 bg-surface-container-low px-2 py-0.5 rounded border border-on-surface/10">CAD / SKETCH</span>
              </div>
              <h3 className="font-headline-sm text-[20px] text-on-surface mb-1.5">Upload Concept</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-4">
                Drop any 3D model, napkin sketch, screenshot or camera photo.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border border-on-surface/10 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="A blueprint engineering sketch and wireframe 3D model CAD viewport displayed on a laptop screen next to a coffee cup and mechanical pencil." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRWnfnpmun0Z6eQi4Kcp2HxZag1x0GwJNWZ-UL6VJ5W3v5g5D8Q_BJMZ14QHU5BhgGfoimPqLnAOwbCs6dxtSwxSIUdS6W2Li4JtawTW7P_qiawf6--PA9RLynncMwg3fWAzUkrtiut3BdcCF_Ng73MW1X5CP-NGeYTRhIwk56kiBiThIEkQQwzC3f2M0JKxMeRXlHDMEv1YPpiBAf7Hw1PTDZC3NWLXXGWIEpMrQ" />
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-badge-display text-[38px] text-primary leading-none">02</span>
                <span className="font-spec-code text-[11px] font-bold text-on-surface/70 bg-surface-container-low px-2 py-0.5 rounded border border-on-surface/10">DIMENSIONS</span>
              </div>
              <h3 className="font-headline-sm text-[20px] text-on-surface mb-1.5">Configure Spec</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-4">
                Pick scale, wall density and polymer finish to match your load requirements.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border border-on-surface/10 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Precision stainless steel digital vernier calipers measuring the exact diameter of a vibrant blue filament spool with millimeter markings visible." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz4BVyXxVT8xbre7TfhwNLG5Pd6shCx899Gb0NbPLHf5HFmWIlM3Hlo01fuXslcSNUY7bG-DuLBInOIVrJUgszumIxangmbct1g5V6oFcyfFdOXnZUSA0RCjIAK0vr-Z0kENXV66KvQEFboL_qbI8pZ1LpoaR_reRTz2wvcftuZc30uDTo-XbL1xTI0IFjqR1mWBoQGLhXS1T_cbvWJOtBrAl9Hi2Ok3CwNnpl2x4" />
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-badge-display text-[38px] text-primary leading-none">03</span>
                <span className="font-spec-code text-[11px] font-bold text-on-surface/70 bg-surface-container-low px-2 py-0.5 rounded border border-on-surface/10">HOTEND ACTIVE</span>
              </div>
              <h3 className="font-headline-sm text-[20px] text-on-surface mb-1.5">Precision Print</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-4">
                High-flow nozzles extrude molten engineering polymers layer-by-layer.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border border-on-surface/10 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Extreme macro shot of a brass 3D printer nozzle extruding clean lines of blue molten thermoplastic polymer onto a textured heated bed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0WN6_lFDSsh1q_z7VwOk-VsS86yMas1fLnWgQP6unP7XLycq9kuRvu9Y0Y8e8xZsoHxWcNuJFTqdUoF9hPOaw3FO_tU0V0cgAYIbvEQjMMpQ7CIPyPJwvaxPyulwXEKLDeILkle_pi67Y7YsBZqUsPd1rsM_ZxKPQO-QlsMxpDLo0cyU5-Hz1jyIFtM5nybDU_ASl23Vlr7lWx0KROoZqpOw4aCHg4tAvfA2Gvw0" />
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-badge-display text-[38px] text-on-surface leading-none">04</span>
                <span className="font-spec-code text-[11px] font-bold text-on-surface/70 bg-surface-container-low px-2 py-0.5 rounded border border-on-surface/10">DISPATCH</span>
              </div>
              <h3 className="font-headline-sm text-[20px] text-on-surface mb-1.5">Inspected &amp; Shipped</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-4">
                Cleaned, dimensional QC verified, and safely packed straight to your door.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border border-on-surface/10 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Kraft cardboard shipping box carefully packed with honeycomb paper cushion and custom 3D printed mechanical parts ready for express shipping." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO71TlPCt1W35KR5kJgARcA0KIuJFWsepZe6-EmDWpaF_E17Zk7GywOO_s4V2ovGf3oCxLYEDTpYPI_TGfKvjBW2neb6F-F7iQkE1rNsq9aw-_PUKwYyiaBNazEhzBJZsMPutNi8wMU_1ChA04zO0_tWtgQtHIbyrFwtzIUswsV5XIQt8hGtPKu6CEjZO0ion7ZWX_FVpmD9w0Q5ZH6oUVXtGza7uUARGvq-w6Wm0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: READY TO SHIP (Product Catalog) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl reveal-on-scroll" id="ready-to-ship">
        <div className="section-heading flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-space-lg">
          <div>
            <span className="eyebrow eyebrow--catalog">Curated Workshop Stock</span>
            <h2 className="font-headline-lg text-[38px] sm:text-[54px] text-on-surface">Ready to ship (fresh off the bed)</h2>
          </div>
          <div className="max-w-sm">
            <p className="font-body-md text-on-surface-variant">Pre-printed &amp; checked for instant dispatch within 24 hours.</p>
            <div className="product-slider-controls" aria-label="Ready-made product controls">
              <button id="product-prev" aria-label="Show previous products" type="button"><span className="material-symbols-outlined" aria-hidden="true">arrow_back</span></button>
              <button id="product-next" aria-label="Show next products" type="button"><span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
            </div>
          </div>
        </div>
        {/* Horizontally scrollable product slider */}
        <div className="product-grid" id="product-slider" role="region" tabIndex={0} aria-label="Ready-made products">
          {storeProducts.map((p, idx) => (
            <article key={p.name} className="product-card">
              <div className="product-card-top">
                <span className="product-plate">PLATE {String(idx + 1).padStart(2, "0")}</span>
                <span className="product-status">IN STOCK</span>
              </div>
              <div className="product-media">
                <img
                  alt={p.alt}
                  src={p.image}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="stock-stamp rotate-[-2deg]">PST</span>
              </div>
              <div className="product-body">
                <h3 className="product-name line-clamp-1">{p.name}</h3>
                <p className="product-spec">{p.specs || "Custom Fabrication"}</p>
                <p className="product-printrow">
                  <span aria-hidden="true" className="swatch-group">
                    <i className="swatch swatch--cobalt" />
                    <i className="swatch swatch--light" />
                    <i className="swatch swatch--ink" />
                  </span>
                  {p.material || "PLA • 0.20MM LAYERS"}
                </p>
              </div>
              <div className="product-price-row">
                <div className="flex flex-col">
                  <span className="product-price">{p.price}</span>
                  {p.originalPrice && (
                    <span className="text-[12px] line-through text-on-surface-variant font-spec-code">
                      {p.originalPrice}
                    </span>
                  )}
                </div>
                <a
                  href="#custom-quote"
                  className="product-cta flex items-center justify-center text-center font-badge-md text-badge-md"
                >
                  Add to plate
                </a>
              </div>
            </article>
          ))}
        </div>
        {/* Centered Bottom Link Button */}
        <div className="text-center pt-space-lg">
          <a
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow-md hover:bg-secondary-container hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            href="#custom-quote"
          >
            Need a custom design? Upload CAD or 2D image →
          </a>
        </div>
      </section>
      {/* SECTION 5: SHOW US YOUR WEIRD (Community Proof) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl bg-[#f4f7fb] border-y border-on-surface/10 reveal-on-scroll" id="wild-proof">
        <div className="section-heading flex flex-col space-y-2 mb-8">
          <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">
            Field Inspection Log
          </span>
          <h2 className="font-headline-lg text-[32px] sm:text-[46px] text-on-surface">Specimens in the wild</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Real customer fabrications tagged from the wild. Zero mockups, authentic layer lines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Community Item 1 */}
          <div className="md:col-span-4 flex flex-col space-y-3.5">
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-full h-64 rounded-xl overflow-hidden border border-on-surface/10 bg-[#eef3f9]">
                <img className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300" data-alt="3D printed customized realistic dog bust figurine in matte bone-white PLA standing next to an actual golden retriever looking curiously at it." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpGG6wo1HxGSuNZDJYoVYFG3MyPqZGDKYQu_gE8XPPZPKP_fcVFHwR7dbxtT1Ded0YV-lfh0o2iMZctfsUEfe4EUPSZOmdXj7V7thkxwPlCjlv8iqtou2cgFBzbGiCKDWMc_XDbYeExARDyByvehBnF6_nbYn4mdD4EPEOFOPQXTHWvxX4ctCbkjRGz8Vq8fh-bcgZK2lhz1TBoSUUw-b_CR4dv2OqhKoSULb-4Ec" />
              </div>
              <div className="pt-3 flex items-center justify-between font-spec-code text-[12px] text-on-surface">
                <span className="font-bold text-primary">@riya.makes</span>
                <span className="text-on-surface-variant">Dog Bust • 15cm</span>
              </div>
            </div>
            <div className="bg-[#eff5fd] border border-primary/20 rounded-2xl p-4 text-on-surface">
              <p className="font-body-md text-[14px] font-medium text-on-surface">
                “Turned my phone camera sketch into an actual desk pet. Resolution and layer quality is remarkable.”
              </p>
              <span className="font-spec-code text-[11px] block mt-2 font-bold uppercase text-primary">— Riya M., Bengaluru</span>
            </div>
          </div>
          {/* Community Item 2 */}
          <div className="md:col-span-4 flex flex-col space-y-3.5">
            <div className="bg-[#eff5fd] border border-primary/20 rounded-2xl p-4 text-on-surface">
              <p className="font-body-md text-[14px] font-medium text-on-surface">
                “Saved me from spending $150 on OEM replacement parts. Dimensions were dead accurate.”
              </p>
              <span className="font-spec-code text-[11px] block mt-2 font-bold uppercase text-primary">— Karan S., Pune</span>
            </div>
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-full h-72 rounded-xl overflow-hidden border border-on-surface/10 bg-[#eef3f9]">
                <img className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300" data-alt="High-performance custom GPU anti-sag support bracket 3D printed in rigid heat-resistant PETG installed inside a glowing gaming PC tower." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxwPmSr4oUrPVyyJVTDnPkjqMcHiMK_B75tpt_qX6nfqMzoiH_uwzMTe0wdlG3ttTILID88xO7CzfbW07xI700eUgC_0i6BMSxtEFZ7sWviqT_ETz3qfX4dnr6LDSCNieh7hhzgL1kUyPpGQ618AjKHBRZugvvYdj4tBBX34DdWiy1738TXeCSFOcI9t4645Pkk2b1AUgQ4HEjOCYUmOdra6uAIh0fybT4DPIRDIo" />
              </div>
              <div className="pt-3 flex items-center justify-between font-spec-code text-[12px] text-on-surface">
                <span className="font-bold text-primary">@karan_builds</span>
                <span className="text-on-surface-variant">GPU bracket • PETG</span>
              </div>
            </div>
          </div>
          {/* Community Item 3 */}
          <div className="md:col-span-4 flex flex-col space-y-3.5">
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-full h-72 rounded-xl overflow-hidden border border-on-surface/10 bg-[#eef3f9]">
                <img className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300" data-alt="Curved backlit 3D printed Lithophane lamp panel revealing a detailed family holiday photograph when light illuminates it from behind in a dim room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbPJBYxX-VkwjTEUPvmmDDx2-i0JDjyezFJfpyHBLJF8PFqmm4qX7UzobK5pWd9o2U9e0qAwkEhy_KzrGLC4DciQsyJ2sQarLeXFDWvLTBHPRKU7SGySn3X5VdPydVZnQx0YvkF6hwBS1qF8bLWUPKVki92eCYLp1dLuji-PgtRhj4vHEj-J_PawVhum3YIvCkdQQnLUHByf4dJN6tzP4DcS5Y-nCUw979LlsMd4" />
              </div>
              <div className="pt-3 flex items-center justify-between font-spec-code text-[12px] text-on-surface">
                <span className="font-bold text-primary">@arjun_creates</span>
                <span className="text-on-surface-variant">Lithophane Lamp</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-on-surface/10 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[26px]">photo_camera</span>
                <div>
                  <p className="font-body-md font-bold text-[14px] text-on-surface">Tag #LAYEREDprint</p>
                  <p className="font-spec-code text-[11px] text-on-surface-variant">Get featured + Rs 200 off your next spool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY US */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Copy Statement */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">Calibration Standard</span>
            <h2 className="font-headline-lg text-[36px] sm:text-[48px] leading-[1.08] text-on-surface">
              Layer by layer, calibrated to micron tolerance.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Zero stringing. Zero warped corners. We calibrate linear advance weekly, store polymers in active dry chambers, and run heated build envelopes on all performance materials.
            </p>
            <div className="pt-2 flex items-center gap-3.5">
              <div className="p-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl">
                <span className="material-symbols-outlined text-[24px]">thermostat</span>
              </div>
              <div className="font-spec-code text-[12px] text-on-surface">
                <strong>Active Heated Enclosures</strong><br />
                Consistent adhesion on ABS, Nylon and Carbon-PETG
              </div>
            </div>
          </div>
          {/* Right 2x2 Metric Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Box 1 */}
            <div className="bg-primary text-on-primary rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <span className="font-badge-display text-[54px] leading-none block">24-72h</span>
              <span className="font-headline-sm text-[20px] text-on-primary mt-2 block">Turnaround dispatch</span>
              <p className="font-spec-code text-[11px] text-on-primary/80 mt-1">Farm of 32 calibrated printers active daily</p>
            </div>
            {/* Box 2 */}
            <div className="bg-[#eff4fc] text-on-surface border border-primary/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <span className="font-badge-display text-[54px] text-primary leading-none block">0.1mm</span>
              <span className="font-headline-sm text-[20px] text-on-surface mt-2 block">Layer precision</span>
              <p className="font-spec-code text-[11px] text-on-surface/70 mt-1">Microscopic resolution with minimal stepping</p>
            </div>
            {/* Box 3 */}
            <div className="bg-surface-container-lowest text-on-surface border border-on-surface/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <span className="font-badge-display text-[54px] text-primary leading-none block">Up to 40cm</span>
              <span className="font-headline-sm text-[20px] text-on-surface mt-2 block">Single-piece volume</span>
              <p className="font-spec-code text-[11px] text-on-surface-variant mt-1">Massive monolithic components with zero seams</p>
            </div>
            {/* Box 4 */}
            <div className="bg-on-surface text-on-primary rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <span className="font-badge-display text-[54px] text-[#64a8fe] leading-none block">100%</span>
              <span className="font-headline-sm text-[20px] text-on-primary mt-2 block">Free reprint guarantee</span>
              <p className="font-spec-code text-[11px] text-on-primary/70 mt-1">If specs fail dimensional QC, we reprint immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="faq-section w-full px-gutter-mobile md:px-margin py-space-xl reveal-on-scroll">
        <div className="max-w-3xl mx-auto flex flex-col space-y-4">
          <div className="section-heading text-center mb-6">
            <span className="eyebrow-subtle font-spec-code text-[11px] font-bold text-primary tracking-widest uppercase">Knowledge Base</span>
            <h2 className="font-headline-lg text-[36px] sm:text-[48px] text-on-surface mt-1">Frequently Asked Queries</h2>
          </div>
          {/* Accordion Items */}
          <div className="space-y-3" id="faq-container">
            {/* FAQ 1 */}
            <div className="bg-surface-container-lowest border border-on-surface/12 rounded-xl shadow-xs overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-body-md font-bold text-[16px] text-on-surface">Which file formats do you accept?</span>
                <span className="w-7 h-7 rounded-full bg-surface-container-low text-primary flex items-center justify-center font-bold text-[14px] toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-5 pb-4 border-t border-on-surface/10 pt-3">
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  We natively accept <strong>STL, OBJ, STEP, 3MF, and DXF</strong> files. If you don't have a 3D model, you can upload clear phone photos, 2D vector logos, or pencil sketches—our CAD designers prepare the printable geometry for you.
                </p>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="bg-surface-container-lowest border border-on-surface/12 rounded-xl shadow-xs overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-body-md font-bold text-[16px] text-on-surface">Can you print from just a photo or sketch?</span>
                <span className="w-7 h-7 rounded-full bg-surface-container-low text-primary flex items-center justify-center font-bold text-[14px] toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-5 pb-4 border-t border-on-surface/10 pt-3">
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Yes! Over 40% of our orders start from a simple 2D reference. Upload your image via our quote tool; our in-house modelers review it and share a 3D interactive preview within 2-4 hours.
                </p>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="bg-surface-container-lowest border border-on-surface/12 rounded-xl shadow-xs overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-body-md font-bold text-[16px] text-on-surface">What is the maximum size print you can do?</span>
                <span className="w-7 h-7 rounded-full bg-surface-container-low text-primary flex items-center justify-center font-bold text-[14px] toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-5 pb-4 border-t border-on-surface/10 pt-3">
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Our continuous large-format printers handle up to <strong>400 × 400 × 450 mm</strong> in a single seamless block. Larger models (like cosplay armor or architectural models) are sliced into interlocking indexed parts.
                </p>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="bg-surface-container-lowest border border-on-surface/12 rounded-xl shadow-xs overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-body-md font-bold text-[16px] text-on-surface">How long does shipping take?</span>
                <span className="w-7 h-7 rounded-full bg-surface-container-low text-primary flex items-center justify-center font-bold text-[14px] toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-5 pb-4 border-t border-on-surface/10 pt-3">
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Prints are dispatched in 24 to 72 hours depending on size. We ship via express air courier across India (2-4 days transit). Tracking links are sent straight to your WhatsApp and email.
                </p>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="bg-surface-container-lowest border border-on-surface/12 rounded-xl shadow-xs overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-body-md font-bold text-[16px] text-on-surface">Can I get my print hand-painted or sanded?</span>
                <span className="w-7 h-7 rounded-full bg-surface-container-low text-primary flex items-center justify-center font-bold text-[14px] toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-5 pb-4 border-t border-on-surface/10 pt-3">
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Absolutely. Choose between Raw (authentic clean layer lines), Sanded Matte (micro-abrasive smoothing), or Studio Painted (hand-primed, painted, and matte-varnished by our miniature artists).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA BLOCK */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl reveal-on-scroll">
        <div className="relative bg-primary text-on-primary rounded-[24px] shadow-md p-8 sm:p-14 overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="font-spec-code text-[11px] font-bold text-on-primary/80 uppercase tracking-widest block mb-2">
              Ready to Fabricate?
            </span>
            <h2 className="font-headline-lg text-[44px] sm:text-[68px] leading-[1.04] text-on-primary mb-4">
              Got an idea? Send it over.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-8 max-w-lg">
              Zero CAD experience needed. Free slicing consultation. Lock in your print before today's build queue closes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="px-7 py-3.5 bg-surface-container-lowest text-on-surface font-spec-code text-[13px] font-bold uppercase rounded-xl shadow-sm hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center gap-2" href="#custom-quote">
                <span>Upload Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <span className="font-spec-code text-[12px] text-on-primary/80">
                • No credit card needed for quotes
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* Client-side Interactive Behavior */}
  </main><footer className="w-full bg-inverse-surface text-inverse-on-surface border-t-[3px] border-on-surface pt-space-xl pb-margin"><div className="w-full px-gutter md:px-margin"><div className="w-full pb-space-lg border-b-[3px] border-on-surface-variant/30 flex flex-col md:flex-row items-baseline justify-between gap-4"><span className="font-headline-lg text-[64px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-secondary-container select-none">LAYERED</span><span className="font-spec-code text-spec-code text-outline-variant uppercase tracking-wider">Tactile Fabrication Studio // 0.12 - 0.28mm Precision</span></div><div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg py-space-xl"><div className="md:col-span-4 space-y-space-sm"><h3 className="font-headline-sm text-headline-sm text-surface-bright">Quick Links</h3><ul className="space-y-2 font-body-md text-body-md"><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="shop" href="#">Shop</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="custom-print" href="#">Custom print</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="gallery" href="#">Gallery</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="shipping" href="#">Shipping</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="returns" href="#">Returns</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="contact" href="#">Contact</a></li></ul></div><div className="md:col-span-3 space-y-space-sm"><h3 className="font-headline-sm text-headline-sm text-surface-bright">Socials</h3><ul className="space-y-3 font-body-md text-body-md"><li><a className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-surface border-[2px] border-surface-container-highest rounded-lg text-surface-container-highest hover:text-surface-bright hover:bg-inverse-surface neo-shadow-sm transition-all" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span>Instagram</a></li><li><a className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-surface border-[2px] border-surface-container-highest rounded-lg text-surface-container-highest hover:text-surface-bright hover:bg-inverse-surface neo-shadow-sm transition-all" href="#"><span className="material-symbols-outlined text-[18px]">smart_display</span>YouTube</a></li><li><a className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-surface border-[2px] border-surface-container-highest rounded-lg text-surface-container-highest hover:text-surface-bright hover:bg-inverse-surface neo-shadow-sm transition-all" href="#"><span className="material-symbols-outlined text-[18px]">chat</span>WhatsApp</a></li></ul></div><div className="md:col-span-5 space-y-space-sm"><h3 className="font-headline-sm text-headline-sm text-surface-bright">Newsletter</h3><p className="font-body-md text-body-md text-outline-variant">Get notified about limited filament drops, new materials, and community model batches.</p><form className="flex flex-col sm:flex-row gap-3 pt-space-xs"><input className="flex-1 px-4 py-3 bg-surface-container-lowest text-on-surface border-[3px] border-on-surface rounded-xl font-body-md text-body-md focus:outline-none neo-shadow-sm placeholder:text-outline" placeholder="your.email@workshop.io" type="email" /><button className="px-6 py-3 bg-primary-container text-on-primary font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center flex-shrink-0" type="button">Get drop alerts</button></form></div></div><div className="pt-space-lg border-t-[2px] border-on-surface-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"><p className="font-spec-sm text-spec-sm text-outline-variant">© 2024 LAYERED 3D Printing Store. All rights reserved. Handcrafted precision.</p><div className="flex items-center gap-4 font-spec-sm text-spec-sm text-outline-variant"><a className="hover:text-surface-bright transition-colors" href="#">Privacy Policy</a><span>•</span><a className="hover:text-surface-bright transition-colors" href="#">Terms of Fabrication</a></div></div></div></footer>
</div>
  )
}

