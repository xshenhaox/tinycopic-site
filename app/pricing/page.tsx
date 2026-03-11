export default function PricingPage() {
  const pricing = [
    {
      title: "Mini Session",
      price: "$199+",
      desc: "适合儿童、人像快拍、节日主题与轻量纪念拍摄。",
    },
    {
      title: "Signature Session",
      price: "$399+",
      desc: "适合家庭、人像、周岁、新年主题与高质量棚拍需求。",
    },
    {
      title: "Custom Experience",
      price: "Custom",
      desc: "适合婚纱、商业、品牌视觉与复杂主题定制拍摄。",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16 text-neutral-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Pricing
          </div>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            套餐与报价
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            让客户更快了解拍摄范围与预算，后续你可以再替换成真实报价。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {item.title}
              </div>
              <div className="mt-4 text-4xl font-semibold text-neutral-900">
                {item.price}
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}