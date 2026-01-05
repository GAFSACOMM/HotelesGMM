// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Base Architecture',
  description: 'Proyecto que incluye la arquitectura basica para reutilización en los aplicativos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}