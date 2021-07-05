import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { AppContext } from './context'

const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useContext(AppContext)

  return (
    <aside
    className={`${isSidebarOpen ? 'sidebar-wrapper show' :
      'sidebar-wrapper'}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item,index) => {
            const {page, links} = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const {url, icon, label} = link
                    return (
                      <a key={index} href={url}>{icon}{label}</a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
