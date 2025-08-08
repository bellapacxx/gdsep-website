import "./globals.css"; // your global Tailwind + theme CSS

import { ReactNode } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "GDSEP - Global Dynamic Startup Entrepreneurship Program",
  description:
    "Empowering youth startups through tokenized land & mineral assets powered by Sunvila Gold (SVG).",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text antialiased">
        <Header />
        <main className="min-h-screen max-w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
