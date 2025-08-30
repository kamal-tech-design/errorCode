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

interface pageProps {
  params: {
    brands: string
    appliance: string
  },
  searchParams: any
}

export default async function ApplianceDetailPage({ params, searchParams }: pageProps ) { 
  const { brands, appliance } =  await Promise.resolve(params)
  const { page } =  await Promise.resolve(searchParams)

  if (!brands || !appliance) {
    console.error('Invalid route parameters:', { ...params })
    return <div>Invalid route</div>
  }

  const pageNo = parseInt(page || '1', 10)
  const applianceDataList = await loadRelatedApplianceData(brands, appliance, pageNo)

  return (
    <div className='p-4'>
      <ErrorListComponent
        applianceRelatedData={ applianceDataList }
        brand={brands}
        appliance={appliance}
        currentPage={pageNo}
      />
    </div>
  )
}
