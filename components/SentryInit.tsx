"use client";

import * as Sentry from "@sentry/browser";
import { useEffect } from "react";

export default function SentryInit() {
  useEffect(() => {
    if (Sentry.getCurrentHub().getClient()) return;
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;
    if (!dsn) return;
    Sentry.init({ dsn, tracesSampleRate: 0.1 });
  }, []);
  return null;
}

