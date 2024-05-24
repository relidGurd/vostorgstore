"use client"
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function WithAuth (Component: any) {
    return function WithAuth(props: any) {
        useEffect(() => {
            const test = localStorage.getItem('token')
            if (!test) {
                redirect('/')
            }

        }, [])

        return <Component {...props}/>
    }
}