import QueryPage from '@/app/query-form/page'
import { CheckCircleIcon, QuestionMarkCircleIcon, LightBulbIcon, Cog6ToothIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface ErrorResolution {
  resolutionid: number
  errorId: number
  brandId: number
  title: string
  description: string
  contentOrder: number
  other: string
  section?: string
}

interface ErrorDetail {
  errorId: number
  brandId: number
  modalId: number
  featureId: number
  applianceId: number
  erCode: string
  otherTerm: string
  slug: string
  title: string
  description: string
  inverterType: string
  errorType: string
  errorResolutions: ErrorResolution[]
}

interface Props {
  errorDetails: ErrorDetail[] | any
  errorResolutions: ErrorResolution[] | any
  details: any
}

const iconMap: Record<string, any> = {
  what_does: <LightBulbIcon className="w-6 h-6 text-yellow-500 mr-2" />,
  causes: <ExclamationTriangleIcon className="w-6 h-6 text-red-500 mr-2" />,
  fix: <Cog6ToothIcon className="w-6 h-6 text-green-500 mr-2" />,
  helpful_tip: <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-2" />,
  faq: <QuestionMarkCircleIcon className="w-6 h-6 text-indigo-500 mr-2" />,
}

export default function ErrorDetailComponent({
  errorDetails,
  errorResolutions,
  details
}: Props) {

  if (!errorDetails || errorDetails.length === 0) {
    return <p className="text-gray-500 text-center py-8">No error details available.</p>
  }

  const safeParseJSON = (jsonString: string) => {
    try {
      return JSON.parse(jsonString)
    } catch {
      return []
    }
  }

  const whatDoes = errorResolutions.find((res: any) => res.section === 'what_does')
  const whatCauses = errorResolutions.find((res: any) => res.section === 'causes')
  const fix = errorResolutions.find((res: any) => res.section === 'fix')
  const helpfulTip = errorResolutions.find((res: any) => res.section === 'helpful_tip')
  const faq = errorResolutions.find((res: any) => res.section === 'faq')

  // Custom list item style without default bullet, using colored dots or checkmarks
  const CustomListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="relative pl-6 mb-2 text-white text-xl before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-3 before:rounded-full before:bg-blue-500">
      {children}
    </li>
  )

  return (
    <article className="w-full max-w-4xl mx-auto bg-[#4e4e47] rounded-lg shadow-md overflow-x-auto">
      
      {/* What Does Section */}
      {whatDoes?.title && (
        <section className="p-6 border-b border-gray-800">
          <h2 className="flex items-center text-3xl font-semibold text-white mb-3">
            {iconMap['what_does']}
            {whatDoes.title}❓
          </h2>
          <p className="text-base leading-relaxed text-xl text-white">{whatDoes.description}</p>
        </section>
      )}

      {/* What Causes Section */}
      {whatCauses?.title && (
        <section className="p-6 border-b border-gray-800 mt-2">
          <h2 className="flex items-center text-3xl font-semibold text-white mb-3">
            {iconMap['causes']}
            {whatCauses.title}
          </h2>
          <ul className="list-none pl-0">
            {safeParseJSON(whatCauses.description).map((item: string, idx: number) => (
              <CustomListItem key={idx}>{item}</CustomListItem>
            ))}
          </ul>
        </section>
      )}

      {/* Fix Section */}
      {fix?.title && (
        <section className="p-6 border-b border-gray-800">
          <h2 className="flex items-center text-3xl font-semibold text-white mb-3">
            { iconMap['fix'] } { fix.title }❓
          </h2>
          <ul className="list-none pl-0 space-y-6">
            {safeParseJSON(fix.description).map(
              (item: { title: string, steps: string[] }, idx: number) => (
                <li key={idx} className="text-white">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <ol className="list-decimal text-xl list-inside ml-6 space-y-1">
                    {item.steps.map((step, stepIdx) => (
                      <li key={stepIdx}>{step}</li>
                    ))}
                  </ol>
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Helpful Tip Section */}
      {helpfulTip?.title && (
        <section className="p-6 border-b border-gray-800">
          <h2 className="flex items-center text-3xl font-semibold text-white mb-3">
            {iconMap['helpful_tip']}
            {helpfulTip.title}
          </h2>
          <div className="text-white text-xl space-y-3">
            {safeParseJSON(helpfulTip.description).map((tip: string, idx: number) => (
              <p key={idx}>{tip}</p>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq?.title && (
        <section className="p-6">
          <h2 className="flex items-center text-3xl font-semibold text-white mb-3">
            {iconMap['faq']}
            { faq.title }❓
          </h2>
          <dl className="space-y-6 text-white">
            {safeParseJSON(faq.description).map(
              (item: { question: string, answer: string }, idx: number) => (
                <div key={idx}>
                  <dt className="font-semibold text-xl mb-1">Question: {item.question}</dt>
                  <dd className="ml-4 text-xl leading-relaxed"><b>Answer:</b> {item.answer}</dd>
                </div>
              )
            )}
          </dl>

          <div className="group text-white mt-4">
            <QueryPage errorId={details?.errorId} />
          </div>
        </section>
      )}
    </article>
  )
}
