import ErrorDetailComponent from './ErrorDetailComponent'

async function getErrorDetail (brand: string, appliance: string, errorSlug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/brands/${brand}/${appliance}/${errorSlug}`, {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch list of error details', res)
  }
  return res.json()
}

interface PageProps {
  params: {
    brands: string
    appliance: string
    errorSlug: string
  }
}

export default async function ErrorDetailPage({ params }: PageProps ) {
  const { brands, appliance, errorSlug } =  await Promise.resolve(params)

  if (!errorSlug) {
    console.error('Invalid route parameters:', { ...params })
    return <div>Invalid route</div>
  }
  const errorDetails = await getErrorDetail(brands, appliance, errorSlug)

  return (
    <div className='p-4 mt-10'>
      {/* <h1>Error Code Issues details page (No Error Code)</h1> */}
      <ErrorDetailComponent errorDetails={errorDetails}/>
    </div>
  )
}
