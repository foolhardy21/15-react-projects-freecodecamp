import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location } = useContext(AppContext)
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    
  },[location])

  return (
    <aside
    className={`${isSubmenuOpen?'submenu show':'submenu'}`}
    ref={container}
    >
      submenu
    </aside>
  )
}

export default Submenu
