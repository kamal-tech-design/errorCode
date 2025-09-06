'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Breadcrumbs() {
  const pathname = usePathname() // e.g. "/lg/appliance"
  const pathParts = pathname.split('/').filter(Boolean) // removes empty segments

  return (
    <nav className="text-sm text-gray-600 text-xl">
      { pathParts.length ? (
        <span>
          <Link href="/" className="text-blue-500 hover:underline"> Home </Link>
        </span>)
       : null }
      { pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/')

        return (
          <span key={index}>
            <span className="mx-1">/</span>
            <Link href={href} className="text-blue-500 hover:underline capitalize">
              { part  /* Decoding URL parts and replacing hyphens with spaces */ }
            </Link>
          </span>
        )
      }) }
    </nav>
  )
}
