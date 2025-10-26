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
      <div className="items-center mx-auto min-h-screen w-full max-w-7xl p-4">
        {/* Main content area */}
        <div className="mt-4 bg-white mx-auto flex flex-col items-center justify-left">
          <Breadcrumbs />
          <FilterBar />
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}
