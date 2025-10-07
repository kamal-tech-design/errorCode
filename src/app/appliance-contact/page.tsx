import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact Support – Submit Your Query',
  description: 'Use appliance error fix query form to contact support or ask questions. We will respond quickly!',
  keywords: ['error fixing contact', 'appliance support', 'appliance query form', 'help', 'customer service'],
}

export default function ContactFormPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Form</h1>
      <p className="text-gray-600 text-center mb-6">
        Have a question or concern? Submit your query and we`ll get back to you!
      </p>
      <ContactForm />
    </main>
  )
}
