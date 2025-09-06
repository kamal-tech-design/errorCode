import { getApplianceRelatedData } from '@/app/controllers/brand.controller'
import ErrorListComponent from './ErrorListComponent'

export const metadata = {
  title: "PalHola - Talk to strangers",
  description: "Welcome to the Digital Store, your one-stop shop for all things digital.",
  // keywords: "digital store, online shopping, digital products, e-commerce",
}

export default async function ApplianceDetailPage({ params, searchParams }: {
  params: {
    brands: string
    appliance: string
  },
  searchParams: { page?: string }
}) {
  const { brands, appliance } = await Promise.resolve(params)
  const { page } =  await Promise.resolve(searchParams)

  if (!brands || !appliance) {
    return <div>Invalid route</div>
  }

  const pageNo = parseInt(page || '1', 10)
  const applianceDataList = await getApplianceRelatedData(brands, appliance, pageNo)

  return (
    <div className='p-4'>
      <ErrorListComponent
        applianceRelatedData={applianceDataList}
        brand={brands}
        appliance={appliance}
        currentPage={pageNo}
      />
    </div>
  )
}
