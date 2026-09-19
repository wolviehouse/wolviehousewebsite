import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WOLVIE — Different directions. One house.",
  description:
    "Wolvie House explores opportunities across trade, brands, community, consulting and ventures.",
  metadataBase: new URL("https://wolviehouse.com"),
  openGraph: {
    title: "WOLVIE — Different directions. One house.",
    description:
      "A home for trade, brands, community, consulting and ventures.",
    url: "https://wolviehouse.com",
    siteName: "WOLVIE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
