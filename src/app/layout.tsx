import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Price your project | Zoud AI Studio",
  description: "Get a quick estimate for your next digital project.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
