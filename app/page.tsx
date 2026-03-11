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
    title: "人像摄影",
    desc: "适合个人写真、职业形象、生日纪念与社交媒体内容升级。",
    tag: "Portrait",
  },
  {
    title: "家庭摄影",
    desc: "自然、温暖、有互动感的家庭记录，适合节日、周年与成长纪念。",
    tag: "Family",
  },
  {
    title: "儿童摄影",
    desc: "为宝宝和儿童打造轻松、有故事感的拍摄体验，突出真实表情与童趣。",
    tag: "Kids",
  },
  {
    title: "新生婴儿",
    desc: "柔和、安全、细腻的新生儿影像，记录最珍贵的最初时光。",
    tag: "Newborn",
  },
  {
    title: "婚纱摄影",
    desc: "室内棚拍与城市风格婚纱写真结合，兼顾质感、情绪与高级审美。",
    tag: "Bridal",
  },
  {
    title: "商业与定制",
    desc: "品牌视觉、个人IP、产品与形象内容拍摄，支持定制需求。",
    tag: "Commercial",
  },
];

const featuredPortfolio = [
  {
    title: "天使梦境 · Angel Editorial",
    type: "Portrait",
    image: "/images/hero-angel-editorial.jpg",
    note: "Soft editorial",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "冰雪童话",
    type: "Kids",
    image: "/images/kids-fantasy-ice.jpg",
    note: "Fantasy kids",
    size: "",
  },
  {
    title: "周岁抓拍",
    type: "Family",
    image: "/images/family-birthday.jpg",
    note: "Birthday memory",
    size: "",
  },
  {
    title: "极简宝宝",
    type: "Newborn",
    image: "/images/newborn-minimal.jpg",
    note: "Minimal soft light",
    size: "",
  },
  {
    title: "红鱼女士肖像",
    type: "Portrait",
    image: "/images/portrait-red-fish-lady.jpg",
    note: "Fashion red series",
    size: "lg:row-span-2",
  },
  {
    title: "奶油花园宝宝",
    type: "Newborn",
    image: "/images/newborn-garden-cream.jpg",
    note: "Fine art newborn",
    size: "",
  },
  {
    title: "汉服亲子",
    type: "Family",
    image: "/images/family-hanfu.jpg",
    note: "Chinese family",
    size: "",
  },
  {
    title: "福字亲子纪念",
    type: "Family",
    image: "/images/family-fu-lifestyle.jpg",
    note: "Lifestyle family",
    size: "lg:col-span-2",
  },
];

const pricing = [
  {
    title: "Mini Session",
    price: "$199+",
    desc: "适合儿童、人像快拍、节日主题与轻量纪念拍摄。",
    points: ["30分钟拍摄", "精选精修", "适合单人/儿童"],
  },
  {
    title: "Signature Session",
    price: "$399+",
    desc: "适合家庭、人像、周岁、新年主题与高质量棚拍需求。",
    points: ["1小时拍摄", "多造型/多场景", "适合家庭与个人"],
  },
  {
    title: "Custom Experience",
    price: "Custom",
    desc: "适合婚纱、商业、品牌视觉与复杂主题定制拍摄。",
    points: ["定制方案", "前期创意沟通", "适合品牌与项目需求"],
  },
];

const process = [
  {
    step: "01",
    title: "咨询与沟通",
    desc: "确认拍摄类型、风格偏好、时间需求、家庭成员与造型方向。",
  },
  {
    step: "02",
    title: "预约档期",
    desc: "通过邮箱或 Calendly 完成预约，支持前期拍摄建议与准备清单。",
  },
  {
    step: "03",
    title: "到店拍摄",
    desc: "在 Boston 工作室完成拍摄，兼顾高效流程与舒适体验。",
  },
  {
    step: "04",
    title: "精修交付",
    desc: "精选、修图、导出交付，适合社媒展示、家用留存与商业发布。",
  },
];

const testimonials = [
  {
    name: "Olivia & Daniel",
    text: "The experience felt effortless and premium from start to finish. The images looked editorial, but still felt like us.",
  },
  {
    name: "Grace Family",
    text: "Tinycopic was incredibly patient with our kids and somehow captured the exact warmth we wanted.",
  },
  {
    name: "Emma",
    text: "The studio lighting, styling guidance, and final retouching quality were on another level.",
  },
];

const blogPosts = [
  {
    title: "How to Prepare for a Family Photo Session in Boston",
    excerpt: "帮助家庭客户在拍摄前做好服装、情绪和时间准备。",
    tag: "Family",
  },
  {
    title: "What to Wear for a Studio Portrait Session",
    excerpt: "从色彩、材质到整体氛围，帮客户更容易出片。",
    tag: "Portrait",
  },
  {
    title: "Newborn Photography Tips for First-Time Parents",
    excerpt: "让第一次拍新生儿照片的家庭更安心、更高效。",
    tag: "Newborn",
  },
];

