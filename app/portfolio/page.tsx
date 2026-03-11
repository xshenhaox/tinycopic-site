const siteConfig = {
  studioName: "Tinycopic Photography Studio",
  email: "tinycopic@gmail.com",
  instagram: "tinycopic",
  calendlyUrl: "https://calendly.com/shenhao83043431/30min",
};

const portfolioCategories = [
  "All",
  "Portrait",
  "Family",
  "Kids",
  "Newborn",
  "Bridal",
];

const portfolioItems = [
  {
    title: "Angel Editorial",
    category: "Portrait",
    image: "/images/hero-angel-editorial.jpg",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Kids Fantasy",
    category: "Kids",
    image: "/images/kids-fantasy-ice.jpg",
    size: "",
  },
  {
    title: "Family Birthday",
    category: "Family",
    image: "/images/family-birthday.jpg",
    size: "",
  },
  {
    title: "Minimal Newborn",
    category: "Newborn",
    image: "/images/newborn-minimal.jpg",
    size: "",
  },
  {
    title: "Red Fish Portrait",
    category: "Portrait",
    image: "/images/portrait-red-fish-lady.jpg",
    size: "md:row-span-2",
  },
  {
    title: "Garden Newborn",
    category: "Newborn",
    image: "/images/newborn-garden-cream.jpg",
    size: "",
  },
  {
    title: "Hanfu Family",
    category: "Family",
    image: "/images/family-hanfu.jpg",
    size: "",
  },
  {
    title: "Fu Lifestyle Family",
    category: "Family",
    image: "/images/family-fu-lifestyle.jpg",
    size: "md:col-span-2",
  },
  {
    title: "Festival Family Table",
    category: "Family",
    image: "/images/family-festival-table.jpg",
    size: "",
  },
  {
    title: "New Year Family Group",
    category: "Family",
    image: "/images/family-new-year-group.jpg",
    size: "",
  },
  {
    title: "Generations Portrait",
    category: "Family",
    image: "/images/family-generations.jpg",
    size: "",
  },
  {
    title: "Countryside New Year Kid",
    category: "Kids",
    image: "/images/kids-country-newyear.jpg",
    size: "",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="block">
          <div className="text-lg font-semibold tracking-[0.2em] uppercase text-neutral-950">
            Tinycopic
          </div>
          <div className="text-xs text-neutral-500">
            Photography Studio · Boston
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/portfolio" className="font-medium text-black">
            Portfolio
          </a>
          <a href="/blog" className="hover:text-black">
            Blog
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
        </nav>

        <a
          href={siteConfig.calendlyUrl}
          className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function CategoryPills() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {portfolioCategories.map((item, index) => (
        <div
          key={item}
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            index === 0
              ? "bg-neutral-950 text-white"
              : "border border-stone-300 bg-white text-neutral-700"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function PortfolioGrid() {
  return (
    <div className="mt-12 grid auto-rows-[220px] gap-6 md:grid-cols-3 lg:grid-cols-4">
      {portfolioItems.map((item) => (
        <article
          key={item.title}
          className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-sm ${item.size}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,16,0.72),rgba(16,16,16,0.10)_42%,rgba(255,255,255,0.02))]" />

          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md">
              {item.category}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="rounded-[22px] border border-white/10 bg-black/18 p-4 backdrop-blur-md">
              <div className="text-xl font-semibold text-white">
                {item.title}
              </div>
              <div className="mt-1 text-sm text-white/75">
                Tinycopic Portfolio
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[38px] border border-stone-200 bg-[linear-gradient(135deg,#ffffff_0%,#faf7f2_100%)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Tinycopic Portfolio
              </div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
                If you found a visual direction you love,
                <span className="block text-stone-600">
                  the next step is to book your session.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
                Use this portfolio page as your main visual sales tool. It is
                designed to help clients quickly understand your style, trust
                your quality and move naturally toward inquiry or booking.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.calendlyUrl}
                  className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-black"
                >
                  Book with Calendly
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-stone-400"
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-stone-200 bg-white p-6">
                <div className="text-sm text-neutral-500">Email</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-2xl font-semibold text-neutral-950"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-[28px] border border-stone-200 bg-white p-6">
                <div className="text-sm text-neutral-500">Instagram</div>
                <div className="mt-2 text-lg font-medium text-neutral-950">
                  @{siteConfig.instagram}
                </div>
              </div>

              <div className="rounded-[28px] border border-stone-200 bg-white p-6">
                <div className="text-sm text-neutral-500">Session Types</div>
                <div className="mt-2 text-lg font-medium text-neutral-950">
                  Portrait · Family · Kids · Newborn · Bridal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-6 text-center text-sm text-neutral-500">
      © 2026 Tinycopic Photography Studio
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-white text-neutral-950">
      <Header />

      <section className="bg-[linear-gradient(180deg,#fcfaf7_0%,#f5efe7_55%,#f3ece4_100%)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex w-fit items-center rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-700">
              Portfolio · Tinycopic Photography Studio
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              A portfolio page built
              <span className="mt-2 block text-stone-600">
                like a luxury photography brand.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700 lg:text-xl">
              This v5 portfolio is designed to feel calm, premium and editorial
              while still staying easy to maintain. Add your strongest images
              here and let the layout do the selling.
            </p>

            <CategoryPills />
          </div>

          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}