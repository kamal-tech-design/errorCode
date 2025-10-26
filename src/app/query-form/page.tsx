import QueryForm from './QueryForm'

export const metadata = {
  title: 'Appliance error fix Query form – Submit Your Query',
  description: 'Use our query form to contact support or ask questions. We will respond quickly!',
  keywords: ['error fix contact', 'support', 'query form', 'help', 'customer service'],
  alternates: {
    canonical: `https://applianceerrorfix.com/query-form`,
  }
}

export default function QueryPage({ errorId }: { errorId?: string }) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center" id="query-form">Query / Feedback Form</h1>
      <p className="text-center mb-6">
        Have a question or concern? Submit your query and we`ll get back to you!
      </p>
      <QueryForm errorId={errorId} />
    </main>
  )
}