const faqs = [
  {
    q: "你们拍哪些类型？",
    a: "Tinycopic 摄影工作室提供人像、家庭、儿童、新生婴儿、婚纱以及商业定制拍摄。",
  },
  {
    q: "如何预约？",
    a: "你可以通过 tinycopic@gmail.com 联系，或通过 Calendly 直接预约时间。",
  },
  {
    q: "是否适合第一次拍摄的人？",
    a: "适合。我们会在拍摄前提供服装、动作、情绪与场景建议，帮助你自然进入状态。",
  },
  {
    q: "是否在 Boston？",
    a: "是的，工作室位于 Boston，适合本地家庭、人像与品牌客户预约。",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <div className="text-xl font-semibold tracking-[0.2em] uppercase text-neutral-900">
            Tinycopic
          </div>
          <div className="text-xs text-neutral-500">
            Photography Studio · Boston
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <a href="#services" className="transition hover:text-neutral-900">
            服务
          </a>
          <a href="#portfolio" className="transition hover:text-neutral-900">
            作品
          </a>
          <a href="#experience" className="transition hover:text-neutral-900">
            体验
          </a>
          <a href="#pricing" className="transition hover:text-neutral-900">
            套餐
          </a>
          <a href="#blog" className="transition hover:text-neutral-900">
            Blog
          </a>
          <a href="#contact" className="transition hover:text-neutral-900">
            联系
          </a>
        </nav>
        <a
          href={siteConfig.calendlyUrl}
          className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-stone-400"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/80 bg-[linear-gradient(180deg,#fcfaf6_0%,#f5efe6_55%,#f3ede5_100%)]">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-xs font-medium tracking-[0.18em] text-stone-700 shadow-sm backdrop-blur-sm">
            BOSTON PHOTOGRAPHY STUDIO · PORTRAIT · FAMILY · NEWBORN · BRIDAL
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            Tinycopic v4
            <span className="mt-2 block bg-gradient-to-r from-neutral-900 via-stone-700 to-stone-500 bg-clip-text text-transparent">
              摄影行业顶级首页结构。
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700 lg:text-xl">
            这一版更强调高端品牌感、作品展示效率、清晰转化路径和后续 SEO 扩展能力。
            适合 Boston 摄影工作室长期使用，并继续延展 Portfolio、Blog、Pricing 与预约系统。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={siteConfig.calendlyUrl}
              className="rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              立即预约拍摄
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition hover:border-stone-400"
            >
              浏览 Portfolio
            </a>
          </div>
          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              ["Boston", "服务区域"],
              ["Luxury Editorial", "高端品牌视觉"],
              ["SEO Ready", "可扩展内容获客"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[22px] border border-stone-200 bg-white/85 p-5 shadow-sm"
              >
                <div className="text-lg font-semibold text-neutral-900">
                  {value}
                </div>
                <div className="mt-1.5 text-sm text-neutral-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.10)]">
              <img
                src="/images/hero-angel-editorial.jpg"
                alt="Tinycopic hero featured portrait"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(22,22,22,0.56),rgba(22,22,22,0.10)_45%,rgba(255,255,255,0.10))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md">
                Tinycopic Signature Frame
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/15 bg-black/20 p-5 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.22em] text-white/80">
                  Luxury Portrait Direction
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  梦幻人像 · 首页高端主视觉
                </div>
                <div className="mt-2 text-sm leading-6 text-white/80">
                  用最强代表作作为第一屏锚点，直接建立客户对你审美和专业度的信任。
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
                <div className="relative h-[180px]">
                  <img
                    src="/images/kids-fantasy-ice.jpg"
                    alt="Kids featured work"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,20,20,0.35),transparent_60%)]" />
                  <div className="absolute bottom-4 left-4 text-sm font-medium tracking-[0.16em] text-white/90">
                    Kids Fantasy
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  Instagram
                </div>
                <div className="mt-4 text-2xl font-semibold text-neutral-900">
                  @{siteConfig.instagram}
                </div>
                <div className="mt-3 text-sm leading-6 text-neutral-600">
                  持续更新棚拍作品、节日主题、人像系列与家庭摄影内容。
                </div>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  Booking
                </div>
                <div className="mt-4 text-xl font-semibold text-neutral-900">
                  Email + Calendly
                </div>
                <div className="mt-3 text-sm leading-6 text-neutral-600">
                  让咨询、筛选和预约更高效，形成真正可转化的首页路径。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <SectionTitle eyebrow="Services" title="覆盖摄影工作室的核心服务" />
        <div className="hidden max-w-md text-sm leading-7 text-neutral-600 md:block">
          兼顾审美表达与商业效率，适合个人、家庭与品牌客户长期合作。
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
              {item.tag}
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Portfolio"
          title="首页作品墙"
          description="v4 改成更高级的杂志式网格，兼顾秩序感与视觉冲击，让首页像真正的顶级摄影工作室官网。"
        />
        <div className="flex gap-3">
          <a
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-stone-400"
          >
            打开完整 Portfolio
          </a>
          <a
            href="#blog"
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-stone-400"
          >
            查看 Blog
          </a>
        </div>
      </div>

      <div className="grid auto-rows-[240px] gap-6 lg:grid-cols-4">
        {featuredPortfolio.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)] ${item.size}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,16,0.72),rgba(16,16,16,0.12)_42%,rgba(255,255,255,0.02))]" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md">
                {item.type}
              </span>
              <span className="text-[11px] tracking-[0.18em] text-white/75">
                {item.note}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-[24px] border border-white/10 bg-black/18 p-4 backdrop-blur-md">
                <div className="text-xl font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Tinycopic Portfolio Highlight
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
    >
      <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
        <SectionTitle eyebrow="Experience" title="不仅是拍照，更是完整体验设计" />
        <p className="mt-5 text-base leading-8 text-neutral-600">
          从拍摄前沟通，到现场引导、服装建议、光线控制、精修交付，Tinycopic 的网站结构会围绕高端体验感设计，而不只是展示作品。
        </p>
        <div className="mt-8 rounded-[26px] border border-stone-200 bg-stone-50 p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
            Contact
          </div>
          <div className="mt-3 text-lg font-medium text-neutral-900">
            {siteConfig.email}
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            Instagram: @{siteConfig.instagram}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {process.map((item) => (
          <div
            key={item.step}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm font-semibold text-stone-500">
              {item.step}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-10">
        <SectionTitle eyebrow="Testimonials" title="客户评价" />
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="text-base leading-8 text-neutral-700">
              “{item.text}”
            </div>
            <div className="mt-6 text-sm font-medium text-neutral-500">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle eyebrow="Pricing" title="清晰套餐，方便客户快速下单" />
        <p className="max-w-2xl text-base leading-7 text-neutral-600">
          先做成适合上线的高端摄影工作室价格结构，后续可以再替换成你的真实报价。
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {pricing.map((item) => (
          <div
            key={item.title}
            className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm uppercase tracking-[0.22em] text-stone-500">
              {item.title}
            </div>
            <div className="mt-4 text-4xl font-semibold text-neutral-900">
              {item.price}
            </div>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {item.desc}
            </p>
            <div className="mt-5 space-y-3">
              {item.points.map((point) => (
                <div
                  key={point}
                  className="rounded-full bg-stone-100 px-4 py-2 text-sm text-neutral-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Blog & SEO"
          title="内容系统与自然获客入口"
          description="v4 把 Blog 提升为真正的商业增长模块，不只是占位。后续这里可以持续覆盖 Boston family photographer、newborn photography、portrait studio 等关键词。"
        />
        <a
          href="/blog"
          className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-stone-400"
        >
          进入 Blog 页面
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
              {post.tag}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-900">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {post.excerpt}
            </p>
            <div className="mt-6 text-sm font-medium text-neutral-900">
              Read article
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <SectionTitle eyebrow="FAQ" title="常见问题" />
      </div>
      <div className="grid gap-4">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="text-lg font-semibold text-neutral-900">
              {item.q}
            </div>
            <div className="mt-3 text-sm leading-7 text-neutral-600">
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="overflow-hidden rounded-[38px] border border-stone-200 bg-[linear-gradient(135deg,#ffffff_0%,#faf7f2_100%)] p-8 shadow-sm md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              {siteConfig.studioName}
            </div>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              让首页既有审美，
              <span className="block text-stone-600">也有真正的转化能力。</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
              Tinycopic v4 更像一个真正可长期经营的摄影品牌官网。下一步可以继续接上完整 Portfolio、多页面 Pricing、Blog SEO 和客户预约闭环。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.calendlyUrl}
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Book with Calendly
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-stone-400"
              >
                Send Email
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[28px] border border-stone-200 bg-white p-6">
              <div className="text-sm text-neutral-500">预约邮箱</div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-2xl font-semibold text-neutral-900"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-[28px] border border-stone-200 bg-white p-6">
              <div className="text-sm text-neutral-500">Instagram</div>
              <div className="mt-2 text-lg font-medium text-neutral-900">
                @{siteConfig.instagram}
              </div>
            </div>
            <div className="rounded-[28px] border border-stone-200 bg-white p-6">
              <div className="text-sm text-neutral-500">网站域名</div>
              <div className="mt-2 text-lg font-medium text-neutral-900">
                {siteConfig.primaryDomain}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>© 2026 {siteConfig.studioName}. All rights reserved.</div>
        <div className="flex flex-wrap gap-5">
          <a href="#blog" className="hover:text-neutral-900">
            Blog
          </a>
          <a href={siteConfig.calendlyUrl} className="hover:text-neutral-900">
            Book a Session
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-neutral-900"
          >
            Email
          </a>
          <a
            href={`https://instagram.com/${siteConfig.instagram}`}
            className="hover:text-neutral-900"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function TinycopicStudioSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}