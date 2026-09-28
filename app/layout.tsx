import type { Metadata } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "ETH.VN — Ethereum bằng tiếng Việt",
  description:
    "Ethereum là mạng lưới toàn cầu nơi bạn kiểm soát tài sản, dữ liệu và danh tính của chính mình. Tìm hiểu Ethereum bằng tiếng Việt, với nội dung từ ethereum.org.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
