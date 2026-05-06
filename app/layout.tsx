import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modern Next.js Dashboard",
  description: "A modern Next.js app with DnD, SWR, and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${montserrat.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
