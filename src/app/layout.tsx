import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Yashi Singh | Computer Science Engineer & ML Developer',
  description: 'Portfolio of Yashi Singh, a Computer Science Engineering graduate specializing in Python, Machine Learning, software development, and data analysis.',
  keywords: 'Yashi Singh, Machine Learning, Python, Computer Science, Portfolio, Data Analysis, Flask, Scikit-learn',
  authors: [{ name: 'Yashi Singh' }],
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Yashi Singh | Computer Science Engineer & ML Developer',
    description: 'Portfolio of Yashi Singh, a Computer Science Engineering graduate specializing in Python, Machine Learning, software development, and data analysis.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fyashisingh5843back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body>
        {children}
      </body>
    </html>
  );
}
