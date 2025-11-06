import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Võta EMSC meeskonnaga ühendust: kirjelda sündmust ja vajadusi, vastame tavaliselt ühe tööpäeva jooksul.",
};

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <Script id="breadcrumbs-contact" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Avaleht', item: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com' },
            { '@type': 'ListItem', position: 2, name: 'Kontakt', item: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/kontakt' },
          ],
        })}
      </Script>
      <Script id="contact-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'EMSC',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+37256946300',
              email: 'heiki@tuletaltsutaja.ee',
              contactType: 'customer support',
              areaServed: 'EE',
              availableLanguage: ['et'],
            },
          ],
        })}
      </Script>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Võta ühendust</h1>
      <p className="mt-3 text-foreground/80">
        Kirjelda oma üritust ja ajakava. Mida täpsem info, seda kiiremini saame pakkumise
        koostada. Vastame tavaliselt ühe tööpäeva jooksul.
      </p>

      <div className="mt-8 grid gap-4 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Kontaktandmed</h2>
        <div className="flex flex-col gap-1 text-foreground/80">
          <p>
            Telefon: <a className="underline" href="tel:+37256946300">5694 6300</a>
          </p>
          <p>
            E-post: <a className="underline" href="mailto:heiki@tuletaltsutaja.ee">heiki@tuletaltsutaja.ee</a>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>

      <div className="mt-10 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Alternatiivsed kanalid</h2>
        <p className="mt-2 text-foreground/80">
          Kui vormiga tekib tõrkeid, helista või saada e-kiri ülaltoodud aadressile – vastame esimesel
          võimalusel.
        </p>
      </div>
    </main>
  );
}
