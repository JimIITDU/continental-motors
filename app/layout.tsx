import type { Metadata } from "next";
import { Michroma, Poppins } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Continental Motors — Premium Luxury Cars",
  description:
    "Drive the world's finest cars. Premium luxury vehicles curated for the true connoisseur.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} ${poppins.variable} font-body bg-[#161616] text-[#f5f5f5] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
