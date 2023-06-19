import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Base Apparel coming soon page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
