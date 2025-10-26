'use client'
import { useState } from 'react'

const QueryForm = ({ errorId }: { errorId?: string}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [queryText, setQueryText] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if(!email || !queryText) {
      setMessage('❌ Please fill in all required fields.')
      setLoading(false)
      return
    }
    
    try {
      const response = await fetch('/api/queryForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, contactNumber, queryText, errorId })
      })

      if (response.ok) {
        setMessage('✅ Thank you! Your query has been submitted.')
        setName('')
        setEmail('')
        setContactNumber('')
        setQueryText('')
      } else {
        setMessage('❌ Something went wrong. Please try again.')
      }
    } catch (error: any) {
      setMessage('❌ Submission failed. Please check your internet connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow-lg rounded-xl p-8">
      {message && <p className="text-center text-green-600">{message}</p>}
      {loading && <p className="text-center text-green-600">{ 'Submitting.......' }</p>}

      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="w-full text-gray-700 border border-gray-300 rounded-md p-4 disabled:opacity-50"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email *"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="w-full text-gray-700 border border-gray-300 rounded-md p-4 disabled:opacity-50"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Your Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          disabled={loading}
          className="w-full border text-gray-700 border-gray-300 rounded-md p-4 disabled:opacity-50"
        />
      </div>

      <div>
        <textarea
          placeholder="Enter your query/feedback here...  *"
          rows={5}
          required
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          disabled={loading}
          className="w-full text-gray-700 border border-gray-300 rounded-md p-4 resize-none disabled:opacity-50"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? 'bg-gray-800 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-800 cursor-pointer'
          } text-white font-semibold py-2 px-6 rounded-md transition duration-300`}
        >
          {loading ? 'Submitting...' : 'Submit Query'}
        </button>
      </div>
    </form>
  )
}

export default QueryForm
