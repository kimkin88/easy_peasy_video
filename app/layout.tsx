import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interVariable = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Jumpcut",
  description: "Stitch and apply ease curves to short videos.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Jumpcut",
    description: "Stitch and apply ease curves to short videos.",
    images: [
      {
        url: "/jumpcut.png",
        width: 1200,
        height: 600,
        alt: "easy peasy ease wordmark on lime background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumpcut",
    description: "Stitch and apply ease curves to short videos.",
    images: ["/jumpcut.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interVariable.variable} ${dmMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <footer
            className="border-t border-border/50 px-6 py-4 text-[11px] text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            By MPC —{" "}
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
