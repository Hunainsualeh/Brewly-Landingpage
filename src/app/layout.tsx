import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brewly",
  description: "AI-powered upsells and bundles built for modern cafés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}