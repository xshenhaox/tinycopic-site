export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold text-neutral-900">
          About Tinycopic
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Tinycopic Photography Studio is a Boston-based photography studio
          specializing in portrait, family, kids, newborn and bridal photography.
        </p>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Our goal is to create timeless and emotional images while providing
          a relaxed and professional studio experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Studio Philosophy</h3>
            <p className="mt-3 text-neutral-600">
              Natural emotion, editorial lighting and timeless visual storytelling.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="mt-3 text-neutral-600">
              Based in Boston and serving families, individuals and brands
              across the greater Boston area.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}