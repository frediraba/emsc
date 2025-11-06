"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Midagi läks valesti</h1>
      <p className="mt-3 text-foreground/70">Palun proovi lehte värskendada.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex rounded-md px-4 py-2 border"
        >
          Värskenda
        </button>
        <a
          href="/"
          className="inline-flex rounded-md px-4 py-2 text-background"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Avaleht
        </a>
      </div>
    </main>
  );
}

