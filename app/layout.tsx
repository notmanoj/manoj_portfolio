import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans, Instrument_Serif, Delicious_Handrawn } from "next/font/google";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const deliciousHandrawn = Delicious_Handrawn({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delicious",
});

export const metadata: Metadata = {
  title: "Manoj — Product Designer",
  description: "Portfolio of Manoj, a product designer based in UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${instrumentSans.variable} ${instrumentSerif.variable} ${deliciousHandrawn.variable}`}>
      <body className="bg-[#FAFAF8] text-black">
        {children}
      </body>
    </html>
  );
}