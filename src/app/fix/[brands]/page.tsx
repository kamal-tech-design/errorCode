import { Metadata } from 'next'
import { getApplianceByBrand } from '@/app/controllers/brand.controller'
import AppliancePage from '../../../components/AppliancePage'

export const generateMetadata = async ({ params }: { params: { brands: string } }): Promise<Metadata> => {
  const { brands } = await Promise.resolve(params)

  return {
    title: `${brands} Appliance List - Appliance Error Fix`,
    description: `Explore ${brands} appliances including Refrigerator, Air Conditioners, Washing Machine, Dishwasher, TV & Smart Appliance, Ovens & Microwaves with troubleshooting guides and repair tips.`,
    keywords: `${brands} appliance brands, electronics brands, appliance error codes, appliance troubleshooting, appliance repair tips, home appliance brands, kitchen appliance brands, laundry appliance support, electronic device brands, appliance diagnostics`,
    alternates: {
      canonical: `https://applianceerrorfix.com/fix/${brands}`
    }
  }
}

export default async function ApplianceMainPage({ params }: {
  params: {
    brands: string
  }
}) {
  const { brands } = await Promise.resolve(params)
  if (!brands) {  // Handle case where brands parameter is missing
    console.error('Brands parameter is missing in the request')
    return null
  }
  const applianceList = await getApplianceByBrand()

  return (
    <div className=''>
      <AppliancePage appliance={applianceList} brand={brands} />
    </div>
  )
}
