import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './components/Sidebar'

library.add(fas)

export const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <Sidebar color={theme} setTheme={setTheme} />
}
