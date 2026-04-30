import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asmit Srivastava | Full Stack Developer",
  description: "Personal portfolio of Asmit Srivastava, a Full Stack Developer building fast and responsive web applications.",
  keywords: ["Asmit Srivastava", "Full Stack Developer", "Portfolio", "Next.js", "React", "Frontend", "Backend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth dark`}>
      <body className="min-h-screen flex flex-col bg-slate-900 text-slate-50 selection:bg-indigo-500/30">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
