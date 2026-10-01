import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ANGEL — Plan with purpose", description: "Your AI-powered daily execution workspace." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
