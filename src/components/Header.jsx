import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {name: 'Валюта', to: '/currency'},
    {name: 'Конвертер валют', to: '/'}
]

const Header = () => {
  return (
    <div className='header'>
      <h1>Currency Converter</h1>
       {links.map(link => (
        <NavLink
          key={link.name}
          to={link.to}
          activeclassname='active'
          className='link'
        >
          {link.name}
        </NavLink>
       ))}
    </div>
  )
}

export default Header