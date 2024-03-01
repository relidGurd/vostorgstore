import { useRouter } from 'next/navigation'
import {useEffect, useState} from 'react'




function isAuth () {
  const [isLoggin, setIsLoggin] = useState(false)
  const router = useRouter()


  useEffect(() => {
    const token:any = localStorage.getItem('token')
    fetch("http://localhost:3001/api/validate", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${JSON.parse(token)}`
      }
    }).then((res: any) => {
      if (!res.ok) {
        router.push('/')
      } else {
        setIsLoggin(true)
      }
    })

  }, [])  


  return isLoggin
}

export default isAuth