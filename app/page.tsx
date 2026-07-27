// Design philosophy: Sunny Pixel Workshop — asymmetric community-poster composition, official logo first, joyful color with disciplined navy structure.
import Image from "next/image";
import InstagramFeed from "@/components/instagram-feed";

const INSTAGRAM_URL = "https://www.instagram.com/_pixelandpaint/";
const ROOT_ACCESS_URL = "https://rootaccess.org/";
const ROOT_ACCESS_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1476+N.+Van+Ness+Ave.+Fresno+CA+93728";

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

        <footer className="relative -mx-6 mt-4 overflow-hidden border-t-[3px] border-ink-navy bg-ink-navy px-6 py-10 text-canvas-cream sm:-mx-10 sm:px-10 sm:py-12 lg:-mx-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute right-8 top-0 h-5 w-5 -translate-y-1/2 border-2 border-canvas-cream bg-brand-pink shadow-[-22px_0_0_-2px_#248FCE,-22px_0_0_0_#FFF7E5,-44px_0_0_-2px_#36B86A,-44px_0_0_0_#FFF7E5]"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.95fr_0.75fr] lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
                Pixel &amp; Paint
              </p>
              <h2 className="mt-4 max-w-[12ch] font-display text-3xl leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                Make something bright.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-canvas-cream/75 sm:text-base">
                Free art and technology experiences built with Fresno&apos;s young
                creators, families, and neighborhoods.
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-green">
                Community location
              </p>
              <div className="mt-4 border-l-4 border-brand-pink pl-5">
                <p className="font-display text-xl leading-tight">Root Access Hackerspace</p>
                <address className="mt-3 not-italic text-sm leading-7 text-canvas-cream/80 sm:text-base">
                  1476 N. Van Ness Ave.
                  <br />
                  Fresno, CA 93728
                </address>
                <a
                  className="group mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow transition-colors hover:text-canvas-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
                  href={ROOT_ACCESS_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
              <p className="mt-4 max-w-sm text-xs leading-5 text-canvas-cream/55">
                Root Access Hackerspace is a separate Fresno nonprofit and community
                makerspace.
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-blue">
                Stay connected
              </p>
              <nav className="mt-4" aria-label="Footer links">
                <ul className="space-y-3 text-sm font-bold">
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 border-b-2 border-brand-pink pb-1 transition-colors hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 border-b-2 border-brand-green pb-1 transition-colors hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
                      href={ROOT_ACCESS_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Root Access website
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex flex-col gap-6 border-t border-canvas-cream/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-canvas-cream/60">
              Created with care for Fresno&apos;s young makers.
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Pixel & Paint brand colors">
              {swatches.map((swatch) => (
                <li
                  key={swatch.name}
                  className={`${swatch.className} h-4 w-8 border border-canvas-cream`}
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
