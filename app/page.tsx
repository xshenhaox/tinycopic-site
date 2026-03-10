const siteConfig = {
  studioName: "Tinycopic Photography Studio",
  city: "Boston",
  email: "tinycopic@gmail.com",
  instagram: "tinycopic",
  calendlyUrl: "https://calendly.com/shenhao83043431/30min",
  primaryDomain: "tinycopic.com",
};

const navItems = [
  { label: "服务", href: "#services" },
  { label: "作品", href: "#portfolio" },
  { label: "体验", href: "#experience" },
  { label: "套餐", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "联系", href: "#contact" },
];

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

const portfolio = [
  {
    title: "天使梦境 · Angel Editorial",
    type: "Portrait",
    image: "/images/hero-angel-editorial.jpg",
    span: "md:col-span-2 md:row-span-2",
    tone: "Soft editorial",
  },
  {
    title: "冰雪童话",
    type: "Kids",
    image: "/images/kids-fantasy-ice.jpg",
    span: "md:row-span-2",
    tone: "Fantasy kids",
  },
  {
    title: "周岁抓拍",
    type: "Family",
    image: "/images/family-birthday.jpg",
    span: "",
    tone: "Birthday memory",
  },
  {
    title: "极简宝宝",
    type: "Newborn",
    image: "/images/newborn-minimal.jpg",
    span: "",
    tone: "Minimal soft light",
  },
  {
    title: "浴巾趣味肖像",
    type: "Kids",
    image: "/images/kids-towel-portrait.jpg",
    span: "",
    tone: "Playful portrait",
  },
  {
    title: "奶油花园宝宝",
    type: "Newborn",
    image: "/images/newborn-garden-cream.jpg",
    span: "md:col-span-2",
    tone: "Fine art newborn",
  },
  {
    title: "新年红鱼女孩",
    type: "Kids",
    image: "/images/kids-red-fish-festival.jpg",
    span: "",
    tone: "Chinese new year",
  },
  {
    title: "红鱼女士肖像",
    type: "Portrait",
    image: "/images/portrait-red-fish-lady.jpg",
    span: "md:row-span-2",
    tone: "Fashion red series",
  },
  {
    title: "汉服亲子",
    type: "Family",
    image: "/images/family-hanfu.jpg",
    span: "",
    tone: "Chinese family",
  },
  {
    title: "年味餐桌家庭",
    type: "Family",
    image: "/images/family-festival-table.jpg",
    span: "md:col-span-2",
    tone: "Festival family",
  },
  {
    title: "新年全家福",
    type: "Family",
    image: "/images/family-new-year-group.jpg",
    span: "",
    tone: "Warm family portrait",
  },
  {
    title: "新年多代同堂",
    type: "Family",
    image: "/images/family-generations.jpg",
    span: "",
    tone: "Generations",
  },
  {
    title: "福字亲子纪念",
    type: "Family",
    image: "/images/family-fu-lifestyle.jpg",
    span: "md:col-span-2",
    tone: "Lifestyle family",
  },
  {
    title: "乡野新年宝宝",
    type: "Kids",
    image: "/images/kids-country-newyear.jpg",
    span: "",
    tone: "Storytelling set",
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

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div>
      <div className="text-sm uppercase tracking-[0.25em] text-amber-700/70">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">{description}</p> : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/60 bg-amber-50/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <div className="text-xl font-semibold tracking-[0.2em] uppercase">Tinycopic</div>
          <div className="text-xs text-neutral-500">Photography Studio · Boston</div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-neutral-900">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-full border border-amber-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-amber-400 hover:bg-white"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.75),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(251,146,60,0.18),transparent_30%),linear-gradient(180deg,#fffaf0_0%,#fff6e7_42%,#fff1dc_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/70 px-4 py-2 text-xs font-medium tracking-[0.18em] text-amber-700 shadow-sm backdrop-blur-sm">
            BOSTON PHOTOGRAPHY STUDIO · PORTRAIT · FAMILY · NEWBORN · BRIDAL
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            让每一次拍摄，
            <span className="block bg-gradient-to-r from-amber-700 via-orange-500 to-rose-400 bg-clip-text text-transparent">
              都像一组值得收藏的大片。
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700 lg:text-xl">
            Tinycopic 摄影工作室位于 Boston，专注人像摄影、家庭、儿童、新生婴儿、婚纱与高级定制拍摄。
            用更温暖、更明亮、更有电影感的光影，记录真正属于你的情绪与故事。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-200/60 transition hover:-translate-y-0.5 hover:bg-black"
            >
              立即预约拍摄
            </a>
            <a
              href={siteConfig.calendlyUrl}
              className="rounded-full border border-amber-300/70 bg-white/70 px-7 py-3.5 text-sm font-semibold text-amber-800 transition hover:border-amber-400 hover:bg-white"
            >
              Calendly 在线预约
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["Boston", "工作室城市"],
              ["All Categories", "全品类拍摄"],
              ["Warm Editorial", "明亮电影感光影"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[24px] border border-white/70 bg-white/70 p-5 shadow-[0_10px_35px_rgba(251,191,36,0.12)] backdrop-blur-sm"
              >
                <div className="text-lg font-semibold text-neutral-900">{value}</div>
                <div className="mt-1.5 text-sm text-neutral-600">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-amber-200/50 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-8 hidden h-40 w-40 rounded-full bg-orange-200/50 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/75 p-4 shadow-[0_30px_90px_rgba(217,119,6,0.18)] backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="relative min-h-[520px] overflow-hidden rounded-[28px]">
                  <img src="/images/hero-angel-editorial.jpg" alt="Tinycopic hero featured portrait" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(25,16,9,0.55),rgba(255,255,255,0.06)_45%,rgba(255,255,255,0.18))]" />
                  <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
                    <span>Tinycopic Signature</span>
                    <span>Featured Editorial</span>
                  </div>
                  <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/20 bg-white/18 p-5 backdrop-blur-md">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/80">Hero Collection</div>
                    <div className="mt-2 text-2xl font-semibold text-white">梦幻人像 · 高级叙事感首屏视觉</div>
                    <div className="mt-2 text-sm leading-6 text-white/80">
                      用真实作品作为网站第一视觉，让访客在进入首页的第一秒就感受到 Tinycopic 的审美与拍摄能力。
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white/80 shadow-sm">
                    <div className="relative h-[168px]">
                      <img src="/images/kids-fantasy-ice.jpg" alt="Kids featured work" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,18,18,0.45),transparent_55%)]" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/78 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-700 backdrop-blur-sm">
                        Kids Fantasy
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,247,237,0.88))] p-6 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.22em] text-amber-700/80">Instagram</div>
                    <div className="mt-4 text-2xl font-semibold text-neutral-900">@{siteConfig.instagram}</div>
                    <div className="mt-3 text-sm leading-6 text-neutral-600">
                      持续更新 Boston 高级棚拍、人像摄影、儿童与家庭类作品内容。
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-amber-200/80 bg-gradient-to-br from-amber-100/90 via-white to-orange-100/80 p-6 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.22em] text-amber-800/80">Booking</div>
                    <div className="mt-4 text-xl font-semibold text-neutral-900">Email + Calendly</div>
                    <div className="mt-3 text-sm leading-6 text-neutral-600">
                      从咨询、风格沟通到锁定拍摄时间，让预约流程更顺畅、更专业。
                    </div>
                  </div>
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
        <SectionTitle eyebrow="Services" title="覆盖摄影工作室的核心高端服务" />
        <div className="hidden max-w-md text-sm leading-7 text-neutral-600 md:block">
          兼顾审美表达与商业效率，适合个人、家庭与品牌客户长期合作。
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-amber-200/60 bg-amber-100/50 p-6 transition hover:-translate-y-1 hover:border-amber-300/80 hover:bg-white/70">
            <div className="inline-flex rounded-full border border-amber-300/40 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
              {item.tag}
            </div>
            <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Portfolio"
          title="首页精选作品"
          description="以更高级的杂志式编排展示 Tinycopic 的核心风格：梦幻人像、儿童童话、温暖家庭、周岁与新年主题。"
        />
        <div className="flex flex-wrap gap-3 text-sm">
          {["Portrait", "Family", "Kids", "Newborn", "Festival"].map((tag) => (
            <span key={tag} className="rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-amber-800 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3 xl:auto-rows-[240px]">
        {portfolio.map((item) => (
          <div key={item.title} className={`group relative overflow-hidden rounded-[30px] border border-white/70 bg-amber-100/40 shadow-[0_18px_60px_rgba(217,119,6,0.10)] ${item.span}`}>
            <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,16,0.72),rgba(16,16,16,0.10)_40%,rgba(255,255,255,0.04))]" />
            <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
              <span className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md">
                {item.type}
              </span>
              <span className="rounded-full bg-black/20 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/80 backdrop-blur-md">
                {item.tone}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-[24px] border border-white/15 bg-black/20 p-4 backdrop-blur-md">
                <div className="text-xl font-semibold text-white">{item.title}</div>
                <div className="mt-1 text-sm text-white/75">Tinycopic Featured Work</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div className="rounded-[32px] border border-amber-200/60 bg-amber-100/50 p-8">
        <SectionTitle eyebrow="Experience" title="不仅是拍照，更是完整体验设计" />
        <p className="mt-5 text-base leading-8 text-neutral-600">
          从拍摄前沟通，到现场引导、服装建议、光线控制、精修交付，Tinycopic 的网站结构会围绕“高端体验感”设计，而不只是展示作品。
        </p>
        <div className="mt-8 rounded-[26px] border border-amber-200/60 bg-amber-100 p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">Contact</div>
          <div className="mt-3 text-lg font-medium">{siteConfig.email}</div>
          <div className="mt-2 text-sm text-neutral-600">Instagram: @{siteConfig.instagram}</div>
          <div className="mt-5 flex gap-3">
            <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">发送邮件</a>
            <a href={siteConfig.calendlyUrl} className="rounded-full border border-amber-300/70 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-white/70">Calendly</a>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {process.map((item) => (
          <div key={item.step} className="rounded-[28px] border border-amber-200/60 bg-amber-100/50 p-6">
            <div className="text-sm font-semibold text-amber-700/80">{item.step}</div>
            <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
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
        <SectionTitle eyebrow="Testimonials" title="让用户愿意下单的信任模块" />
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[28px] border border-amber-200/60 bg-amber-100/50 p-6">
            <div className="text-base leading-8 text-neutral-700">“{item.text}”</div>
            <div className="mt-6 text-sm font-medium text-neutral-500">{item.name}</div>
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
          这部分可继续替换成你的真实价格。当前先做成适合上线的高端摄影工作室价格结构。
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {pricing.map((item) => (
          <div key={item.title} className="rounded-[30px] border border-amber-200/70 bg-white/75 p-6 shadow-[0_16px_50px_rgba(217,119,6,0.08)]">
            <div className="text-sm uppercase tracking-[0.22em] text-amber-700/80">{item.title}</div>
            <div className="mt-4 text-4xl font-semibold text-neutral-900">{item.price}</div>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{item.desc}</p>
            <div className="mt-5 space-y-3">
              {item.points.map((point) => (
                <div key={point} className="rounded-full bg-amber-50 px-4 py-2 text-sm text-neutral-700">
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

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <SectionTitle eyebrow="FAQ" title="常见问题" />
      </div>
      <div className="grid gap-4">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-[24px] border border-amber-200/60 bg-amber-100/50 p-6">
            <div className="text-lg font-semibold">{item.q}</div>
            <div className="mt-3 text-sm leading-7 text-neutral-600">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="overflow-hidden rounded-[36px] border border-amber-200/60 bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-neutral-600">{siteConfig.studioName}</div>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              让网站成为你工作室最稳定的获客入口。
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
              现在这是一版升级后的模块化首页结构。下一步可以继续拆分成 /portfolio、/pricing、/about、/contact 多页面，并加入博客、SEO 城市落地页和客户选片系统。
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-200/60 bg-amber-100 p-6">
            <div className="text-sm text-neutral-500">预约邮箱</div>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-2xl font-semibold">{siteConfig.email}</a>
            <div className="mt-5 text-sm text-neutral-500">Instagram</div>
            <div className="mt-2 text-lg font-medium">@{siteConfig.instagram}</div>
            <div className="mt-5 text-sm text-neutral-500">网站域名</div>
            <div className="mt-2 text-lg font-medium">{siteConfig.primaryDomain}</div>
            <div className="mt-5 text-sm text-neutral-500">预约方式</div>
            <div className="mt-2 text-lg font-medium">Email / Calendly</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-amber-200/60 bg-white/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>© 2026 {siteConfig.studioName}. All rights reserved.</div>
        <div className="flex flex-wrap gap-5">
          <a href={siteConfig.calendlyUrl} className="hover:text-neutral-900">Book a Session</a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-neutral-900">Email</a>
          <a href={`https://instagram.com/${siteConfig.instagram}`} className="hover:text-neutral-900">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default function TinycopicStudioSite() {
  return (
    <div className="min-h-screen bg-amber-50 text-neutral-900">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
