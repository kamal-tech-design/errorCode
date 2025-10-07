'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface FilterDataListProps {
  searchResults: any[]
  isLoading: boolean
  isError: boolean
  isDisplay: boolean
  handleClose: () => void
}

const FilterDataList = ({ searchResults, isLoading, isError, isDisplay, handleClose }: FilterDataListProps) => {
  const [appliance, setAppliance] = useState([] as any)
  const [filterValue, setFilterValue] = useState('')
  const [filterResult, setFilterResult] = useState(([] as any))
  // const appliances = ['AC', 'Refrigerator', 'Washing Machine', 'Microwave', 'Oven', 'Dishwasher', 'Dryer', 'Heater', 'Fan', 'Air Purifier']
  useEffect(() => {
    const uniqueAppliances = new Set<string>()
    searchResults.forEach((item: any) => {
      if (item.appliance) uniqueAppliances.add(item.appliance)
    })
    setFilterValue('')
    setAppliance([...uniqueAppliances])
    setFilterResult(searchResults)
  }, [searchResults])
  
  const resultHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setFilterValue(selectedValue)
    if (!selectedValue) {
      setFilterResult(searchResults)
      return
    } 
    const filterData = searchResults.filter((item: any) => {
      return item.appliance === selectedValue
    })
    setFilterResult(filterData)
  }

  if (!isDisplay) return null
  
  const returnedSearchResults = () => {
    return filterResult.map((item: any, index: number) => (<Link
      onClick={handleClose}
      href={`/err/${item.shortName.toLowerCase()}/${item.applianceSlug.toLowerCase()}/${item.slug}`}
      key={item.errorId}
      className="block hover:bg-gray-50 transition px-4 py-3 border-b border-gray-100"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-xs text-gray-400">{index + 1}.</div>
        <div className="flex-1">
          <div className="flex flex-wrap gap-x-2 text-sm font-medium text-gray-800">
            <span className="text-blue-600 font-semibold">{item.erCode}</span>
            <span className="text-gray-600">|</span>
            <span>{item.appliance}</span>
          </div>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
        </div>
      </div>
    </Link>))
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
      <select
        className="w-full min-w-[200px] max-w-full px-4 py-3 bg-white 
          rounded-md text-sm text-gray-800 appearance-none focus:outline-none
          focus:ring-0 focus:border-gray-800 transition"
        onChange={resultHandler}
        value={filterValue}
        >
        <option value="">Select Appliance</option>
        { appliance.map((item: string, key: number) => (
          <option key={key} value={item}>
            { item }
          </option>
        ))}
      </select>

      <div className="relative max-h-96 overflow-y-auto pt-5"> {
        /* Add padding top so it doesn't overlap close button */}
        {(filterResult.length > 0 && !isLoading && !isError) ? (
          returnedSearchResults()
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
