export default function BlogPage() {

  const posts = [
    {
      title: "How to Prepare for a Family Photo Session",
      desc: "Tips for preparing your family photoshoot in Boston."
    },
    {
      title: "What to Wear for Portrait Photography",
      desc: "Clothing suggestions for studio portraits."
    },
    {
      title: "Newborn Photography Guide",
      desc: "A simple guide for first-time parents."
    }
  ]

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16 lg:px-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-semibold text-neutral-900">
          Blog
        </h1>

        <p className="mt-4 text-neutral-600">
          Photography tips and guides from Tinycopic.
        </p>

        <div className="mt-12 grid gap-6">

          {posts.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl border border-stone-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold">
                {post.title}
              </h3>

              <p className="mt-3 text-neutral-600">
                {post.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  )
}