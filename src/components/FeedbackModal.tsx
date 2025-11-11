"use client"
import { useEffect, useState } from "react"
import useSaveVisitorInfo from "../app/hooks"

export default function FeedbackModal() {
  const [show, setShow] = useState(false)
  const { saveVisitorFeedback } = useSaveVisitorInfo()
  
  useEffect(() => {
    // Check if the popup has already been shown
    const hasSeenPopup = localStorage.getItem("feedback_popup_shown")

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 30000) // delay for smooth load
      return () => clearTimeout(timer)
    }
  }, [])

  const handleFeedback = (liked: boolean) => {
    console.log(liked ? "User liked the app" : "User disliked the app")
    // store user feedback (example)
    saveVisitorFeedback(liked).catch(() => {})
    localStorage.setItem("feedback_popup_shown", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-[#e9efef94] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-3">How`s your experience with our app so far?</h2>
        <p className="text-gray-600 mb-4">❤️ We`d love your feedback — it helps us get better!</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleFeedback(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            👍 Like
          </button>
          <button
            onClick={() => handleFeedback(false)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            👎 Dislike
          </button>
        </div>
      </div>
    </div>
  )
}
