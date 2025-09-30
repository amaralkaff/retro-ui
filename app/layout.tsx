import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHead = Space_Grotesk({
  variable: "--font-head",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmangLy - Full Stack Developer",
  description: "Human side of zero and one. Building innovative solutions from AI applications to web platforms that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontHead.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
