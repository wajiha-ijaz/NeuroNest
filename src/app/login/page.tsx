'use client'
import { useEffect } from 'react'

export default function LoginPage() {
  useEffect(() => {
    window.location.href = 'http://127.0.0.1:8000/accounts/auth-signin/'
  }, [])

  return null
}