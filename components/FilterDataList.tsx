import Link from 'next/link'

interface FilterDataListProps {
  searchResults: any[]
  isLoading: boolean
  isError: boolean
  isDisplay: boolean
  handleClose: () => void
}

const FilterDataList = ({ searchResults, isLoading, isError, isDisplay, handleClose }: FilterDataListProps) => {

  if (!isDisplay) {
    return null
  }

  return (
  <div className="absolute w-full max-w-3xl mt-2 bg-white shadow-lg rounded-md overflow-hidden">
  {/* ❌ Don't place close button in flex row with content */}
  {/* ✅ Use absolute positioning inside relative container */}
  <button
    onClick={handleClose}
    className="absolute cursor-pointer z-50 top-2 right-5 text-2xl text-gray-500 hover:text-gray-800"
    aria-label="Close"
  >
    &times;
  </button>

  {/* Scrollable search result list */}
  <div className="relative max-h-96 overflow-y-auto pt-10"> {/* Add padding top so it doesn't overlap close button */}
    {(searchResults.length > 0 && !isLoading && !isError) ? (
      searchResults.map((item: any, index: number) => (
        <Link
          onClick={handleClose}
          href={`wrr/${item.shortName.toLowerCase()}/${item.appliance.toLowerCase()}/${item.slug}`}
          key={item.errorId}
          className="block hover:bg-gray-50 transition px-4 py-3 border-b border-gray-100"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="text-xs text-gray-400">{index + 1}.</div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-x-2 text-sm font-medium text-gray-800">
                <span className="text-blue-600 font-semibold">{item.erCode}</span>
                <span className="text-gray-600">|</span>
                <span>{item.shortName}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
            </div>
          </div>
        </Link>
      ))
    ): (
      <div className="text-center text-gray-500 py-6">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>No results found</div>
        ) : (
          <div className="text-gray-400">Start typing to search for error codes...</div>
        )}
      </div>
    )}
  </div>
</div>
  )
}

export default FilterDataList
