'use client'

interface ErrorCodeLayoutProps {
  children: React.ReactNode
}
// This is the main layout for the dashboard routes
export default function ErrorCodeLayout({ children }: ErrorCodeLayoutProps) {
  
  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto">
      <main>
        { // Render the children components passed to this layout
          children
        }
      </main>
    </div>
  )
}
