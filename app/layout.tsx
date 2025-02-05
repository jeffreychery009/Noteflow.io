import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "@/context/Theme";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noteflow",
  description:
    "Noteflow is a modern cloud-based note-taking app designed for seamless collaboration and productivity. With features like user authentication, customizable themes, AI-generated notes, and cloud storage integration, Noteflow offers a smarter alternative to traditional note apps. Organize, share, and access your notes from anywhere.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${inter.variable} antialiased`}>
          <ThemeProvider
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            attribute="class"
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
