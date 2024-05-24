"use client"
import isAuth from '@/Hooks/IsAuth'
import { redirect } from 'next/navigation'
import {useEffect, useState} from 'react'


const ClientRoom = () => {
  const isLoggin = isAuth()

 

  if (!isLoggin) {
    return (
        <div>
           Loading...
        </div>
    )
  }
  

  return (
    <div>
      Client Room
    </div>
  )
}


export default ClientRoom