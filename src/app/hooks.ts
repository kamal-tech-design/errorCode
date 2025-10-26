import { useEffect, useState } from "react"

const useSaveVisitorInfo = ({ pathname, setLanguage }: { pathname: string, setLanguage: (selectedLang: string) => void }) => {
  const [ip, setIp] = useState(null)
  // Custom hook logic here
  useEffect(() => {
    if(!ip) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/getIp?oldIp=${localStorage.getItem('user_ip') || ''}`)
        .then(res => res.json())
        .then(data => {
          setIp(data.ip)
          localStorage.setItem('user_ip', data.ip)
          console.log('Your IP is:', data)
        })
    }
    
    setLanguage(localStorage.getItem('aef_preferredLanguage') || 'en')
  }, [pathname])

}

export default useSaveVisitorInfo