import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Meist",
  description:
    "EMSC – kogenud ohutusmeeskond mootorispordi sündmustel üle Eesti. Kiire reageerimine, selged protseduurid ja koostöö korraldajatega.",
};

export default function MeistPage() {
  const images = [3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image src="/12.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[50%_27%] opacity-70 dark:opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="fade-up text-3xl sm:text-4xl font-bold tracking-tight">Meist</h1>
          <p className="fade-up-delay mt-3 max-w-3xl text-foreground/85">
            EMSC on Estonian Motorsport Safety Crew – ohutusmeeskond, kes toetab mootorispordi
            võistlusi ja sündmusi üle Eesti. Meie tugevus on läbimõeldud ettevalmistus, ühtne
            tegutsemine ja rahulik otsustamine ka pingelistes olukordades.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <Script id="breadcrumbs-about" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Avaleht', item: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com' },
              { '@type': 'ListItem', position: 2, name: 'Meist', item: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/meist' },
            ],
          })}
        </Script>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Meie põhimõtted</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/80">
              <li>Ohutus ennekõike – kõigi osapoolte jaoks.</li>
              <li>Selge plaan ja rollid igal sündmusel.</li>
              <li>Kiire ja koordineeritud reageerimine.</li>
              <li>Avatud suhtlus korraldaja ja partneritega.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Kogemus</h2>
            <p className="mt-3 text-foreground/80">
              Meeskonnal on kogemus ringraja-, ralli- ja driftisündmustelt. Vajaduse korral kaasame
              partnerid meditsiini- ja päästevaldkonnast, et tagada terviklahendus.
            </p>
          </div>
        </div>

        <section className="mt-12 rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Miks EMSC</h2>
          <p className="mt-3 text-foreground/80">
            Meil on üle 15 aasta kogemust mootorispordi sündmuste turvalisel korraldamisel. 
            Pakkume terviklahendust alates ohutusplaanist kuni kiire reageerimiseni kohapeal, 
            tehes tihedat koostööd korraldajate, tervishoiupartnerite ja päästevaldkonna esindajatega.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-md border p-4">
              <p className="text-sm text-foreground/60">Kogemus</p>
              <p className="mt-1 text-lg font-semibold">15+ aastat</p>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-sm text-foreground/60">Fookus</p>
              <p className="mt-1 text-lg font-semibold">Ohutus ja sujuvus</p>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-sm text-foreground/60">Ulatus</p>
              <p className="mt-1 text-lg font-semibold">Üle Eesti</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Meeskond õppusel</h2>
          <p className="mt-2 max-w-3xl text-foreground/80">
            Hetked meie väljaõppest ja treeningutest – pärisolukorra harjutamine, ohutusprotseduuride
            lihvimine ja meeskonnatöö.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((n) => (
              <div key={n} className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-black/5">
                <Image
                  src={`/${n}.jpg`}
                  alt={`Meeskonna õppus ${n}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  loading={n > 3 ? "lazy" : "eager"}
                  priority={n === 3}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 text-center">
          <a
            href="/kontakt"
            className="inline-flex rounded-md px-5 py-2.5 text-background"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Küsi pakkumist
          </a>
        </div>
      </main>
    </>
  );
}
