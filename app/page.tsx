// Tinycopic Photography Studio — v6 Homepage
// Luxury studio homepage for Next.js + Vercel
// Stable version: no external animation libraries required

const siteConfig = {
  studioName: "Tinycopic Photography Studio",
  city: "Boston",
  email: "tinycopic@gmail.com",
  instagram: "tinycopic",
  calendlyUrl: "https://calendly.com/shenhao83043431/30min",
  primaryDomain: "tinycopic.com",
};

const services = [
  {
    title: "Portrait Photography",
    desc: "Editorial-style portrait sessions for personal branding, birthdays, graduation and elevated social content.",
    images: [
      "/images/services/portrait-01.jpg",
      "/images/services/portrait-02.jpg",
      "/images/services/portrait-03.jpg",
    ],
  },
  {
    title: "Family Photography",
    desc: "Warm, natural family sessions designed to capture connection, movement and timeless memories.",
    images: [
      "/images/services/family-01.jpg",
      "/images/services/family-02.jpg",
      "/images/services/family-03.jpg",
    ],
  },
  {
    title: "Kids Photography",
    desc: "Creative children sessions with playful styling, expressive posing and story-driven sets.",
    images: [
      "/images/services/kids-01.jpg",
      "/images/services/kids-02.jpg",
      "/images/services/kids-03.jpg",
    ],
  },
  {
    title: "Newborn Photography",
    desc: "Soft, safe and elegant newborn portraits with a calm studio experience for first-time parents.",
    images: [
      "/images/services/newborn-01.jpg",
      "/images/services/newborn-02.jpg",
      "/images/services/newborn-03.jpg",
    ],
  },
  {
    title: "Bridal Photography",
    desc: "Refined bridal and pre-wedding imagery with a luxury studio aesthetic and polished posing direction.",
    images: [
      "/images/services/bridal-01.jpg",
      "/images/services/bridal-02.jpg",
      "/images/services/bridal-03.jpg",
    ],
  },
  {
    title: "Commercial Photography",
    desc: "Brand visuals, founder portraits and campaign-ready content for modern businesses and creators.",
    images: [
      "/images/services/commercial-01.jpg",
      "/images/services/commercial-02.jpg",
      "/images/services/commercial-03.jpg",
    ],
  },
];

const featuredPortfolio = [
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
];

const testimonials = [
  {
    name: "Olivia & Daniel",
    text: "The entire experience felt polished and effortless. The images looked like an editorial campaign but still felt deeply personal.",
  },
  {
    name: "Grace Family",
    text: "Tinycopic was patient, warm and incredibly good with our kids. The final photos were better than we imagined.",
  },
  {
    name: "Emma",
    text: "The lighting, direction and retouching quality were on another level. Everything felt premium from start to finish.",
  },
];

const pricing = [
  {
    title: "Mini Session",
    price: "$199+",
    points: ["30 minutes", "Best for quick portraits", "Selected retouched images"],
  },
  {
    title: "Signature Session",
    price: "$399+",
    points: ["1 hour session", "Multiple looks or set variations", "Best for family and milestone sessions"],
    featured: true,
  },
  {
    title: "Custom Experience",
    price: "Custom",
    points: ["Bridal, campaigns or full concepts", "Creative planning included", "Tailored quote and direction"],
  },
];

const blogPosts = [
  {
    title: "How to Prepare for a Family Photo Session in Boston",
    excerpt: "A simple prep guide for outfits, timing and helping children feel comfortable before your shoot.",
  },
  {
    title: "What to Wear for a Studio Portrait Session",
    excerpt: "A styling guide for colors, textures and silhouettes that photograph beautifully in studio light.",
  },
  {
    title: "Newborn Photography Tips for First-Time Parents",
    excerpt: "What to bring, when to schedule and how to keep your newborn session calm and smooth.",
  },
];

const stats = [
  { value: "Boston", label: "Studio base" },
  { value: "Luxury", label: "Editorial visual tone" },
  { value: "SEO Ready", label: "Built for long-term growth" },
  { value: "Fast Booking", label: "Calendly conversion path" },
  { value: "Curated", label: "Client experience focus" },
  { value: "Premium", label: "Retouching finish" },
];

