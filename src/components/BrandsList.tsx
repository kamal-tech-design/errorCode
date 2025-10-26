"use client"
import Link from "next/link"

export default function HomePage({ brands }: any) {

  return (
    <div className="mt-4 min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      {
        brands && brands.length > 0 ? (
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold"> Top Appliance Brands </h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-5 mt-4">Support and Solutions for Major Appliance Manufacturers</h2>
            <ul className="space-y-2">
              { brands.map(({shortName, id, brandName}: any) => (
                <li key={id} className="group border p-4 rounded-lg shadow bg-gradient-to-b from-[#EAF8FB] hover:text-gray-700 transition-colors">
                  <Link href={`/fix/${shortName.toLowerCase()}`} className="text-lg font-semibold group-hover:text-gray-700 hover:underline transition-colors">
                    <span className="">{brandName}</span>
                  </Link>
                </li>
              )) }
            </ul>
          </div>
        ) : (
          <p className="text-gray-500">No brands available.</p>
        )
      }
    </div>
  )
}
