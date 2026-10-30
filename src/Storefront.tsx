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
          <a className="site-nav-link" data-path="custom-print" href="#">Custom print</a>
          <a className="site-nav-link" data-path="how-it-works" href="#">How it works</a>
          <a className="site-nav-link" data-path="gallery" href="#">Gallery</a>
          <a className="site-nav-link" data-path="faq" href="#">FAQ</a>
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
          <a className="site-mobile-link" data-path="custom-print" href="#" onClick={() => setNavOpen(false)}><span aria-hidden="true">02</span>Custom print</a>
          <a className="site-mobile-link" data-path="how-it-works" href="#" onClick={() => setNavOpen(false)}><span aria-hidden="true">03</span>How it works</a>
          <a className="site-mobile-link" data-path="gallery" href="#" onClick={() => setNavOpen(false)}><span aria-hidden="true">04</span>Gallery</a>
          <a className="site-mobile-link" data-path="faq" href="#" onClick={() => setNavOpen(false)}><span aria-hidden="true">05</span>FAQ</a>
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
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8 items-center max-w-[1440px] mx-auto">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-copy lg:col-span-6 flex flex-col space-y-space-md">
            <div className="status-label inline-flex items-center gap-2 self-start bg-secondary-container text-on-surface border-[3px] border-on-surface rounded-full px-4 py-1.5 neo-shadow-sm rotate-[-1deg]">
              <span className="w-2.5 h-2.5 rounded-full bg-primary border-[2px] border-on-surface animate-pulse" />
              <span className="font-spec-code text-spec-sm uppercase font-bold tracking-wider">Nozzle hot: 215°C • Batch #84 Slicing</span>
            </div>
            <h1 className="font-headline-lg text-[54px] sm:text-[76px] lg:text-[96px] leading-[1.02] text-on-surface tracking-tight">
              If you can imagine it, we can 
              <span className="inline-block bg-primary text-on-primary font-badge-display text-[58px] sm:text-[80px] lg:text-[98px] px-4 py-1 border-[3px] border-on-surface neo-shadow rounded-xl -rotate-2 leading-none align-middle mx-1">
                print it.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Send a photo, sketch or file. Pick the size. We print it, finish it and ship it straight off our calibrated build plates.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a className="px-8 py-4 bg-primary text-on-primary font-badge-md text-badge-md rounded-xl border-[3px] border-on-surface neo-shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#121c2a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2" href="#custom-quote">
                Upload your design
                <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
              </a>
              <a className="px-8 py-4 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md rounded-xl border-[3px] border-on-surface neo-shadow-md hover:bg-surface-container-high hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all" href="#ready-to-ship">
                Shop ready-made
              </a>
            </div>
            {/* Trust Row */}
            <div className="pt-space-sm flex flex-wrap items-center gap-3 text-on-surface font-spec-code text-spec-sm font-bold opacity-90">
              <span className="trust-mark flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 border-[2px] border-on-surface rounded-lg neo-shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span> 500+ prints delivered
              </span>
              <span className="trust-mark flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 border-[2px] border-on-surface rounded-lg neo-shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">straighten</span> Any size up to 40cm
              </span>
              <span className="trust-mark flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 border-[2px] border-on-surface rounded-lg neo-shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">view_in_ar</span> PLA, PETG, Resin
              </span>
            </div>
          </div>

          {/* Right Column: Interactive keycap orb */}
          <div className="hero-visual lg:col-span-6 relative min-h-[480px] lg:min-h-[640px] flex items-center justify-center lg:justify-start xl:justify-center p-0">
            <div className="orb-react-host" id="keycap-orb-react-root" />
          </div>
        </div>
      </section>
      {/* SECTION: CATEGORY NAVIGATION (replaces the technical ticker) */}
      <section aria-label="Shop by category" className="categories-section">
        <div className="section-heading flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="eyebrow eyebrow--blueprint" data-no="01">Category Map</span>
            <h2 className="font-headline-lg text-[36px] sm:text-[52px] text-on-surface">
              Start with what you&rsquo;re making
            </h2>
          </div>
          <div className="flex items-center gap-2.5 self-start bg-surface-container px-3.5 py-2 border-[2px] border-on-surface rounded-lg neo-shadow-sm">
            <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">category</span>
            <span className="font-spec-code text-spec-code">06 categories &middot; every file QC&rsquo;d</span>
          </div>
        </div>
        <div className="categories-grid">
          <a className="category-tile" href="#custom-quote">
            <span className="category-tile-head">
              <span className="category-no">01</span>
              <span aria-hidden="true" className="category-arrow"><span className="material-symbols-outlined">arrow_forward</span></span>
            </span>
            <span className="category-name">Functional Parts</span>
            <span className="category-desc">Load-bearing brackets, mounts and printed jigs.</span>
          </a>
          <a className="category-tile" href="#ready-to-ship">
            <span className="category-tile-head">
              <span className="category-no">02</span>
              <span aria-hidden="true" className="category-arrow"><span className="material-symbols-outlined">arrow_forward</span></span>
            </span>
            <span className="category-name">Desk &amp; Home</span>
            <span className="category-desc">Organizers, lamps and small-space upgrades.</span>
          </a>
          <a className="category-tile" href="#ready-to-ship">
            <span className="category-tile-head">
              <span className="category-no">03</span>
              <span aria-hidden="true" className="category-arrow"><span className="material-symbols-outlined">arrow_forward</span></span>
            </span>
            <span className="category-name">Miniatures</span>
            <span className="category-desc">Tabletop armies, figures and scatter terrain.</span>
          </a>
          <a className="category-tile" href="#custom-quote">
            <span className="category-tile-head">
              <span className="category-no">04</span>
              <span aria-hidden="true" className="category-arrow"><span className="material-symbols-outlined">arrow_forward</span></span>
            </span>
            <span className="category-name">Nameplates &amp; Tags</span>
            <span className="category-desc">Keychains, signage and dual-color badges.</span>
          </a>
          <a className="category-tile" href="#custom-quote">
            <span className="category-tile-head">
              <span className="category-no">05</span>
              <span aria-hidden="true" className="category-arrow"><span className="material-symbols-outlined">arrow_forward</span></span>
            </span>
            <span className="category-name">Prototypes</span>
            <span className="category-desc">Same-week fit checks before production runs.</span>
          </a>
          <a className="category-tile" href="#ready-to-ship">
            <span className="category-tile-head">
              <span className="category-no">06</span>
              <span aria-hidden="true" className="category-arrow"><span className="material-symbols-outlined">arrow_forward</span></span>
            </span>
            <span className="category-name">Gifts &amp; Custom</span>
            <span className="category-desc">Weddings, milestone portraits and pet busts.</span>
          </a>
        </div>
      </section>

      {/* SECTION: FEATURED DROPS */}
      <section aria-label="Featured Drops" className="featured-drops-section w-full px-gutter-mobile md:px-margin py-space-xl bg-surface-container-low border-y-[3px] border-on-surface" id="featured-drops">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="eyebrow eyebrow--hot" data-no="★">Limited Releases</span>
              <h2 className="font-headline-lg text-[32px] sm:text-[48px] text-on-surface leading-none mt-1">
                Featured Drops
              </h2>
            </div>
            <a
              href="#ready-to-ship"
              className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md uppercase border-[3px] border-on-surface rounded-xl neo-shadow-sm hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              View catalog →
            </a>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {featuredDrops.map((drop) => (
              <article
                key={drop.id}
                className="group bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] neo-shadow-md overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[6px_6px_0px_#121c2a] transition-all"
              >
                <div className="relative aspect-square w-full bg-surface-container border-b-[3px] border-on-surface overflow-hidden">
                  <img
                    src={drop.image}
                    alt={drop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {drop.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-secondary-container text-on-surface font-spec-code text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border-[2px] border-on-surface neo-shadow-sm">
                      {drop.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="font-body-md font-bold text-[14px] sm:text-[15px] text-on-surface line-clamp-2 leading-snug">
                      {drop.title}
                    </h3>
                    <div className="mt-2.5">
                      <div className="font-badge-display text-[26px] sm:text-[28px] text-primary leading-tight">
                        {drop.price}
                      </div>
                      {drop.originalPrice && (
                        <div className="flex items-center gap-2 mt-1 font-spec-code text-[11px]">
                          <span className="text-on-surface-variant line-through">{drop.originalPrice}</span>
                          <span className="bg-secondary-container text-on-surface font-spec-code text-[11px] font-bold px-1.5 py-0.5 rounded border border-on-surface neo-shadow-sm">
                            {drop.discount}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <a
                    href={drop.href}
                    className="w-full py-3 px-4 bg-primary hover:bg-[#004395] text-on-primary font-badge-md text-badge-md rounded-xl border-[3px] border-on-surface neo-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-1.5 text-center"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow-md hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              Explore all 24 workshop prints →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: CUSTOM PRINT UPLOADER (Interactive Estimator) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl" id="custom-quote">
        <div className="w-full bg-surface-container-lowest border-[3px] border-on-surface rounded-[24px] neo-shadow-md p-6 sm:p-10">
          {/* Box Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b-[3px] border-on-surface gap-4">
            <div>
              <span className="eyebrow eyebrow--blueprint" data-no="02">Instant Fabrication Estimator</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Instant Slicer &amp; Quote Estimator</h2>
            </div>
            <div className="flex items-center gap-3 bg-surface-container px-4 py-2 border-[2px] border-on-surface rounded-xl">
              <span className="material-symbols-outlined text-primary text-[22px]">precision_manufacturing</span>
              <span className="font-spec-code text-spec-code">Bed: 400 × 400 × 450 mm</span>
            </div>
          </div>
          {/* Main Slicer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg pt-space-md">
            {/* Left Dropzone */}
            <div className="lg:col-span-6 flex flex-col">
              <label className="block font-spec-code text-spec-code font-bold uppercase mb-2 text-on-surface">1. Upload Cad or 2D Reference</label>
              <div className="flex-1 flex flex-col items-center justify-center border-[3px] border-dashed border-on-surface rounded-[20px] bg-surface-container-low p-8 text-center hover:bg-surface-container-high transition-colors cursor-pointer group" id="drop-area">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container border-[3px] border-on-surface flex items-center justify-center neo-shadow-sm group-hover:scale-105 transition-transform mb-4">
                  <span className="material-symbols-outlined text-[36px] text-on-surface">upload_file</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Drop image or file here</h3>
                <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                  Accepts <strong>STL, OBJ, STEP, 3MF</strong>, or 2D phone photos, sketches &amp; vector logos.
                </p>
                <input accept=".stl,.obj,.step,.3mf,.png,.jpg,.jpeg" className="hidden" id="file-selector" type="file" />
                <button className="px-6 py-3 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow-sm hover:bg-secondary-container active:translate-x-0.5 active:translate-y-0.5 transition-all" onClick={() => document.getElementById("file-selector")?.click()} type="button">
                  Browse Workshop Files
                </button>
                <p className="font-spec-code text-spec-sm text-on-surface-variant mt-4">Max file size: 120MB per item</p>
              </div>
            </div>
            {/* Right Options & Live Quote */}
            <div className="lg:col-span-6 flex flex-col space-y-space-md">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-spec-code text-spec-code font-bold uppercase text-on-surface">2. Select Scale / Height</span>
                  <span className="font-spec-code text-spec-sm text-on-surface-variant">Z-Axis Dimensions</span>
                </div>
                <div className="flex flex-wrap gap-2.5" id="size-chip-group">
                  <button className="size-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-multiplier="0.8" type="button">5cm</button>
                  <button className="size-chip active-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-primary text-on-primary neo-shadow-sm transition-all" data-multiplier={1.0} type="button">10cm</button>
                  <button className="size-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-multiplier="1.6" type="button">15cm</button>
                  <button className="size-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-multiplier="2.2" type="button">20cm</button>
                  <button className="size-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-multiplier="3.5" type="button">Custom (Up to 40cm)</button>
                </div>
              </div>
              {/* Material Selector */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-spec-code text-spec-code font-bold uppercase text-on-surface">3. Filament / Resin Polymer</span>
                  <span className="font-spec-code text-spec-sm text-on-surface-variant">Density &amp; Toughness</span>
                </div>
                <div className="flex flex-wrap gap-2.5" id="mat-chip-group">
                  <button className="mat-chip active-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-primary text-on-primary neo-shadow-sm transition-all" data-cost={0} type="button">PLA Pure</button>
                  <button className="mat-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-cost={120} type="button">PETG Tough</button>
                  <button className="mat-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-cost={280} type="button">8K Resin</button>
                  <button className="mat-chip px-4 py-2 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-code font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-cost={190} type="button">TPU Flex</button>
                </div>
              </div>
              {/* Finish Selector */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-spec-code text-spec-code font-bold uppercase text-on-surface">4. Post-Processing Finish</span>
                </div>
                <div className="flex flex-wrap gap-2.5" id="finish-chip-group">
                  <button className="finish-chip active-chip px-3.5 py-1.5 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-sm font-bold bg-primary text-on-primary neo-shadow-sm transition-all" data-cost={0} type="button">Raw Layer Lines</button>
                  <button className="finish-chip px-3.5 py-1.5 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-sm font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-cost={150} type="button">Sanded Matte</button>
                  <button className="finish-chip px-3.5 py-1.5 rounded-xl border-[3px] border-on-surface font-spec-code text-spec-sm font-bold bg-surface-container-lowest text-on-surface neo-shadow-sm transition-all" data-cost={390} type="button">Studio Painted</button>
                </div>
              </div>
              {/* Live Price Banner Card */}
              <div className="bg-secondary-container border-[3px] border-on-surface rounded-[20px] p-5 neo-shadow flex items-center justify-between gap-4">
                <div>
                  <span className="font-spec-code text-spec-sm text-on-surface font-bold uppercase tracking-wider block">Estimated Build Cost</span>
                  <span className="font-badge-display text-[44px] text-on-surface leading-none" id="price-display">Rs 480</span>
                </div>
                <div className="text-right">
                  <span className="lead-time-tag font-spec-code text-spec-code font-bold bg-surface-container-lowest px-3 py-1 border-[2px] border-on-surface rounded-full inline-block">
                    Ready in ~3 days
                  </span>
                  <p className="font-spec-sm text-spec-sm text-on-surface mt-1">Includes support removal</p>
                </div>
              </div>
              {/* Action Button */}
              <button className="w-full py-4 bg-primary text-on-primary font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow-md hover:bg-secondary hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3" type="button">
                <span>Get my quote</span>
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </button>
              {/* Disclaimer Note */}
              <p className="font-spec-code text-spec-sm text-on-surface text-center">
                * No 3D file? Any 2D image works. Our team converts and slices it for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3: HOW IT WORKS */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl">
        <div className="section-heading flex flex-col space-y-space-md mb-space-lg">
          <div className="process-label inline-block self-start font-spec-code text-spec-sm font-bold uppercase px-3 py-1 bg-surface-container-highest border-[2px] border-on-surface rounded-lg">
            Direct Flow Procedure
          </div>
          <h2 className="font-headline-lg text-[44px] sm:text-[64px] leading-tight text-on-surface">
            From your brain to your desk in 4 steps
          </h2>
        </div>
        {/* Decorative Nozzle Squiggle Path */}
        <div className="w-full relative">
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-6 -z-0 pointer-events-none">
            <svg className="w-full h-full text-on-surface" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 24">
              <path d="M 0 12 Q 125 0, 250 12 T 500 12 T 750 12 T 1000 12" stroke="currentColor" strokeDasharray="6 6" strokeWidth={3} />
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-5 neo-shadow hover:-translate-y-1 transition-transform">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-badge-display text-[48px] text-primary leading-none">01</span>
                <span className="spec-tag font-spec-code text-spec-sm bg-surface-container px-2 py-0.5 border-[2px] border-on-surface rounded">FILE / SKETCH</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Upload</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Drop any CAD file, napkin sketch, screenshot or photo.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="A blueprint engineering sketch and wireframe 3D model CAD viewport displayed on a laptop screen next to a coffee cup and mechanical pencil." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRWnfnpmun0Z6eQi4Kcp2HxZag1x0GwJNWZ-UL6VJ5W3v5g5D8Q_BJMZ14QHU5BhgGfoimPqLnAOwbCs6dxtSwxSIUdS6W2Li4JtawTW7P_qiawf6--PA9RLynncMwg3fWAzUkrtiut3BdcCF_Ng73MW1X5CP-NGeYTRhIwk56kiBiThIEkQQwzC3f2M0JKxMeRXlHDMEv1YPpiBAf7Hw1PTDZC3NWLXXGWIEpMrQ" />
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-5 neo-shadow hover:-translate-y-1 transition-transform">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-badge-display text-[48px] text-secondary-container leading-none">02</span>
                <span className="spec-tag font-spec-code text-spec-sm bg-surface-container px-2 py-0.5 border-[2px] border-on-surface rounded">SPECS</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Choose size</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Pick scale, infill density &amp; material finish to match your use.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Precision stainless steel digital vernier calipers measuring the exact diameter of a vibrant blue filament spool with millimeter markings visible." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz4BVyXxVT8xbre7TfhwNLG5Pd6shCx899Gb0NbPLHf5HFmWIlM3Hlo01fuXslcSNUY7bG-DuLBInOIVrJUgszumIxangmbct1g5V6oFcyfFdOXnZUSA0RCjIAK0vr-Z0kENXV66KvQEFboL_qbI8pZ1LpoaR_reRTz2wvcftuZc30uDTo-XbL1xTI0IFjqR1mWBoQGLhXS1T_cbvWJOtBrAl9Hi2Ok3CwNnpl2x4" />
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-5 neo-shadow hover:-translate-y-1 transition-transform">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-badge-display text-[48px] text-primary leading-none">03</span>
                <span className="spec-tag font-spec-code text-spec-sm bg-surface-container px-2 py-0.5 border-[2px] border-on-surface rounded">HOTEND ACTIVE</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">We print</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Precision extruders lay down molten polymers layer-by-layer.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Extreme macro shot of a brass 3D printer nozzle extruding clean lines of blue molten thermoplastic polymer onto a textured heated bed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0WN6_lFDSsh1q_z7VwOk-VsS86yMas1fLnWgQP6unP7XLycq9kuRvu9Y0Y8e8xZsoHxWcNuJFTqdUoF9hPOaw3FO_tU0V0cgAYIbvEQjMMpQ7CIPyPJwvaxPyulwXEKLDeILkle_pi67Y7YsBZqUsPd1rsM_ZxKPQO-QlsMxpDLo0cyU5-Hz1jyIFtM5nybDU_ASl23Vlr7lWx0KROoZqpOw4aCHg4tAvfA2Gvw0" />
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-5 neo-shadow hover:-translate-y-1 transition-transform">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-badge-display text-[48px] text-on-surface leading-none">04</span>
                <span className="spec-tag font-spec-code text-spec-sm bg-surface-container px-2 py-0.5 border-[2px] border-on-surface rounded">EXPEDITE</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Delivered</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Cleaned, inspected and boxed straight to your door safely.
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Kraft cardboard shipping box carefully packed with honeycomb paper cushion and custom 3D printed mechanical parts ready for express shipping." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO71TlPCt1W35KR5kJgARcA0KIuJFWsepZe6-EmDWpaF_E17Zk7GywOO_s4V2ovGf3oCxLYEDTpYPI_TGfKvjBW2neb6F-F7iQkE1rNsq9aw-_PUKwYyiaBNazEhzBJZsMPutNi8wMU_1ChA04zO0_tWtgQtHIbyrFwtzIUswsV5XIQt8hGtPKu6CEjZO0ion7ZWX_FVpmD9w0Q5ZH6oUVXtGza7uUARGvq-w6Wm0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: WHAT CAN WE PRINT (Bento Grid) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl">
        <div className="section-heading flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-space-lg">
          <h2 className="font-headline-lg text-[40px] sm:text-[60px] text-on-surface">
            What can we print? <span className="text-primary">(Literally whatever)</span>
          </h2>
          <span className="blueprint-label font-spec-code text-spec-code text-on-surface font-bold bg-secondary-container px-3 py-1 border-[2px] border-on-surface rounded-lg">
            0.12 - 0.28mm Precision
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1 (Large 7 cols): Figurines */}
          <div className="md:col-span-7 bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-[26px] text-on-surface">Figurines and gifts</h3>
              <span className="spec-tag font-spec-code text-spec-sm px-2.5 py-1 bg-surface-container border-[2px] border-on-surface rounded-full">RESIN &amp; HIGH-RES PLA</span>
            </div>
            <div className="w-full h-72 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container mb-4">
              <img className="w-full h-full object-cover" data-alt="Collection of highly detailed tabletop fantasy miniature figures printed in resin and matte grey filament with ultra-crisp armor textures on a wooden crafting table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW5JYnbf5KihUitv567Scu_dIkejBnsgljcoaAbpEyxZ_19L0rhkOSkmfyFuXJ_ABxMsCjT1H-8r7qAGib9iVOtg6J2BTVZeN339XlG8ZDCN0AXmvY1Al_XNr_AZYkY1oUsm4-Z28lzbLkXxFv9cBxHq-qPJdP6Pi2M0RJhMsRF75ZR4hX6_BDQ2b7rc6K8pDjJW4hBIQ6P7OiNoKv2PXjGRQo_VEpUjgH3faS9vE" />
            </div>
            <p className="font-body-md text-on-surface-variant">Custom portraits, anime collectibles, and customized avatars ready for desktop display.</p>
          </div>
          {/* Tile 2 (5 cols): Cosplay & Props */}
          <div className="md:col-span-5 bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-[26px] text-on-surface">Cosplay and props</h3>
              <span className="spec-tag font-spec-code text-spec-sm px-2.5 py-1 bg-surface-container border-[2px] border-on-surface rounded-full">LARGE VOLUME</span>
            </div>
            <div className="w-full h-72 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container mb-4">
              <img className="w-full h-full object-cover" data-alt="A life-sized wearable futuristic cyberpunk sci-fi helmet printed in split sections with visible interlocking tabs and smooth satin surface finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD5-DI0nDKUP7Yhp-P7u-UR8I4Ha09Moo2saB4enFKK_fWrjfE1VR9lJ_Bg5HU6VOVf3kFqCPHgRgk-SrQDs-sKVVJUpeOQaHLlE9pg2LPoi3cyFI0U91_T1AByKCkxiNx0rVT8xMwqH2cQ9xsFZm7IXpRYsdezHYsGPTjfIcBXExIHMl1Q5tQ6tPt0Ze1jrPJ0DBgt0JRSnjo9xyZNp3xlFNuGs3TgFblDinwuag" />
            </div>
            <p className="font-body-md text-on-surface-variant">Multi-part wearable gear, weapons, masks, and life-size convention display pieces.</p>
          </div>
          {/* Tile 3 (4 cols): Lamps and decor */}
          <div className="md:col-span-4 bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Lamps &amp; decor</h3>
            </div>
            <div className="w-full h-52 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container mb-3">
              <img className="w-full h-full object-cover" data-alt="Complex 3D printed translucent geometric parametric lampshade casting intricate cellular shadow patterns on a bedroom wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJkOEiu-VwCFnlqS5nTONrXLtz06SbCuI939MenqA47P8xVsDOil8TuyczK_juiWsJ33ZuW5NA1e2jpC2p02biT1mi7ECQ2VtzXwZ6d0p9RNjUrkLUrnGji3xWxUqWCNuxPRO2kyC3ewl--uPkChhDSNXhXWhvbcN_J6xFCID8oxkRLgHrWDOaBD_VQPegK-WHFl-Mbq59oC16Q2ndlMaEE4J88_-HSjlk9ddNIg" />
            </div>
            <p className="font-body-md text-on-surface-variant">Diffusion shades, Voronoi vases, and wall art.</p>
          </div>
          {/* Tile 4 (4 cols): Gadgets and stands */}
          <div className="md:col-span-4 bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Gadgets &amp; stands</h3>
            </div>
            <div className="w-full h-52 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container mb-3">
              <img className="w-full h-full object-cover" data-alt="Minimalist ergonomic mechanical keyboard stand and braided cable organizer dock printed in matte textured polymer on an organized workstation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwX2DNHvU4GgerXPIOn3W_eXRUIobSnZNaScL5kLaYUtqDkH6_CQrpTkpCNMIHDMSC6qsEh9C3bh5r8TEalcospgkW7Ciae7-gO6BRYAq82h7dW9t-T7X-NJRmAXOADULFbgXH3RBenF_PQ34yKMhqcM9yuG_Vq752UuBPXTV1W6vYhXMVSAQhWSfsB5HwaznfNQowK4UAACgxvYUHGQGga1foe-oghWykTTeMpdg" />
            </div>
            <p className="font-body-md text-on-surface-variant">Desk organizers, MagSafe cradles, headset trees.</p>
          </div>
          {/* Tile 5 (4 cols): Spare parts */}
          <div className="md:col-span-4 bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Spare parts</h3>
            </div>
            <div className="w-full h-52 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container mb-3">
              <img className="w-full h-full object-cover" data-alt="Functional engineering prototype mechanical gears, brackets, and motor couplings in tough PETG filament alongside metal bolts and nuts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA12zLC1w8lwTCsKGMPUIzv9yNb4MnCWuEoAQkGF-JOgrsy6vdZRY8yVc8srNX0s0QFpVrRw4C2KbXhicH7LYETVGTQapT1lI3ZhNh_9zqPtdSuR-lBkKhkgGVWdHvgzwhpE6pkGUFHWoc6HrSeasqfKgqrDTUznMy3vP_7PstH0Lc1NODzzlM4MFv95EHfZFhJvgRgUOzUTO6cBfeIWxmDm12PvHMrSJp6X02b87o" />
            </div>
            <p className="font-body-md text-on-surface-variant">Discontinued appliance gears, latches &amp; brackets.</p>
          </div>
          {/* Tile 6 (6 cols): Nameplates and keychains */}
          <div className="md:col-span-6 bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Nameplates &amp; keychains</h3>
              <span className="spec-tag font-spec-code text-spec-sm font-bold bg-secondary-container px-2 py-0.5 border-[2px] border-on-surface rounded">DUAL COLOR</span>
            </div>
            <div className="w-full h-44 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container mb-3">
              <img className="w-full h-full object-cover" data-alt="Top-down shot of vibrant dual-extrusion tactile keychains with embossed typography and bold contrasting lettering on a desk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEl2ZEwG1PZ9qQPsML4gSyTAEP3wo31HlsotJwGgRl9UDHvoUGbQReQ-b7TjrakA-_zsQ5UXDecACuAs04BHyRUlZFJLSMZVOjvcm52Mjc1A51HEC80u3Thxdl0sAvNS2MkJ1blouhxpvHkDxWqPE-HQvcrxcepxiwtwhT5QGDJD5-yyvKFuQULMS_FYFbUFG9eI1mBKL5Kiwy-uIvyZNX4sye5KESenZtAzmIzWA" />
            </div>
            <p className="font-body-md text-on-surface-variant">Custom gamer tags, luggage labels, and company tokens.</p>
          </div>
          {/* Tile 7 (6 cols): Solid blue interactive WhatsApp tile */}
          <div className="md:col-span-6 bg-primary text-on-primary border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div>
              <span className="eyebrow eyebrow--signal font-spec-code text-spec-sm font-bold uppercase tracking-widest text-on-primary opacity-80">Have a Wild Concept?</span>
              <h3 className="font-headline-lg text-[34px] sm:text-[40px] text-on-primary leading-tight mt-1 mb-2">
                Something weird? Ask us on WhatsApp.
              </h3>
              <p className="font-body-md text-on-primary opacity-90 max-w-md">
                Our fabrication engineers respond in minutes. No CAD skill required—send sketches, photos, or voice notes.
              </p>
            </div>
            <div className="pt-6">
              <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow-sm hover:bg-secondary-container active:translate-x-0.5 active:translate-y-0.5 transition-all" href="#">
                <span>Chat with Slicer Engineer</span>
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5: READY TO SHIP (Product Catalog) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl" id="ready-to-ship">
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
      {/* SECTION 6: SHOW US YOUR WEIRD (Community Proof) */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl bg-surface-container-low border-y-[3px] border-on-surface">
        <div className="section-heading flex flex-col space-y-space-xs mb-space-lg">
          <div className="eyebrow eyebrow--field inline-block self-start font-spec-code text-spec-sm font-bold uppercase px-3 py-1 bg-secondary-container border-[2px] border-on-surface rounded-lg rotate-1">
            Verified Field Prints
          </div>
          <h2 className="font-headline-lg text-[44px] sm:text-[64px] text-on-surface">Show us your weird</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Real customer prints tagged from the wild. Zero mockups, pure layer lines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Community Item 1 */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-4 neo-shadow rotate-[-1deg]">
              <div className="w-full h-64 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="3D printed customized realistic dog bust figurine in matte bone-white PLA standing next to an actual golden retriever looking curiously at it." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpGG6wo1HxGSuNZDJYoVYFG3MyPqZGDKYQu_gE8XPPZPKP_fcVFHwR7dbxtT1Ded0YV-lfh0o2iMZctfsUEfe4EUPSZOmdXj7V7thkxwPlCjlv8iqtou2cgFBzbGiCKDWMc_XDbYeExARDyByvehBnF6_nbYn4mdD4EPEOFOPQXTHWvxX4ctCbkjRGz8Vq8fh-bcgZK2lhz1TBoSUUw-b_CR4dv2OqhKoSULb-4Ec" />
              </div>
              <div className="pt-3 flex items-center justify-between font-spec-code text-spec-sm text-on-surface">
                <span className="font-bold">@riya.makes</span>
                <span>her dog • 15cm</span>
              </div>
            </div>
            {/* Speech bubble sticker 1 */}
            <div className="bg-secondary-container text-on-surface border-[3px] border-on-surface rounded-[20px] p-4 neo-shadow-sm rotate-[2deg] relative">
              <p className="font-body-md text-body-md font-medium text-on-surface">
                “Turned my phone camera sketch into an actual desk pet. Resolution is insane!”
              </p>
              <span className="font-spec-code text-spec-sm block mt-2 font-bold uppercase">— Riya M., Bengaluru</span>
            </div>
          </div>
          {/* Community Item 2 */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            {/* Speech bubble sticker 2 (top) */}
            <div className="bg-surface-container-lowest text-on-surface border-[3px] border-on-surface rounded-[20px] p-4 neo-shadow-sm -rotate-2 relative">
              <p className="font-body-md text-body-md font-medium text-on-surface">
                “Saved me from spending $150 on OEM replacement parts. Dimensions were dead accurate.”
              </p>
              <span className="font-spec-code text-spec-sm block mt-2 font-bold uppercase">— Karan S., Pune</span>
            </div>
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-4 neo-shadow rotate-[1deg]">
              <div className="w-full h-72 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="High-performance custom GPU anti-sag support bracket 3D printed in rigid heat-resistant PETG installed inside a glowing gaming PC tower." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxwPmSr4oUrPVyyJVTDnPkjqMcHiMK_B75tpt_qX6nfqMzoiH_uwzMTe0wdlG3ttTILID88xO7CzfbW07xI700eUgC_0i6BMSxtEFZ7sWviqT_ETz3qfX4dnr6LDSCNieh7hhzgL1kUyPpGQ618AjKHBRZugvvYdj4tBBX34DdWiy1738TXeCSFOcI9t4645Pkk2b1AUgQ4HEjOCYUmOdra6uAIh0fybT4DPIRDIo" />
              </div>
              <div className="pt-3 flex items-center justify-between font-spec-code text-spec-sm text-on-surface">
                <span className="font-bold">@karan_builds</span>
                <span>GPU bracket • PETG</span>
              </div>
            </div>
          </div>
          {/* Community Item 3 */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-4 neo-shadow rotate-[-2deg]">
              <div className="w-full h-72 rounded-xl overflow-hidden border-[2px] border-on-surface bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Curved backlit 3D printed Lithophane lamp panel revealing a detailed family holiday photograph when light illuminates it from behind in a dim room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbPJBYxX-VkwjTEUPvmmDDx2-i0JDjyezFJfpyHBLJF8PFqmm4qX7UzobK5pWd9o2U9e0qAwkEhy_KzrGLC4DciQsyJ2sQarLeXFDWvLTBHPRKU7SGySn3X5VdPydVZnQx0YvkF6hwBS1qF8bLWUPKVki92eCYLp1dLuji-PgtRhj4vHEj-J_PawVhum3YIvCkdQQnLUHByf4dJN6tzP4DcS5Y-nCUw979LlsMd4" />
              </div>
              <div className="pt-3 flex items-center justify-between font-spec-code text-spec-sm text-on-surface">
                <span className="font-bold">@arjun_creates</span>
                <span>Curved Lithophane Lamp</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[20px] p-4 neo-shadow-sm rotate-[1deg]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[28px]">photo_camera</span>
                <div>
                  <p className="font-headline-sm text-[16px] text-on-surface">Tag #LAYEREDprint</p>
                  <p className="font-spec-code text-spec-sm text-on-surface-variant">Get featured + Rs 200 off your next spool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 7: WHY US */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Left Copy Statement */}
          <div className="lg:col-span-5 flex flex-col space-y-space-sm">
            <span className="eyebrow eyebrow--manifesto">Quality Manifesto</span>
            <h2 className="font-headline-lg text-[44px] sm:text-[60px] leading-[1.05] text-on-surface">
              Layer by layer, we get it right.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Zero stringing. Zero warped corners. We calibrate stepper motors weekly, bake filament in dry boxes, and run active chamber heating on all performance polymers.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <div className="p-3 bg-secondary-container border-[2px] border-on-surface rounded-xl">
                <span className="material-symbols-outlined text-on-surface text-[28px]">thermostat</span>
              </div>
              <div className="font-spec-code text-spec-sm text-on-surface">
                <strong>Active Heated Enclosures</strong><br />
                No warping on ABS, Nylon or ASA
              </div>
            </div>
          </div>
          {/* Right 2x2 Metric Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Box 1 (Blue) */}
            <div className="bg-primary text-on-primary border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform">
              <span className="font-badge-display text-[64px] leading-none block">24-72h</span>
              <span className="font-headline-sm text-headline-sm text-on-primary mt-2 block">Turnaround dispatch</span>
              <p className="font-spec-code text-spec-sm text-on-primary opacity-80 mt-1">Farm of 32 printers running 24/7</p>
            </div>
            {/* Box 2 (Light blue) */}
            <div className="bg-secondary-container text-on-surface border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform">
              <span className="font-badge-display text-[64px] leading-none block">0.1mm</span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-2 block">Layer precision</span>
              <p className="font-spec-code text-spec-sm text-on-surface opacity-80 mt-1">Surgical detail without stepping lines</p>
            </div>
            {/* Box 3 (White) */}
            <div className="bg-surface-container-lowest text-on-surface border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform">
              <span className="font-badge-display text-[64px] leading-none block">Up to 40cm</span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-2 block">Single-piece volume</span>
              <p className="font-spec-code text-spec-sm text-on-surface-variant mt-1">Massive parts without gluing seams</p>
            </div>
            {/* Box 4 (Dark Slate) */}
            <div className="bg-on-surface text-on-primary border-[3px] border-on-surface rounded-[20px] p-6 neo-shadow hover:-translate-y-1 transition-transform">
              <span className="font-badge-display text-[64px] leading-none block">100%</span>
              <span className="font-headline-sm text-headline-sm text-on-primary mt-2 block">Free reprint if it fails</span>
              <p className="font-spec-code text-spec-sm text-on-primary opacity-80 mt-1">No questions asked guarantee</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 8: FAQ ACCORDION */}
      <section className="faq-section w-full px-gutter-mobile md:px-margin py-space-xl">
        <div className="max-w-4xl mx-auto flex flex-col space-y-space-md">
          <div className="section-heading text-center mb-space-sm">
            <span className="eyebrow eyebrow--faq">Questions Answered</span>
            <h2 className="font-headline-lg text-[44px] sm:text-[60px] text-on-surface">Frequently Asked Queries</h2>
          </div>
          {/* Accordion Items */}
          <div className="space-y-4" id="faq-container">
            {/* FAQ 1 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[16px] neo-shadow overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-headline-sm text-[20px] text-on-surface">Which file formats do you accept?</span>
                <span className="w-8 h-8 rounded-full border-[2px] border-on-surface bg-surface-container flex items-center justify-center font-bold text-on-surface toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-6 pb-5 border-t-[2px] border-on-surface/20 pt-3">
                <p className="font-body-md text-on-surface-variant">
                  We natively accept <strong>STL, OBJ, STEP, 3MF, and DXF</strong> files. If you don't have a 3D model, you can upload clear phone photos, 2D vector logos, or pencil sketches—our CAD designers prepare the printable geometry for you.
                </p>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[16px] neo-shadow overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-headline-sm text-[20px] text-on-surface">Can you print from just a photo or sketch?</span>
                <span className="w-8 h-8 rounded-full border-[2px] border-on-surface bg-surface-container flex items-center justify-center font-bold text-on-surface toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-6 pb-5 border-t-[2px] border-on-surface/20 pt-3">
                <p className="font-body-md text-on-surface-variant">
                  Yes! Over 40% of our orders start from a simple 2D reference. Upload your image via our quote tool; our in-house modelers review it and share a 3D interactive preview within 2-4 hours.
                </p>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[16px] neo-shadow overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-headline-sm text-[20px] text-on-surface">What is the maximum size print you can do?</span>
                <span className="w-8 h-8 rounded-full border-[2px] border-on-surface bg-surface-container flex items-center justify-center font-bold text-on-surface toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-6 pb-5 border-t-[2px] border-on-surface/20 pt-3">
                <p className="font-body-md text-on-surface-variant">
                  Our continuous large-format printers handle up to <strong>400 × 400 × 450 mm</strong> in a single seamless block. Larger models (like cosplay armor or architectural models) are sliced into interlocking indexed parts.
                </p>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[16px] neo-shadow overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-headline-sm text-[20px] text-on-surface">How long does shipping take?</span>
                <span className="w-8 h-8 rounded-full border-[2px] border-on-surface bg-surface-container flex items-center justify-center font-bold text-on-surface toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-6 pb-5 border-t-[2px] border-on-surface/20 pt-3">
                <p className="font-body-md text-on-surface-variant">
                  Prints are dispatched in 24 to 72 hours depending on size. We ship via express air courier across India (2-4 days transit). Tracking links are sent straight to your WhatsApp and email.
                </p>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="bg-surface-container-lowest border-[3px] border-on-surface rounded-[16px] neo-shadow overflow-hidden">
              <button aria-expanded="false" className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" type="button">
                <span className="font-headline-sm text-[20px] text-on-surface">Can I get my print hand-painted or sanded?</span>
                <span className="w-8 h-8 rounded-full border-[2px] border-on-surface bg-surface-container flex items-center justify-center font-bold text-on-surface toggle-icon">+</span>
              </button>
              <div className="faq-content hidden px-6 pb-5 border-t-[2px] border-on-surface/20 pt-3">
                <p className="font-body-md text-on-surface-variant">
                  Absolutely. Choose between Raw (authentic clean layer lines), Sanded Matte (micro-abrasive smoothing), or Studio Painted (hand-primed, painted, and matte-varnished by our miniature artists).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 9: CTA BLOCK */}
      <section className="w-full px-gutter-mobile md:px-margin py-space-xl">
        <div className="relative bg-primary text-on-primary border-[3px] border-on-surface rounded-[24px] neo-shadow-md p-8 sm:p-14 overflow-hidden">
          {/* Rotated Accent Sticker */}
          <div className="sticker-note absolute -top-3 right-6 sm:right-16 bg-secondary-container text-on-surface font-badge-md text-badge-md px-5 py-2 border-[3px] border-on-surface neo-shadow rotate-[6deg] select-none z-10">
            Quote in 2 hrs!
          </div>
          <div className="max-w-2xl relative z-10">
            <h2 className="font-headline-lg text-[52px] sm:text-[80px] leading-[1.02] text-on-primary mb-4">
              Got an idea? Send it.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary opacity-90 mb-8 max-w-lg">
              Zero CAD files needed. Free slicing check. Lock in your print before tonight's queue fills up.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="px-8 py-4 bg-surface-container-lowest text-on-surface font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2" href="#custom-quote">
                Upload now →
              </a>
              <span className="font-spec-code text-spec-sm text-on-primary opacity-80">
                • No credit card needed for quotes
              </span>
            </div>
          </div>
          {/* Subtle background nozzle pattern watermark */}
          <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-10 select-none">
            <svg fill="currentColor" height={340} viewBox="0 0 100 100" width={340}>
              <polygon points="50,10 90,85 10,85" />
              <rect height={15} width={16} x={42} y={85} />
            </svg>
          </div>
        </div>
      </section>
    </div>
    {/* Client-side Interactive Behavior */}
  </main><footer className="w-full bg-inverse-surface text-inverse-on-surface border-t-[3px] border-on-surface pt-space-xl pb-margin"><div className="w-full px-gutter md:px-margin"><div className="w-full pb-space-lg border-b-[3px] border-on-surface-variant/30 flex flex-col md:flex-row items-baseline justify-between gap-4"><span className="font-headline-lg text-[64px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-secondary-container select-none">LAYERED</span><span className="font-spec-code text-spec-code text-outline-variant uppercase tracking-wider">Tactile Fabrication Studio // 0.12 - 0.28mm Precision</span></div><div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg py-space-xl"><div className="md:col-span-4 space-y-space-sm"><h3 className="font-headline-sm text-headline-sm text-surface-bright">Quick Links</h3><ul className="space-y-2 font-body-md text-body-md"><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="shop" href="#">Shop</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="custom-print" href="#">Custom print</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="gallery" href="#">Gallery</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="shipping" href="#">Shipping</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="returns" href="#">Returns</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary-container">arrow_forward</span><a className="text-surface-container-highest hover:text-surface-bright transition-colors" data-path="contact" href="#">Contact</a></li></ul></div><div className="md:col-span-3 space-y-space-sm"><h3 className="font-headline-sm text-headline-sm text-surface-bright">Socials</h3><ul className="space-y-3 font-body-md text-body-md"><li><a className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-surface border-[2px] border-surface-container-highest rounded-lg text-surface-container-highest hover:text-surface-bright hover:bg-inverse-surface neo-shadow-sm transition-all" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span>Instagram</a></li><li><a className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-surface border-[2px] border-surface-container-highest rounded-lg text-surface-container-highest hover:text-surface-bright hover:bg-inverse-surface neo-shadow-sm transition-all" href="#"><span className="material-symbols-outlined text-[18px]">smart_display</span>YouTube</a></li><li><a className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-surface border-[2px] border-surface-container-highest rounded-lg text-surface-container-highest hover:text-surface-bright hover:bg-inverse-surface neo-shadow-sm transition-all" href="#"><span className="material-symbols-outlined text-[18px]">chat</span>WhatsApp</a></li></ul></div><div className="md:col-span-5 space-y-space-sm"><h3 className="font-headline-sm text-headline-sm text-surface-bright">Newsletter</h3><p className="font-body-md text-body-md text-outline-variant">Get notified about limited filament drops, new materials, and community model batches.</p><form className="flex flex-col sm:flex-row gap-3 pt-space-xs"><input className="flex-1 px-4 py-3 bg-surface-container-lowest text-on-surface border-[3px] border-on-surface rounded-xl font-body-md text-body-md focus:outline-none neo-shadow-sm placeholder:text-outline" placeholder="your.email@workshop.io" type="email" /><button className="px-6 py-3 bg-primary-container text-on-primary font-badge-md text-badge-md border-[3px] border-on-surface rounded-xl neo-shadow hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center flex-shrink-0" type="button">Get drop alerts</button></form></div></div><div className="pt-space-lg border-t-[2px] border-on-surface-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"><p className="font-spec-sm text-spec-sm text-outline-variant">© 2024 LAYERED 3D Printing Store. All rights reserved. Handcrafted precision.</p><div className="flex items-center gap-4 font-spec-sm text-spec-sm text-outline-variant"><a className="hover:text-surface-bright transition-colors" href="#">Privacy Policy</a><span>•</span><a className="hover:text-surface-bright transition-colors" href="#">Terms of Fabrication</a></div></div></div></footer>
</div>
  )
}

