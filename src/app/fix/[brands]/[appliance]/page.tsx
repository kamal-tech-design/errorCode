import { Metadata } from 'next'
import { getApplianceRelatedData } from '@/app/controllers/brand.controller'
import ErrorListComponent from './ErrorListComponent'
import { DEFAULT_APPLIANCE } from '@/app/constant'
import NotFoundPage from '@/app/not-found'

export const generateMetadata = async ({ params }: { params: {
    brands: string
    appliance: string
  } }): Promise<Metadata> => {
  const { brands, appliance } = await Promise.resolve(params)

  return {
    title: `${brands} | ${appliance} Error Code | Appliance Error Fix`,
    description: `Troubleshoot ${brands} | ${appliance} issues like. Get solutions, fixes, and error code explanations.`,
    keywords: [
      `${brands} | ${appliance} appliance error codes`,
      `${brands} | ${appliance} error code troubleshooting`,
      `${brands} | ${appliance} appliance repair tips`,
      brands,
      appliance
    ].join(", "),
    alternates: {
      canonical: `https://applianceerrorfix.com/fix/${brands}/${appliance}`,
    }
  }
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
  
  if (!brands || !appliance || DEFAULT_APPLIANCE.indexOf(appliance) === -1) {
    return <div className="">
      <NotFoundPage />
    </div>
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
