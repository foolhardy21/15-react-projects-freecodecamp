import React, {useState, useRef, useEffect} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import {links, social} from './data'
import logo from './logo.svg'

const NavBar = () => {

  const [showLinks,setShowLinks] = useState(false)

  return (

    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo}alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          {showLinks && <ul className='links'>
            {links.map(link => {
              return <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            })}
          </ul>}
        </div>
        <ul className='social-icons'>
          {social.map(site => {
            return <li key={site.id}>
              <a href={site.url}>{site.icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>

  )
}

export default NavBar
