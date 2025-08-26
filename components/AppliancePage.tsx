import Link from 'next/link'

export default async function AppliancePage({ appliance, brand }: any) {
  
  return (
    <div className="p-5 bg-white flex justify-center items-start px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-5">Choose Appliance</h1>
        { appliance.length === 0 && (
          <p className="text-gray-500"> No appliances found for this brand. </p>
        )}

        <ul className="mt-5 space-y-2">
          { appliance.length ?
            appliance.map((item: any) => (
              <li
                key={item.id}
                className="border p-4 rounded-lg shadow hover:bg-gray-50 transition-colors"
              >
                <Link
                  href={`/${brand}/${item.shortName}`}
                  className="text-lg font-semibold text-blue-500 hover:underline"
                >
                  { item.applianceName }
                </Link>
              </li>
            )) : ''}
        </ul>
      </div>
    </div>
  )
}
