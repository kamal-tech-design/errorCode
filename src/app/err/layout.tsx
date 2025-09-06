import React from "react"
import "./../globalStyles/globals.css"  // Import global styles if needed
import FilterBar from "../../components/FilterBar"
import Breadcrumbs from "../../components/Breadcrumbs"

interface RootLayoutProps {
  children: React.ReactNode
}
// This is the main layout for the dashboard routes
export default function RootLayout({ children }: RootLayoutProps) {
  
  return (
    <>
      <div className="items-center mx-auto">
        <Breadcrumbs />
        <FilterBar />
          {/* Main content area */}
          <main>{children}</main>
      </div>
    </>
  )
}
