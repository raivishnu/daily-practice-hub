import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Daily Practice Hub - Free Daily Worksheets for Year 3-6",
    template: "%s | Daily Practice Hub",
  },
  description:
    "Download free daily practice sheets for Maths, English, and more. Designed for Australian Year 3-6 students.",
  keywords: [
    "worksheets",
    "practice sheets",
    "maths",
    "english",
    "year 3",
    "year 4",
    "year 5",
    "year 6",
    "australian curriculum",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
