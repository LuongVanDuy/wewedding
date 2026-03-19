import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
  title: "Lễ thành hôn - Quang Huy ♥ Phương Loan",
  description:
    "Chúng tôi trân trọng mời bạn đến dự lễ thành hôn của Quang Huy & Phương Loan vào ngày 30.03.2026. Hãy lưu ngày này cùng chúng tôi!",
  openGraph: {
    title: "Quang Huy ♥ Phương Loan - Hôn lễ của chúng tôi",
    description:
      "Hân hạnh mời bạn tham dự lễ cưới của Quang Huy & Phương Loan · Save the date 30.03.2026",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/test-94a28.firebasestorage.app/o/img1.png?alt=media&token=f1944d21-63e0-4dba-8b98-306d71b19a0e",
        width: 1200,
        height: 630,
        alt: "Quang Huy & Phương Loan - Wedding Invitation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lễ thành hôn - Quang Huy ♥ Phương Loan",
    description:
      "Chúng tôi trân trọng mời bạn đến dự lễ cưới của chúng tôi vào ngày 30.03.2026. Hãy lưu ngày này cùng chúng tôi!",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/test-94a28.firebasestorage.app/o/img1.png?alt=media&token=f1944d21-63e0-4dba-8b98-306d71b19a0e",
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
