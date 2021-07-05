import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page,links } } = useContext(AppContext)
  const container = useRef(null)
  const [columns,setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    setColumns(`col-${links.length}`)
  },[location,links])

  return (
    <aside
    className={`${isSubmenuOpen?'submenu show':'submenu'}`}
    ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link,index) => {
          const {url,label,icon} = link
          return (
            <a key={index} href={url}>{icon}{label}</a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
