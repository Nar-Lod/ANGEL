import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ANGEL — Plan with purpose', description: 'A calm, focused workspace for your day, projects, and progress.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
