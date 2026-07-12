// Design philosophy: Sunny Pixel Workshop — asymmetric community-poster composition, official logo first, joyful color with disciplined navy structure.
import Image from "next/image";

const swatches = [
  { name: "Pixel Yellow", value: "#FFC83D", className: "bg-brand-yellow" },
  { name: "Pixel Pink", value: "#F2388A", className: "bg-brand-pink" },
  { name: "Digital Blue", value: "#248FCE", className: "bg-brand-blue" },
  { name: "Community Green", value: "#36B86A", className: "bg-brand-green" },
  { name: "Brush Orange", value: "#FF6B35", className: "bg-brand-orange" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-canvas-cream text-ink-navy">
      <div aria-hidden="true" className="pixel-ribbon" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 pb-8 pt-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b-2 border-ink-navy pb-5">
          <p className="font-display text-sm uppercase tracking-[0.18em] sm:text-base">
            Pixel &amp; Paint
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-navy/65">
            Fresno, California
          </p>
        </header>

        <section className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-16">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-3 w-3 bg-brand-pink" />
              <span className="h-3 w-3 bg-brand-blue" />
              <span className="h-3 w-3 bg-brand-green" />
              <p className="ml-1 text-xs font-extrabold uppercase tracking-[0.2em]">
                Art + technology for young creators
              </p>
            </div>

            <h1 className="font-display max-w-[12ch] text-balance text-[clamp(2.65rem,8vw,7.8rem)] leading-[0.88] tracking-[-0.055em]">
              Creativity belongs in every neighborhood.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-navy/80 sm:text-xl sm:leading-9">
              Pixel &amp; Paint brings free art and technology pop-ups to kids in
              low-income housing communities—where culture, creativity, and joy
              collide.
            </p>

            <a
              className="group mt-9 inline-flex items-center gap-3 border-b-4 border-brand-pink pb-2 text-sm font-extrabold uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-ink-navy active:scale-[0.97]"
              href="https://www.instagram.com/_pixelandpaint/"
              target="_blank"
              rel="noreferrer"
            >
              Follow the work
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <div className="logo-stage relative justify-self-center lg:justify-self-end">
            <div aria-hidden="true" className="pixel-cluster pixel-cluster-top" />
            <div aria-hidden="true" className="pixel-cluster pixel-cluster-bottom" />

            <figure className="logo-card relative overflow-hidden border-[3px] border-ink-navy bg-brand-yellow p-4 shadow-[12px_12px_0_0_#102A43] sm:p-6">
              <Image
                src="/pixelandpaint-logo.jpg"
                alt="Pixel & Paint official illustrated profile logo featuring colorful pixels and a paintbrush"
                width={960}
                height={960}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 80vw, 38vw"
              />
            </figure>

            <p className="mt-5 text-right text-xs font-bold uppercase tracking-[0.18em] text-ink-navy/60">
              Official Instagram profile mark
            </p>
          </div>
        </section>

        <footer className="border-t-2 border-ink-navy pt-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-navy/65">
              Brand foundation · Ready for what comes next
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Pixel & Paint brand colors">
              {swatches.map((swatch) => (
                <li
                  key={swatch.name}
                  className={`${swatch.className} h-5 w-10 border-2 border-ink-navy`}
                  title={`${swatch.name} ${swatch.value}`}
                >
                  <span className="sr-only">
                    {swatch.name}: {swatch.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </main>
  );
}
