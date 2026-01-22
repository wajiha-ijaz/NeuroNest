import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const playpen = Playpen_Sans({ 
  subsets: ["latin"],
  // Adding 700 and 800 gives you the "Bubbly" thickness you saw in Figma
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
      {/* 'antialiased' helps smooth the edges of rounded fonts */}
      <body className={`${playpen.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}