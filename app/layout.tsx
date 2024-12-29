import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Noteflow",
  description: "Noteflow is a modern cloud-based note-taking app designed for seamless collaboration and productivity. With features like user authentication, customizable themes, AI-generated notes, and cloud storage integration, Noteflow offers a smarter alternative to traditional note apps. Organize, share, and access your notes from anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