const process = [
  {
    step: "01",
    title: "Inquiry & concept",
    desc: "Discuss session type, visual references, family needs, wardrobe direction and schedule.",
  },
  {
    step: "02",
    title: "Preparation",
    desc: "Receive guidance on styling, tones, pacing, child prep and practical studio recommendations.",
  },
  {
    step: "03",
    title: "Session day",
    desc: "A calm, directed and premium studio experience designed to produce polished images efficiently.",
  },
  {
    step: "04",
    title: "Retouch & delivery",
    desc: "Selected images are refined and delivered with an emphasis on softness, elegance and timeless finish.",
  },
];

const faqs = [
  {
    q: "What types of sessions do you offer?",
    a: "Tinycopic offers portraits, family, kids, newborn, bridal and selected commercial photography sessions.",
  },
  {
    q: "How do I book?",
    a: "You can book directly through Calendly or email us to discuss your preferred date, style and session type.",
  },
  {
    q: "Do you help with styling?",
    a: "Yes. We provide simple guidance on outfits, tones and overall direction so the final result feels cohesive and polished.",
  },
  {
    q: "Are you based in Boston?",
    a: "Yes. Tinycopic Photography Studio is based in Boston and serves clients across the greater Boston area.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.28em] text-stone-500">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-neutral-600">{description}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <div className="text-lg font-semibold tracking-[0.2em] uppercase text-neutral-950">Tinycopic</div>
          <div className="text-xs text-neutral-500">Photography Studio · Boston</div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#portfolio" className="hover:text-black">Portfolio</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#blog" className="hover:text-black">Blog</a>
          <a href="#contact" className="hover:text-black">Contact</a>
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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf8f3_0%,#f3ece2_58%,#efe7de_100%)]">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="relative z-10 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-700">
            Boston Portrait · Family · Kids · Newborn · Bridal
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl xl:text-[6.2rem]">
            Tinycopic v7
            <span className="mt-2 block text-stone-600">a cinematic flagship site for a luxury studio brand.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700 lg:text-xl">
            A more cinematic, premium and conversion-focused homepage for a Boston photography studio — designed to elevate brand perception, showcase visual authority, support long-term SEO growth and feel closer to a luxury editorial brand site.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={siteConfig.calendlyUrl}
              className="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition hover:border-stone-400"
            >
              View Portfolio
            </a>
          </div>
          <div className="mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-stone-200 bg-white/85 p-5 shadow-sm">
                <div className="text-lg font-semibold text-neutral-950">{item.value}</div>
                <div className="mt-1.5 text-sm text-neutral-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-[36px] border border-white/80 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.11)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-angel-editorial.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/hero-reel.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,15,15,0.62),rgba(15,15,15,0.10)_46%,rgba(255,255,255,0.08))]" />
            <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md">
              Signature Film Banner
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.22em] text-white/80">Luxury Portrait Direction</div>
              <div className="mt-2 text-2xl font-semibold text-white">A cinematic hero built for premium first impression</div>
              <div className="mt-2 text-sm leading-6 text-white/80">
                Place your reel at /public/videos/hero-reel.mp4. If no video is present, the poster image will still preserve the full look.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
              <div className="relative h-[190px]">
                <img
                  src="/images/kids-fantasy-ice.jpg"
                  alt="Kids feature"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,20,20,0.34),transparent_60%)]" />
                <div className="absolute bottom-4 left-4 text-sm font-medium tracking-[0.14em] text-white/90">Kids Fantasy</div>
              </div>
            </div>
            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Instagram</div>
              <div className="mt-4 text-2xl font-semibold text-neutral-950">@{siteConfig.instagram}</div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Keep the site feeling alive by pairing it with your latest editorial portraits, family sessions and styled children sets.
              </p>
            </div>
            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Booking Flow</div>
              <div className="mt-4 text-xl font-semibold text-neutral-950">Email + Calendly</div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                A clear conversion path that turns homepage visitors into warm inquiries and scheduled sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Core studio services"
          description="A cleaner, stronger services section that positions Tinycopic as a premium full-category Boston studio."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-neutral-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {item.desc}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {item.images.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100"
                  >
                    <img
                      src={img}
                      alt={`${item.title} ${index + 1}`}
                      className="h-24 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Portfolio"
            title="Flagship portfolio wall"
            description="A more elevated editorial gallery layout that feels closer to a luxury photography brand than a standard studio site."
          />
          <div className="flex flex-wrap gap-3">
            <a
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:border-stone-400"
            >
              Open full portfolio
            </a>
            <a
              href="/blog"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:border-stone-400"
            >
              Visit blog
            </a>
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featuredPortfolio.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-sm ${item.size}`}
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
                <div className="rounded-[24px] border border-white/10 bg-black/18 p-4 backdrop-blur-md">
                  <div className="text-xl font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-white/75">
                    Tinycopic Highlight
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trust-building social proof"
          description="Luxury studios convert better when strong visuals are backed by calm, credible client language."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-8 text-neutral-700">
                “{item.text}”
              </p>
              <div className="mt-6 text-sm font-medium text-neutral-500">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="rounded-[34px] border border-stone-200 bg-white p-8 shadow-sm">
          <SectionHeader
            eyebrow="Experience"
            title="A full client journey, not just a photoshoot"
            description="The homepage now supports a more premium service narrative, helping clients understand the process before they ever inquire."
          />
          <div className="mt-8 rounded-[26px] border border-stone-200 bg-stone-50 p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">Contact</div>
            <div className="mt-3 text-lg font-medium text-neutral-950">{siteConfig.email}</div>
            <div className="mt-2 text-sm text-neutral-600">Instagram: @{siteConfig.instagram}</div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {process.map((item) => (
            <div key={item.step} className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-stone-500">{item.step}</div>
              <h3 className="mt-4 text-2xl font-semibold text-neutral-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple packages that reduce booking friction"
          description="Use these as premium placeholders now, then replace them with your real pricing when ready."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((item) => (
            <div
              key={item.title}
              className={`rounded-[32px] border p-6 shadow-sm ${item.featured ? "border-neutral-950 bg-neutral-950 text-white" : "border-stone-200 bg-white text-neutral-950"}`}
            >
              <div className={`text-sm uppercase tracking-[0.22em] ${item.featured ? "text-white/70" : "text-stone-500"}`}>
                {item.title}
              </div>
              <div className="mt-4 text-4xl font-semibold">{item.price}</div>
              <div className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className={`rounded-full px-4 py-2 text-sm ${item.featured ? "bg-white/10 text-white/90" : "bg-stone-100 text-neutral-700"}`}>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Blog & SEO"
            title="A content engine for long-term discovery"
            description="This section gives Tinycopic a stronger growth path through educational articles and Boston-focused search visibility."
          />
          <a
            href="/blog"
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:border-stone-400"
          >
            Visit blog page
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Photography Guide</div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{post.excerpt}</p>
              <div className="mt-6 text-sm font-medium text-neutral-950">Read more</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="A simple way to answer objections and make booking feel easier before the first inquiry is sent."
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-neutral-950">{item.q}</div>
              <div className="mt-3 text-sm leading-7 text-neutral-600">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-stone-200 bg-[linear-gradient(135deg,#ffffff_0%,#faf7f2_100%)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">{siteConfig.studioName}</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
                A homepage with both aesthetic value and real conversion intent.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
                Tinycopic v7 is designed to feel closer to a flagship luxury studio site — one that can grow naturally into a full portfolio, pricing, blog and booking ecosystem.
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
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-2xl font-semibold text-neutral-950">
                  {siteConfig.email}
                </a>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-white p-6">
                <div className="text-sm text-neutral-500">Instagram</div>
                <div className="mt-2 text-lg font-medium text-neutral-950">@{siteConfig.instagram}</div>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-white p-6">
                <div className="text-sm text-neutral-500">Domain</div>
                <div className="mt-2 text-lg font-medium text-neutral-950">{siteConfig.primaryDomain}</div>
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

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Experience />
      <Pricing />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
