import { useEffect } from "react"
import { usePathname } from "next/navigation"

const useSaveVisitorInfo = () => {
  // Custom hook logic here
  const pathname = usePathname()
  useEffect(() => {
   saveVisitorEntry() 
  }, [pathname])

  const saveVisitorEntry = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || ''}/getIp?oldIp=${localStorage.getItem('user_ip') || ''}`
      )
      const data = await res.json()
      if (data?.ip) localStorage.setItem('user_ip', data.ip)
    } catch (err) {
      console.error('getIp failed', err)
    }
  }

  const saveVisitorFeedback = async (feedback: boolean) => {
    try {
      const payload = {
        ...(feedback ? { likes: 1 } : { unLikes: 1 })
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/getIp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const text = await res.text().catch((error: any) => console.log('Error reading response text:', error))
        throw new Error(`saveVisitorFeedback failed: ${res.status} ${text}`)
      }

      return await res.json()
    } catch (err) {
      console.error('saveVisitorFeedback failed', err)
      throw err
    }
  }

  return { saveVisitorFeedback, saveVisitorEntry }
}

export default useSaveVisitorInfo