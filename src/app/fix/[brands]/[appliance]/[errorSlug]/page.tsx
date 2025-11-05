import { Metadata } from 'next'
import ErrorDetailComponent from './ErrorDetailComponent'
import { getErrorDetails } from '@/app/controllers/brand.controller'
import { DEFAULT_APPLIANCE } from '@/app/constant'
import NotFoundPage from '@/app/not-found'

export const generateMetadata = async ({ params }: { params: {
    brands: string
    appliance: string
    errorSlug: string
  } }): Promise<Metadata> => {
  const { brands, errorSlug, appliance } = await Promise.resolve(params)
  const errorDetails = await getErrorDetails({ errorSlug })

  const { title, description, otherTerm, erCode } = 
    (Array.isArray(errorDetails) && errorDetails.length > 0)
      ? errorDetails[0]
      : { title: 'Appliance error code', description: 'Appliance error code | bug fixing', otherTerm: [] }
  const otherTerms = otherTerm ? JSON.parse(JSON.stringify(otherTerm)) : []

  return {
    title: `${title} - ${brands} | ${appliance} Error Repair | Appliance Error Code Fix`,
    description: description || `Troubleshoot ${brands} | ${appliance} issues like ${title}. Get solutions, fixes, and error code explanations.`,
    keywords: [
      brands,
      appliance,
      title,
      ...(otherTerms.length ? otherTerms.slice(0, 10) : '') // limit to prevent overly long meta
    ].join(", "),
    alternates: {
      canonical: `https://applianceerrorfix.com/fix/${brands}/${appliance}/${errorSlug}`
    }
  }
}

export default async function ErrorDetailPage({
  params
}: {
  params: {
    brands: string
    appliance: string
    errorSlug: string
  }
}) {
  const { errorSlug, brands, appliance } = await Promise.resolve(params)
  if (!errorSlug || DEFAULT_APPLIANCE.indexOf(appliance) === -1) {
    return <div className="">
      <NotFoundPage />
    </div>
  }
  const errorDetails = await getErrorDetails({ errorSlug })

  const { errorResolutions, ...details } = 
    (Array.isArray(errorDetails) && errorDetails.length > 0)
      ? errorDetails[0]
      : { errorResolutions: [], details: {} }

  return (
    <div className="p-4 mt-5">
      { Array.isArray(errorDetails) && errorDetails.length > 0 ? (
        <ErrorDetailComponent
          errorDetails={errorDetails}
          errorResolutions={errorResolutions}
          details={details}
          brands={brands}
          appliance={appliance}
        />
      ) : (
        <div>No error details found!</div>
      )}
    </div>
  )
}
