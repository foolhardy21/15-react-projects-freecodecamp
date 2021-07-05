import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const NavBar = () => {

  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext)

  const displayMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()

    const center = (tempBtn.left+tempBtn.right)/2
    const bottom = (tempBtn.bottom-3);
    openSubmenu(page,{ center,bottom })
  }

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo"/>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
            className="link-btn"
            onMouseOver={displayMenu}
            onMouseLeave={closeSubmenu}
            >products</button>
          </li>
          <li>
            <button
            className="link-btn"
            onMouseOver={displayMenu}
            onMouseLeave={closeSubmenu}
            >developers</button>
          </li>
          <li>
            <button
            className="link-btn"
            onMouseOver={displayMenu}
            onMouseLeave={closeSubmenu}
            >company</button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={displayMenu}>sign in</button>
      </div>
    </nav>
  )
}

export default NavBar
