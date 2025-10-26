import React from "react"
import "./globalStyles/globals.css"  // Import global styles if needed
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Providers from './providers'
// import FilterBar from "@/components/FilterBar"
// import Breadcrumbs from "@/components/Breadcrumbs"

interface RootLayoutProps {
  children: React.ReactNode
}
// This is the main layout for the dashboard routes
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
      <Providers>
        <Header />
          <div className="items-center min-h-screen w-full max-w-7xl mx-auto p-4">
            {/* <Breadcrumbs /> */}
            {/* <FilterBar /> */}
            <main>{children}</main>
          </div>
        <Footer />
      </Providers>
      </body>
    </html>
  )
}
