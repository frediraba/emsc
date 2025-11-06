import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold">Lehte ei leitud</h1>
      <p className="text-foreground/70 mt-3">Vabandame, otsitud leht ei ole saadaval.</p>
      <div className="mt-6">
        <Link
          href="/"
          className="text-background inline-flex rounded-md px-4 py-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Tagasi avalehele
        </Link>
      </div>
    </main>
  );
}
