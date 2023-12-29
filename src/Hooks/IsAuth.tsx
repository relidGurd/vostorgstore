import { redirect } from 'next/navigation'
import {useEffect, useState} from 'react'




function isAuth () {
    const [isLiggin, setIsLoggin] = useState(false)



  useEffect(() => {
    const test = localStorage.getItem('token')
    
    if (test) {
        setIsLoggin(true)
    } else {
        redirect("/")
    }
  }, [])  


  return isLiggin
}

export default isAuth