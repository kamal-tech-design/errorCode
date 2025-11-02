import CommonErrorCodes from './ErrorCode'

export const metadata = {
  title: 'Appliance error fix Query form – Submit Your Query',
  description: 'Use our query form to contact support or ask questions. We will respond quickly!',
  keywords: ['error fix contact', 'support', 'query form', 'help', 'customer service'],
  alternates: {
    canonical: `https://applianceerrorfix.com/query-form`,
  }
}

export default function ErrorCodePage({ errorId }: { errorId?: string }) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-2">
      <CommonErrorCodes errorId={errorId} />
    </main>
  )
}
