"use client"
import Link from "next/link"

export default function HomePage({ brands }: any) {

  return (
    <div className="mt-4 min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      {
        brands && brands.length > 0 ? (
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Select Brands</h2>
            <ul className="space-y-2">
              { brands.map(({shortName, id, brandName, slug}: any, index: number) => (
                <li key={id} className="border p-4 rounded-lg shadow hover:bg-gray-50 transition-colors">
                  <Link href={`/err/${shortName.toLowerCase()}`} className="text-lg font-semibold">
                    <span className="text-blue-500 hover:underline">{brandName}</span>
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
