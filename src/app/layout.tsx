import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Folio | Modern Leave & Absence Tracking",
  description: "Folio is the most organic, seamless way for teams to manage time off, leaves, and employee well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
