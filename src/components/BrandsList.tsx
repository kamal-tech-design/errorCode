"use client"
import Link from "next/link"

export default function HomePage({ brands }: any) {

  return (
    <div className="mt-4 min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      {/* INTRO SECTION */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Home Appliance Brand Error Codes & Repair Support
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Browse our complete list of <strong>appliance brands</strong> to find 
          <strong> error codes, repair guides,</strong> and <strong> troubleshooting tips </strong> 
          for your <strong> washing machine, refrigerator, air conditioner, or kitchen appliance</strong>.  
          Select your brand below to access instant repair solutions and code explanations.
        </p>
      </section>
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

      {/* AFTER THE BRAND LIST */}
      <section className="mt-16 text-gray-700 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Fix Appliance Errors by Brand and Model
        </h2>
        <p className="mb-4">
          Each brand has its own unique set of <strong>error codes</strong>, but many 
          follow similar patterns. For example, LG and Samsung washers may show 
          <strong> drain or imbalance codes</strong> that can often be solved with the 
          same simple fixes. Our guides explain what each error means, how to reset 
          your appliance, and when to call a technician.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
          What You’ll Find for Each Brand:
        </h3>
        <ul className="list-none pl-5 space-y-2">
          <li>✅ Full list of appliance <strong>error codes and meanings</strong></li>
          <li>🧰 Step-by-step <strong>DIY repair instructions</strong></li>
          <li>⚡ <strong>Reset methods</strong> and maintenance tips</li>
          {/* <li>🔧 Guides for <strong>washers, dryers, refrigerators, and more</strong></li> */}
          <li>📞 When to contact professional service</li>
        </ul>

        <p className="mt-6 italic text-gray-500">
          Our goal: make appliance repairs faster, easier, and affordable for every homeowner.
        </p>
      </section>
    </div>
  )
}
