import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arisuweb | Company Profile",
  description: "Website company profile Arisuweb sedang disiapkan.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
