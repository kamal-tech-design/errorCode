import ErrorDetailComponent from './ErrorDetailComponent'

async function getErrorDetail (brands: string, appliance: string, errorSlug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/brands/${brands}/${appliance}/${errorSlug}`, {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch list of error details', res)
  }
  return res.json()
}

export default async function ErrorDetailPage({ params }: { params: { brands: string, appliance: string, errorSlug: string } }) {
  const paramsObj = await Promise.resolve(params)
  
  if (!paramsObj.errorSlug) {
    console.error('Invalid route parameters:', { ...paramsObj })
    return <div>Invalid route</div>
  }

  const errorDetails = await getErrorDetail(paramsObj.brands, paramsObj.appliance, paramsObj.errorSlug)

  return (
    <div className='p-4 mt-10'>
      {/* <h1>Error Code Issues details page (No Error Code)</h1> */}
      <ErrorDetailComponent errorDetails={errorDetails}/>
    </div>
  )
}
