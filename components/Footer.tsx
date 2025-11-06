export default function Footer() {
  return (
    <footer className="border-t py-8 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-foreground/70">
          © {new Date().getFullYear()} EMSC. Kõik õigused kaitstud.
        </p>
        <div className="text-foreground/60">
          <a className="hover:underline" href="tel:+37256946300">
            5694 6300
          </a>
          <span aria-hidden className="mx-2">
            •
          </span>
          <a className="hover:underline" href="mailto:heiki@tuletaltsutaja.ee">
            heiki@tuletaltsutaja.ee
          </a>
        </div>
      </div>
    </footer>
  );
}
