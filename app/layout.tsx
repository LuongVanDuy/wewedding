import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./providers/smooth-scroll-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viết Đại ♥ Tú Anh | Wedding Invitation",
  description:
    "Thiệp cưới online Viết Đại & Tú Anh · Save the date 23.03.2025 · Hãy cùng sẻ chia niềm hạnh phúc của chúng mình.",
  openGraph: {
    title: "Viết Đại ♥ Tú Anh | Wedding Invitation",
    description:
      "Thiệp cưới online Viết Đại & Tú Anh · Save the date 23.03.2025 · Hãy cùng sẻ chia niềm hạnh phúc của chúng mình.",
    url: "https://www.wewedding.site/",
    siteName: "We Wedding",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520854223473-4a321d5218dd?auto=format&fit=crop&w=1200&q=60",
        width: 1200,
        height: 630,
        alt: "Wedding invitation",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
