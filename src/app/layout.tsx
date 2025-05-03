// src/app/layout.tsx (update existing file)
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { I18nProvider } from '@/app/providers/I18nProvider';
import { FocusIndicator } from '@/app/components/ui/FocusIndicator';
import { CustomCursor } from '@/app/components/ui/CustomCursor';
import { LiveRegion } from '@/app/components/ui/LiveRegion';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Juan Martinez - FullStack Developer',
  description: 'Professional portfolio of Juan Martinez, a FullStack Developer with 20+ years of experience specializing in web development with modern technologies.',
  keywords: 'fullstack developer, web development, React, TypeScript, Node.js, AWS, UX/UI design',
  openGraph: {
    title: 'Juan Martinez - Fullstack Developer',
    description: 'Professional portfolio of Juan Martinez, a Fullstack Developer with over 20 years of experience specializing in modern web technologies and UX/UI design.',
    url: 'https://juanmartinez.dev',
    siteName: 'Juan Martinez Portfolio',
    locale: 'en_US',
    type: 'website',
  },
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
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <I18nProvider>
            <FocusIndicator />
            <CustomCursor />
            {children}
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