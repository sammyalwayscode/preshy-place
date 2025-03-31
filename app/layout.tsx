import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preshy's Place - Grand Fashion",
  description:
    "Exquisite African fashion that celebrates heritage and modern style",
};
const sora = Sora({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
