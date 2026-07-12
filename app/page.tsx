// Design philosophy: Sunny Pixel Workshop — asymmetric community-poster composition, official logo first, joyful color with disciplined navy structure.
import Image from "next/image";
import InstagramFeed from "@/components/instagram-feed";

const INSTAGRAM_URL = "https://www.instagram.com/_pixelandpaint/";

const swatches = [
  { name: "Pixel Yellow", value: "#FFC83D", className: "bg-brand-yellow" },
  { name: "Pixel Pink", value: "#F2388A", className: "bg-brand-pink" },
  { name: "Digital Blue", value: "#248FCE", className: "bg-brand-blue" },
  { name: "Community Green", value: "#36B86A", className: "bg-brand-green" },
  { name: "Brush Orange", value: "#FF6B35", className: "bg-brand-orange" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas-cream text-ink-navy">
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

        <section className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 xl:gap-20 lg:py-16">
          <div className="relative z-10 min-w-0 max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-3 w-3 bg-brand-pink" />
              <span className="h-3 w-3 bg-brand-blue" />
              <span className="h-3 w-3 bg-brand-green" />
              <p className="ml-1 text-xs font-extrabold uppercase tracking-[0.2em]">
                Art + technology for young creators
              </p>
            </div>

            <h1 className="font-display max-w-[14ch] text-balance text-[clamp(2.5rem,6.2vw,5.75rem)] leading-[0.9] tracking-[-0.05em]">
              Creativity belongs in every neighborhood.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-navy/80 sm:text-xl sm:leading-9">
              Pixel &amp; Paint brings free art and technology pop-ups to kids in
              low-income housing communities—where culture, creativity, and joy
              collide.
            </p>

            <a
              className="group mt-9 inline-flex items-center gap-3 border-b-4 border-brand-pink pb-2 text-sm font-extrabold uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-ink-navy active:scale-[0.97]"
              href={INSTAGRAM_URL}
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

        <section
          aria-labelledby="instagram-heading"
          className="instagram-section border-t-2 border-ink-navy py-14 sm:py-16"
        >
          <div className="mb-8 max-w-2xl">
            <div className="mb-4 flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 bg-brand-orange" />
              <span className="h-2.5 w-2.5 bg-brand-pink" />
              <span className="h-2.5 w-2.5 bg-brand-blue" />
            </div>
            <h2
              id="instagram-heading"
              className="font-display text-balance text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] tracking-[-0.04em]"
            >
              From the workshops
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink-navy/80 sm:text-lg sm:leading-8">
              Real moments from pop-ups around Fresno—updated when new photos go
              up on Instagram.
            </p>
          </div>

          <InstagramFeed />

          <a
            className="group mt-8 inline-flex items-center gap-3 border-b-4 border-brand-blue pb-2 text-sm font-extrabold uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-ink-navy active:scale-[0.97]"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Follow @_pixelandpaint
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </section>

        <footer className="border-t-2 border-ink-navy pt-5">
          <ul className="flex flex-wrap justify-end gap-2" aria-label="Pixel & Paint brand colors">
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
        </footer>
      </div>
    </main>
  );
}
