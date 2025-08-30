import AppliancePage from '../../../components/AppliancePage'

async function getApplianceByBrand(brand: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/brands/${brand}`, {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch Appliance codes', res)
  }
  return res.json()
}

interface pageProps {
  params: {
    brands: string
  }
}

export default async function ApplianceMainPage({ params }: pageProps) {
const { brands } = await Promise.resolve(params)
  if (!brands) {  // Handle case where brands parameter is missing
    console.error('Brands parameter is missing in the request')
    return null
  }

  let applianceList: any = []
  try {
    applianceList = await getApplianceByBrand(brands)
  } catch (error) {
    console.log('Something went wrong while trying to fetch appliance list:', error)
  }

  return (
    <div className=''>
      <AppliancePage appliance={applianceList} brand={brands} />
    </div>
  )
}
