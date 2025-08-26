// import { useState } from 'react'
import ErrorListComponent from './ErrorListComponent'

async function loadRelatedApplianceData(brands: string, appliance: string, page = 1) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL || ''}/brands/${brands}/${appliance}`)
  url.searchParams.append('page', page.toString())

  const res = await fetch(url.toString(), {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch list of error codes', res)
  }
  return res.json()
}

export const metadata = {
  title: "PalHola - Talk to strangers",
  description: "Welcome to the Digital Store, your one-stop shop for all things digital.",
  // keywords: "digital store, online shopping, digital products, e-commerce",
}

export default async function ApplianceDetailPage({ params, searchParams }: { params: { brands: string, appliance: string }, searchParams: any }) { 
  const paramsObj = await Promise.resolve(params)
  const queryParam = await Promise.resolve(searchParams)

  if (!paramsObj.brands || !paramsObj.appliance) {
    console.error('Invalid route parameters:', { ...paramsObj })
    return <div>Invalid route</div>
  }

  const page = parseInt(queryParam?.page || '1', 10)
  // const limit = 10
  const applianceDataList = await loadRelatedApplianceData(paramsObj.brands, paramsObj.appliance, page)

  return (
    <div className='p-4'>
      <ErrorListComponent
        applianceRelatedData={ applianceDataList }
        brand={paramsObj.brands}
        appliance={paramsObj.appliance}
        currentPage={page}
      />
    </div>
  )
}
