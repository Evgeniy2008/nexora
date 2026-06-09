import { Space_Grotesk, Inter } from "next/font/google";

export const display = Space_Grotesk({
  variable: "--ff-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const sans = Inter({
  variable: "--ff-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
