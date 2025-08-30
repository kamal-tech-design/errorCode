'use client'

import ErrorListCard from './ErrorListCard'
import Link from 'next/link'

interface ErrorListProps {
  applianceRelatedData: {
    meta?: {
      totalPages?: number
      totalItems?: number
      limit?: number
    }
    data?: any[]
  }
  brand: string
  appliance: string
  currentPage: number
}

export default function ErrorListComponent({
  applianceRelatedData,
  brand,
  appliance,
  currentPage,
}: ErrorListProps) {
  const totalPages = applianceRelatedData?.meta?.totalPages || 0
  const totalItems = applianceRelatedData?.meta?.totalItems || 0
  const limitItems = applianceRelatedData?.meta?.limit || 0
  const data = applianceRelatedData?.data || []

  const hasData = Array.isArray(data) && data.length > 0

  return (
    <div className="justify-center items-center">
      {!hasData ? (
        <p className="text-gray-500 text-center py-4">No error codes found for this appliance.</p>
      ) : (
        <ErrorListCard errorRowData={data} brand={brand} appliance={appliance} />
      )}

      {/* Pagination Controls */
      totalItems ? (
      <div className="mt-4 px-5 py-2 bg-gray-300 flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center space-x-4">
          <p className="text-sm font-medium">
            <label className="font-semibold">Per Page:</label> {limitItems}
          </p>

          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage - 1}`}
              className="px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
            >
              Previous
            </Link>
          )}

          {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
            >
              Next
            </Link>
          )}

          <p className="text-sm font-medium">
            <label className="font-semibold">Total Items:</label> {totalItems}
          </p>
        </div>
      </div>) : ('') /* End of Pagination Controls */}
    </div>
  )
}
