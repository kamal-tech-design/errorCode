import AppliancePage from '../../components/AppliancePage'

async function getApplianceByBrand(brand: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/brands/${brand}`, {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch Appliance codes', res)
  }
  return res.json()
}

export default async function ApplianceMainPage({ params }: { params: { brands: string } }) {
  const propObj = await Promise.resolve(params)
  if (!propObj || !propObj.brands) {  // Handle case where brands parameter is missing
    console.error('Brands parameter is missing in the request')
    return <div>Error: Brands parameter is required.</div>
  }
  const applianceList = await getApplianceByBrand(propObj.brands)

  return (
    <div className=''>
      <AppliancePage appliance={applianceList} brand={propObj.brands} />
    </div>
  )
}
