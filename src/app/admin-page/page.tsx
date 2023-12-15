"use client"
import { redirect } from 'next/navigation'
import {useEffect, useState} from 'react'
import WithAuth from '../components/WithAuth/WithAuth'



const AdminPage = () => {
  return (
    <div>
      Admin Page
    </div>
  )
}


export default WithAuth(AdminPage)
