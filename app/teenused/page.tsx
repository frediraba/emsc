import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Stethoscope, AlertTriangle, GraduationCap } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Teenused",
  description:
    "EMSC teenused: võistluste ohutus, meditsiiniline tugi, riskihindamine ja vabatahtlike koolitus.",
};

export default function TeenusedPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image src="/2.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[50%_70%] opacity-70 dark:opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
            <h1 className="fade-up text-3xl sm:text-4xl font-bold tracking-tight">Teenused</h1>
            <p className="fade-up-delay mt-3 max-w-3xl text-foreground/85">Pakume terviklikku ohutuslahendust mootorispordi võistlustele ja sündmustele – planeerimisest kuni kiire reageerimiseni.</p>
          </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <Script id="breadcrumbs-service" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Avaleht', item: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com' },
              { '@type': 'ListItem', position: 2, name: 'Teenused', item: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/teenused' },
            ],
          })}
        </Script>
        <Script id="service-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'EMSC ohutusteenus',
            areaServed: 'EE',
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/teenused',
            provider: { '@type': 'Organization', name: 'EMSC' },
          })}
        </Script>
        <div className="grid gap-6 sm:grid-cols-2">
          <section className="rounded-lg border p-6 bg-background/80 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
            <Shield className="h-6 w-6 text-[var(--accent)]" aria-hidden />
            <h2 className="mt-3 text-xl font-semibold">Võistluste ohutus</h2>
            <p className="mt-2 text-foreground/80">
              Rajaservas valmis – kiire sekkumine, selged protokollid ja tõhus koostöö võistluskeskusega. Rajalt koristus, turvavarustuse kontroll ja osalejate suunamine.
            </p>
          </section>

          <section className="rounded-lg border p-6 bg-background/80 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
            <Stethoscope className="h-6 w-6 text-[var(--accent)]" aria-hidden />
            <h2 className="mt-3 text-xl font-semibold">Meditsiiniline tugi</h2>
            <p className="mt-2 text-foreground/80">
              Esmaabi ja meditsiinitugi, valmisolek nii rajal kui ka publikualal. Koostöö tervishoiupartneritega ja selged edasisaatmise protseduurid.
            </p>
          </section>

          <section className="rounded-lg border p-6 bg-background/80 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
            <AlertTriangle className="h-6 w-6 text-[var(--accent)]" aria-hidden />
            <h2 className="mt-3 text-xl font-semibold">Riskihindamine</h2>
            <p className="mt-2 text-foreground/80">
              Sündmuse ohutusplaan, evakuatsiooniskeemid, liikluskorraldus, side ja rollijaotus. Tööriistad, mis annavad kindlust nii korraldajale kui ka osalejatele.
            </p>
          </section>

          <section className="rounded-lg border p-6 bg-background/80 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
            <GraduationCap className="h-6 w-6 text-[var(--accent)]" aria-hidden />
            <h2 className="mt-3 text-xl font-semibold">Vabatahtlike koolitus</h2>
            <p className="mt-2 text-foreground/80">
              Praktilised treeningud turvameeskondadele: ohutusprotseduurid, side ja situatsiooniharjutused. Meeskond, kes harjutab, on sündmusel alati samm ees.
            </p>
          </section>
        </div>

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
