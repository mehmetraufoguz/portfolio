'use client'

import { useEffect, useState } from 'react'

export function useColorScheme(): 'light' | 'dark' {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const getScheme = (): 'light' | 'dark' => {
      const colorScheme = document.documentElement.style.colorScheme
      if (colorScheme === 'dark') return 'dark'
      if (colorScheme === 'light') return 'light'
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    setScheme(getScheme())

    const observer = new MutationObserver(() => setScheme(getScheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    })

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setScheme(getScheme())
    mediaQuery.addEventListener('change', onChange)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [])

  return scheme
}
