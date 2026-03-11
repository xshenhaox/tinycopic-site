const siteConfig = {
  studioName: "Tinycopic Photography Studio",
  email: "tinycopic@gmail.com",
  instagram: "tinycopic",
  calendlyUrl: "https://calendly.com/shenhao83043431/30min",
};

const featuredPost = {
  title: "How to Prepare for a Family Photo Session in Boston",
  excerpt:
    "A practical guide to outfits, timing, children prep and small details that help your family session feel calm, natural and polished.",
  category: "Family",
  image: "/images/family-birthday.jpg",
};

const blogPosts = [
  {
    title: "What to Wear for a Studio Portrait Session",
    excerpt:
      "A clean styling guide covering tones, fabrics, fit and layering choices that photograph beautifully in studio light.",
    category: "Portrait",
  },
  {
    title: "Newborn Photography Tips for First-Time Parents",
    excerpt:
      "What to bring, when to schedule and how to prepare for a smooth newborn session with minimal stress.",
    category: "Newborn",
  },
  {
    title: "How to Make Kids Feel Comfortable During a Photoshoot",
    excerpt:
      "Simple ways to help children relax so the final images feel expressive, natural and full of personality.",
    category: "Kids",
  },
  {
    title: "Planning a Bridal Studio Session with a Luxury Feel",
    excerpt:
      "A guide to mood, styling, poses and visual direction for bridal portraits that feel elevated and timeless.",
    category: "Bridal",
  },
  {
    title: "How to Choose a Photography Style for Your Family Session",
    excerpt:
      "Editorial, lifestyle or classic? Learn how to choose a visual direction that fits your family and your space.",
    category: "Family",
  },
  {
    title: "Boston Studio Photography: Why Indoor Sessions Work Year-Round",
    excerpt:
      "A simple explanation of why studio sessions can be more flexible, comfortable and visually consistent in Boston weather.",
    category: "Boston Studio",
  },
];

const seoTopics = [
  "Boston family photographer",
  "Boston newborn photographer",
  "Boston portrait studio",
  "Boston kids photography",
  "Boston bridal photography",
  "Chinese family photographer Boston",
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
          <a href="/portfolio" className="hover:text-black">
            Portfolio
          </a>
          <a href="/blog" className="font-medium text-black">
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

function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#fcfaf7_0%,#f5efe7_55%,#f3ece4_100%)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex w-fit items-center rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-700">
            Blog · Tinycopic Photography Studio
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            A photography blog built
            <span className="mt-2 block text-stone-600">
              for trust, education and SEO growth.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700 lg:text-xl">
            This v5 blog page helps Tinycopic look more like a long-term premium
            studio brand. It supports content discovery, builds trust and gives
            your website stronger search visibility over time.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
              Featured · {featuredPost.category}
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              {featuredPost.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
              {featuredPost.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#articles"
                className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Browse Articles
              </a>
              <a
                href={siteConfig.calendlyUrl}
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-stone-400"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicsSection() {
  return (
    <section className="bg-stone-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-stone-500">
            SEO Topics
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Search-friendly content clusters
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            These are the kinds of search topics this page can help support as
            you grow your content library over time.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {seoTopics.map((topic) => (
            <div
              key={topic}
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticlesGrid() {
  return (
    <section id="articles" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-stone-500">
            Articles
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Editorial blog cards for ongoing content
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Start with simple article cards now. Later, each one can become its
            own detailed SEO page.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
                {post.category}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-neutral-950">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {post.excerpt}
              </p>

              <div className="mt-6 text-sm font-medium text-neutral-950">
                Read more
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[38px] border border-stone-200 bg-[linear-gradient(135deg,#ffffff_0%,#faf7f2_100%)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Tinycopic Blog
              </div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
                A better content page means
                <span className="block text-stone-600">
                  more trust before inquiry.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
                Use this page to educate clients, answer common questions and
                strengthen Tinycopic’s search presence — while still guiding
                readers toward inquiry or booking.
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
                <div className="text-sm text-neutral-500">Use Case</div>
                <div className="mt-2 text-lg font-medium text-neutral-950">
                  SEO · Education · Booking Support
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

export default function BlogPage() {
  return (
    <div className="bg-white text-neutral-950">
      <Header />
      <Hero />
      <FeaturedArticle />
      <TopicsSection />
      <ArticlesGrid />
      <CTASection />
      <Footer />
    </div>
  );
}