'use client'

import { useEffect } from 'react'
import { register } from '../app/sw'

export function ServiceWorkerRegistration() {
  useEffect(() => {
    register()
  }, [])

  return null
}