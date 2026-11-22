import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnUcuzBurada",
  description: "EnUcuzBurada alışveriş pazaryeri",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
