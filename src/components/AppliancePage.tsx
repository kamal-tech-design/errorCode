import Link from 'next/link'

export default async function AppliancePage({ appliance, brand }: any) {
  
  return (
    <div className="p-5 bg-white flex justify-center items-start px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-2xl text-gray-700 font-bold mb-5">Choose Appliance</h1>
        { appliance.length === 0 && (
          <p className="text-white"> No appliances found for this brand. </p>
        )}

        <ul className="mt-5 space-y-2">
          { appliance.length ?
            appliance.map((item: any) => (
              <li
                key={item.id}
                className="group border p-4 rounded-lg shadow bg-[#4e4e47] hover:bg-yellow-50 hover:text-gray-700 transition-colors"
              >
                <Link
                  href={`/err/${brand}/${item.shortName}`}
                  className="text-lg font-semibold text-white group-hover:text-gray-700 hover:underline transition-colors"
                >
                  <span className="">{item.applianceName}</span>
                  {/* { item.applianceName } */}
                </Link>
              </li>
            )) : ''}
        </ul>
      </div>
    </div>
  )
}
