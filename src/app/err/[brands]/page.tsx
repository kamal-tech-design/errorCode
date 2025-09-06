import { getApplianceByBrand } from '@/app/controllers/brand.controller'
import AppliancePage from '../../../components/AppliancePage'

export default async function ApplianceMainPage({ params }: {
  params: {
    brands: string
  }
} ) {
  const { brands } = await Promise.resolve(params)
  if (!brands) {  // Handle case where brands parameter is missing
    console.error('Brands parameter is missing in the request')
    return null
  }

  const applianceList = await getApplianceByBrand(brands)

  return (
    <div className=''>
      <AppliancePage appliance={applianceList} brand={brands} />
    </div>
  )
}
