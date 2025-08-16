import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume + Interview Coach",
  description: "Land your next job faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
