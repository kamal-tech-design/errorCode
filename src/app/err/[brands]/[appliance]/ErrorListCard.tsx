import Link from 'next/link'

export default function ErrorListCard({ errorRowData,  brand, appliance }: any) {
  
  const inverterType = (inverterType: string) => {
    return inverterType === 'all' ? 'Split / Window' : inverterType
  }

  return (
    <div className="w-full max-w-3xl flex flex-col gap-4 p-4">
      { errorRowData && errorRowData.map((errorRowData: any) => (
        <div
          key={errorRowData.errorId}
          className="bg-white border border-gray-200 rounded-lg shadow p-3"
        >
          <Link href={`/err/${brand}/${appliance}/${errorRowData.slug}`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {errorRowData.title} ({errorRowData.erCode}) ({ inverterType(errorRowData.inverterType) })
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-700">  { errorRowData.description } </span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}
