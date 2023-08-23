import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from "@/lib/antd-registry";
import {ConfigProvider} from "antd";
import theme from "@/theme/config";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>

        {children}
        </ConfigProvider>
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
