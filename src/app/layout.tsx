// src/app/layout.tsx (update existing file)
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { I18nProvider } from '@/app/providers/I18nProvider';
import { FocusIndicator } from '@/app/components/ui/FocusIndicator';
import { CustomCursor } from '@/app/components/ui/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Juan Martinez - FullStack Developer',
  description: 'Professional portfolio of Juan Martinez, a FullStack Developer specializing in web development with modern technologies.',
  keywords: 'fullstack developer, web development, React, TypeScript, Node.js, AWS',
  openGraph: {
    title: 'Juan Martinez - Fullstack Developer',
    description: 'Professional portfolio of Juan Martinez, a Fullstack Developer specializing in modern web technologies.',
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
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <I18nProvider>
            <FocusIndicator />
            <CustomCursor />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}