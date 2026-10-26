import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk.woff2",
  variable: "--font-space",
  display: "swap",
  weight: "300 700",
});
export const metadata: Metadata = {
  title: "ARISU Creative — Great Ideas. Excellent Craft.",
  description:
    "A creative agency driven by design. ARISU turns ideas into crafted visual experiences through campaign, branding, content and craft.",
  openGraph: {
    title: "ARISU Creative — Great Ideas. Excellent Craft.",
    description:
      "Design-driven. Detail-obsessed. Discover our creative services and selected work.",
    type: "website",
    locale: "en_US",
    siteName: "ARISU Creative",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
