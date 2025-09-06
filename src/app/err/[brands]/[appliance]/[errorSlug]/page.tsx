import ErrorDetailComponent from './ErrorDetailComponent'
import { getErrorDetails } from '@/app/controllers/brand.controller'

export default async function ErrorDetailPage({
  params
}: {
  params: {
    brands: string
    appliance: string
    errorSlug: string
  }
}) {
  const { errorSlug } = await Promise.resolve(params)

  if (!errorSlug) {
    console.error('Invalid route parameters:', params)
    return <div>Invalid route</div>
  }
  // 👇 getErrorDetails should return data directly, not a Response
  const errorDetails = await getErrorDetails({ errorSlug })

  return (
    <div className="p-4 mt-5">
      { Array.isArray(errorDetails) && errorDetails.length > 0 ? (
        <ErrorDetailComponent errorDetails={errorDetails} />
      ) : (
        <div>No error details found!</div>
      )}
    </div>
  )
}
