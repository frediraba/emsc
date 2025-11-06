import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Shield, Stethoscope, AlertTriangle, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main id="sisu" className="px-0 sm:px-0 lg:px-0" tabIndex={-1}>
        <section className="relative isolate overflow-hidden">
          <Image
            src="/1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70 dark:opacity-50"
            aria-hidden
          />
          <div className="from-background/60 to-background/90 absolute inset-0 bg-gradient-to-b" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="text-center">
              <h1 className="fade-up text-4xl font-bold tracking-tight sm:text-4xl">
                Ohutus, mis annab kiirusele kindluse
              </h1>
              <p className="fade-up-delay text-foreground/85 mt-4 text-lg">
                EMSC on mootorispordi sündmuste professionaalne ohutusmeeskond. Planeerime,
                valmistume ja reageerime kiiresti – et võistlejad ja pealtvaatajad tunneksid end
                igal hetkel turvaliselt.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="/teenused"
                  className="btn text-background inline-flex items-center rounded-md px-5 py-2.5 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 active:translate-y-[1px] active:shadow"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Meie teenused
                </a>
                <a
                  href="/kontakt"
                  className="btn hover:bg-foreground/5 inline-flex items-center rounded-md border px-5 py-2.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 active:translate-y-[1px]"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  Küsi pakkumist
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="teenused" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold">Teenused</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border p-6 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
              <Shield className="h-6 w-6 text-[var(--accent)]" aria-hidden />
              <h3 className="mt-3 font-medium">Võistluste ohutus</h3>
              <p className="text-foreground/80 mt-2">
                Kiire sekkumine rajal ja selle ümbruses, standardiseeritud protseduurid ja tihe
                koostöö korraldajaga.
              </p>
            </div>
            <div className="rounded-lg border p-6 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
              <Stethoscope className="h-6 w-6 text-[var(--accent)]" aria-hidden />
              <h3 className="mt-3 font-medium">Meditsiiniline tugi</h3>
              <p className="text-foreground/80 mt-2">
                Esmane abi, koostöö tervishoiupartneritega ja valmisolek nii rajal kui ka
                publikualal.
              </p>
            </div>
            <div className="rounded-lg border p-6 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
              <AlertTriangle className="h-6 w-6 text-[var(--accent)]" aria-hidden />
              <h3 className="mt-3 font-medium">Riskihindamine</h3>
              <p className="text-foreground/80 mt-2">
                Rajaplaani ja sündmuse ohutuslahenduse koostamine, evakuatsioon ja liikluskorraldus.
              </p>
            </div>
            <div className="rounded-lg border p-6 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-[var(--accent)]">
              <GraduationCap className="h-6 w-6 text-[var(--accent)]" aria-hidden />
              <h3 className="mt-3 font-medium">Vabatahtlike koolitus</h3>
              <p className="text-foreground/80 mt-2">
                Praktilised koolitused turvameeskonnale: side, protseduurid ja turvaline
                tegutsemine.
              </p>
            </div>
          </div>
        </section>

        <section id="meist" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold">Meist</h2>
          <p className="text-foreground/80 mt-3">
            EMSC koondab kogenud ohutusspetsialiste üle Eesti. Meie töö aluseks on selge plaan,
            harjutatud meeskonnatöö ja professionaalne varustus – et iga sündmus kulgeks sujuvalt ja
            turvaliselt.
          </p>
        </section>

        <section id="kontakt" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold">Võta ühendust</h2>
          <p className="text-foreground/80 mt-3">
            Kirjelda oma üritust ja vajadusi. Vastame tavaliselt ühe tööpäeva jooksul.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
