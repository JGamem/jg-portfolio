// src/app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { I18nProvider } from '@/app/providers/I18nProvider';
import { FocusIndicator } from '@/app/components/ui/FocusIndicator';
import { CustomCursor } from '@/app/components/ui/CustomCursor';
import { LiveRegion } from '@/app/components/ui/LiveRegion';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { PerformanceOptimizer } from '@/app/components/ui/PerformanceOptimizer';
import { ScrollToTop } from '@/app/components/ui/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Juan Martinez - FullStack Developer',
  description: 'Professional portfolio of Juan Martinez, a FullStack Developer with 20+ years of experience specializing in web development with modern technologies.',
  keywords: 'fullstack developer, web development, React, TypeScript, Node.js, AWS, UX/UI design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preconnect" href="https://via.placeholder.com" />
      </head>
      <body className={inter.variable}>
      {children}
        <ThemeProvider>
          <I18nProvider>
            <FocusIndicator />
            <CustomCursor />
            <Header />
            <main>{children}</main>
            <Footer />
            <PerformanceOptimizer />
            <ScrollToTop />
            <LiveRegion
              messages={[
                {
                  id: 'welcome',
                  content: 'Welcome to Juan Martinez\'s portfolio website.',
                  type: 'status',
                  clearAfter: 3000,
                }
              ]}
            />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}