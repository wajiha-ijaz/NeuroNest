'use client'
import { useEffect } from 'react'

export default function BreathingBuddyPage() {
  useEffect(() => {
    window.location.href = 'http://127.0.0.1:8000/exercise/'
  }, [])

  return null
}