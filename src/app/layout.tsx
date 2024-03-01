import "@/styles/globals.css"
import { Metadata } from "next"

// components
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <>
          <Navigation />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}

// SEO
export const metadata: Metadata = {
  title: "Aarush Tanwar",
  description: "Full Stack Developer - Aarush Tanwar",
}
