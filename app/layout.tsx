import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MANBEE_Cars - Your Trusted Auto Dealer in Northern Nigeria',
  description: 'Quality vehicles at affordable prices in Zaria, Kaduna & Abuja. Established 2015. Buy, sell, trade & ship vehicles with confidence.',
  keywords: 'car dealer, Zaria, Kaduna, Abuja, Nigeria, vehicles, Toyota, Honda, Lexus, trade-in, financing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}