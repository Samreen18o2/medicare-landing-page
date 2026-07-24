import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindCare Health | Personalized Mental Healthcare",
  description:
    "Compassionate therapy, psychiatric care, and wellness programs. Same-week appointments, licensed specialists, and insurance-friendly mental healthcare.",
  keywords: [
    "mental health clinic",
    "therapy",
    "psychiatry",
    "anxiety treatment",
    "depression care",
    "telehealth therapy",
    "MindCare Health",
  ],
  icons: {
    icon: [
      { url: "/images/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "MindCare Health | Personalized Mental Healthcare",
    description:
      "Book compassionate, personalized mental healthcare with licensed specialists — in person or virtually.",
    siteName: "MindCare Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1926,
        height: 783,
        alt: "MindCare Health",
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
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;600;700&family=Outfit:wght@400;500;600;700&display=swap");`,
          }}
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
