import type { ReactNode } from "react";
import "./globals.css";

// The real <html>/<body> live in app/[locale]/layout.tsx so that the lang
// attribute and translations follow the active locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
