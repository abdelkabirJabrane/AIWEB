import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Hub - Best AI Tools for Developers & Businesses',
    template: '%s | AI Tools Hub',
  },
  description: 'Discover and compare the best AI tools for developers, freelancers, startups, and small businesses. In-depth reviews, tutorials, and recommendations.',
  keywords: ['AI tools', 'artificial intelligence', 'developer tools', 'productivity', 'automation'],
  authors: [{ name: 'AI Tools Hub' }],
  creator: 'AI Tools Hub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aitoolshub.com',
    siteName: 'AI Tools Hub',
    title: 'AI Tools Hub - Best AI Tools for Developers & Businesses',
    description: 'Discover and compare the best AI tools for developers, freelancers, startups, and small businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Hub - Best AI Tools for Developers & Businesses',
    description: 'Discover and compare the best AI tools for developers, freelancers, startups, and small businesses.',
    creator: '@aitoolshub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
