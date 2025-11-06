import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Lehte ei leitud</h1>
      <p className="mt-3 text-foreground/70">Vabandame, otsitud leht ei ole saadaval.</p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex rounded-md px-4 py-2 text-background"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Tagasi avalehele
        </Link>
      </div>
    </main>
  );
}

