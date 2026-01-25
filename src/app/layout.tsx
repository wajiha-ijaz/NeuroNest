import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";
// 1. Import your Navbar component
import Navbar from "@/components/Navbar/page"; 

const playpen = Playpen_Sans({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'], 
  variable: '--font-playpen',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NeuroNest",
  description: "A Digital Nest for Growing Minds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playpen.variable} font-sans antialiased bg-white`}>
        {/* 2. Add the Navbar here so it persists across all pages */}
        <Navbar />
        
        {/* 3. The main content of each page will render here */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}