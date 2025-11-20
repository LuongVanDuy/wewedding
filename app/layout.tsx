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
  title: "Lễ thành hôn - Lương Đức ♥ Phương Nhung",
  description:
    "Chúng tôi trân trọng mời bạn đến dự lễ thành hôn của Lương Đức & Phương Nhung vào ngày 30.11. Hãy lưu ngày này cùng chúng tôi!",
  openGraph: {
    title: "Lương Đức ♥ Phương Nhung - Hôn lễ của chúng tôi",
    description:
      "Hân hạnh mời bạn tham dự lễ cưới của Lương Đức & Phương Nhung · Save the date 30.11",
    images: [
      {
        url: "/assets/images/anhcuoi.png",
        width: 1200,
        height: 630,
        alt: "Lương Đức & Phương Nhung - Wedding Invitation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lễ thành hôn - Lương Đức ♥ Phương Nhung",
    description:
      "Chúng tôi trân trọng mời bạn đến dự lễ cưới của chúng tôi vào ngày 30.11. Hãy lưu ngày này cùng chúng tôi!",
    images: ["/assets/images/anhcuoi.png"],
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
