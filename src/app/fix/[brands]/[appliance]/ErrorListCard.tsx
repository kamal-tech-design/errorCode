import Link from 'next/link'

export default function ErrorListCard({ errorRowData,  brand, appliance }: any) {

  return (
    <div className="w-full max-w-3xl flex flex-col gap-4 p-4">
      { errorRowData && errorRowData.map((errorRowData: any) => (
        <div
          key={ errorRowData.errorId }
          className=" bg-gradient-to-b from-[#EAF8FB] border border-gray-200 rounded-lg shadow p-3"
        >
          <Link href={`/fix/${brand}/${appliance}/${errorRowData.slug}`}>
            <h3 className="text-xl font-semibold mb-3">
              { errorRowData.title } ({ errorRowData.erCode || 'N/A' })
               {/* ({ inverterType(errorRowData.inverterType) }) */}
            </h3>
            <p className="text-sm mb-2">
              <span className="font-medium">  { errorRowData.description } </span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}
