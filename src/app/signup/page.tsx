'use client'
import { useEffect } from 'react'

export default function SignupPage() {
  useEffect(() => {
    window.location.href = 'http://127.0.0.1:8000/accounts/auth-signup/'
  }, [])

  return null
}