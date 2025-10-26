'use client' // Only needed if you're using useState or other client-side hooks
import React, { useState } from 'react'
import FilterDataList from './FilterDataList'

async function searchErrorCode(searchText: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/errorCodes/?query=${searchText}`, {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch list of error codes', res)
  }

  const { data } = await res.json()
  return data
}

const FilterBar: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDisplay, setIsDisplay] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  
  const handleSearchClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = searchText.trim()
    
    if (!text || text.length < 4) {
      setIsDisplay(false)
      setErrorMsg('Input text must contain a minimum of four characters.')
      return
    }

    if (text.length > 50) {
      setIsDisplay(false)
      setErrorMsg('Input text must contain a minimum of 50 characters.')
      return
    }

    setIsLoading(true)
    setIsDisplay(true)
    setErrorMsg('')

    const result = await searchErrorCode(searchText)
    if (result && result.length > 0) {
      setSearchResults(result)
      setIsError(false)
    } else {
      setSearchResults([])
      setIsError(true)
    }
    setIsLoading(false)
  }

  const handleClose = () => {
    setIsDisplay(false)
    console.log('Close button clicked, hiding search results')
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    if (!text.trim() || text.trim().length < 4) {
      setIsDisplay(false)
      setErrorMsg('Input text must contain a minimum of four characters.')
    } else if (text.trim().length > 50) {
      setIsDisplay(false)
      setErrorMsg('Input text must contain a maximum of 50 characters.')
      return
    } else {
      setErrorMsg('')
    }
    setSearchText(text)
  }

  return (
    <div className="search-container w-full max-w-4xl p-4 bg-gradient-to-b from-[#EAF8FB] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {/* Error Codes */}
        <p className="mb-4 text-sm">
          You can search by error code or description.
        </p>
      </h2>
      <div className="relative mb-4">
        <form className='' onSubmit={handleSearchClick}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchInput}
            placeholder="Enter error code or description..."
            className="w-full p-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className='text-sm mt-1' style={{ 'fontSize' : '10px'}}>
            <b> &nbsp;Ex:</b><br />
              &nbsp; &nbsp; 1. error code EID / F1 <br />
              &nbsp; &nbsp; 2. fix room temperature not cooling / washer not draining
          </p>
          <button
            type="submit"
            name="searchButton"
            className="absolute right-4 px-2 top-1/4 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              />
            </svg>
          </button>
        </form>
      </div>

      { errorMsg && (
        <p className="mt-2 rounded-md border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm text-yellow-800 shadow-sm">
          {errorMsg}
        </p>
      )}

      <FilterDataList
        handleClose={ handleClose }
        searchResults={searchResults}
        isLoading={isLoading}
        isError={isError}
        isDisplay={isDisplay}
      />
    </div>
  )
}

export default FilterBar
