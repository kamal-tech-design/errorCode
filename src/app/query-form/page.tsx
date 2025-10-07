import QueryForm from './QueryForm'

export const metadata = {
  title: 'Contact Support – Submit Your Query',
  description: 'Use our query form to contact support or ask questions. We will respond quickly!',
  keywords: ['contact', 'support', 'query form', 'help', 'customer service'],
}

export default function QueryPage({ errorId }: { errorId?: string }) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center" id="query-form">Query Form</h1>
      <p className="text-center mb-6">
        Have a question or concern? Submit your query and we`ll get back to you!
      </p>
      <QueryForm errorId={errorId} />
    </main>
  )
}
