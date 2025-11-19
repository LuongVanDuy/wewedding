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
  title: "Lễ thành hôn của Lương Đức ♥ Phương Nhung | Wedding Invitation",
  description:
    "Thiệp cưới online Lương Đức & Phương Nhung · Save the date 30.11 · Hân hoan chào đón sự hiện diện của bạn.",
  openGraph: {
    title: "Lễ thành hôn của Lương Đức ♥ Phương Nhung | Wedding Invitation",
    description:
      "Thiệp cưới online Lương Đức & Phương Nhung · Save the date 30.11 · Hân hoan chào đón sự hiện diện của bạn.",
    url: "https://www.wewedding.site/",
    siteName: "We Wedding",
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
