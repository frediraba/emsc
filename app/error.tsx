"use client";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold">Midagi läks valesti</h1>
      <p className="text-foreground/70 mt-3">Palun proovi lehte värskendada.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={() => reset()} className="inline-flex rounded-md border px-4 py-2">
          Värskenda
        </button>
        <Link
          href="/"
          className="text-background inline-flex rounded-md px-4 py-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Avaleht
        </Link>
      </div>
    </main>
  );
}
