import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from "../components/NavBar/index";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'URL Watcher',
  description: 'The best URLs health monitor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <NavBar>
            {children}
          </NavBar>
        </body>
    </html>
  )
}
