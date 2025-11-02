'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import useSaveVisitorInfo from '../hooks'

function Header() {
  const pathname = usePathname()  // e.g. "/products"
  const [language, setLanguage] = useState('en')
  useSaveVisitorInfo({ pathname, setLanguage })
  // ...existing code...
  const handleLanguageChange = (e: any) => {
    const selectedLang = e.target.value
    setLanguage(selectedLang)
    localStorage.setItem('aef_preferredLanguage', selectedLang)
  }
  // ...existing code...

  return (
    <header className="bg-gray-900 text-white px-6 py-1 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        
        {/* Brand + Refined Slogan */}
        <div className="mb-2 sm:mb-0">
          <h1 className="text-2xl font-bold tracking-tight">
            <Link href="/">
              <img
                style={{ width: '155px' }}
                src="/images/appliance_fix_error_logo.png"
                alt="Not Found"
                className="max-w-md mt-2 mx-auto"
              />
            </Link> 
          </h1>
          <p className="text-sm text-gray-300 italic text-center sm:text-left">
            Your multilingual tech support gateway
          </p>
        </div>

        {/* Navigation + Language Selector */}
        <nav className="mb-2 sm:mb-0 flex justify-center">
          <ul className="flex space-x-6 text-sm font-medium items-center">
            {/* Other Links */}
            <li>
              <Link href="/fix" className="hover:underline">Brands</Link>
            </li>
            <li>
              <Link href="/common-error-code" className="hover:underline">Common Error Codes</Link>
            </li>
            <li>
              <Link href="/query-form" className="hover:underline">Put Your Query</Link>
            </li>
            {/* Language Dropdown */}
            <li>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 text-sm"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
                <option value="kn">Kannada</option>
                <option value="te">Telugu</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
