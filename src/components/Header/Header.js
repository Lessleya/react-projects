import React from 'react'
import logo from '../../assets/logo.png'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
        <img src={logo} className='imgLogo' alt='I-Balance'/>
        <h1>I-BALANCE</h1>
        </div>
        <div className='nav'>
          <nav>
            <ul>
              <li>Add Task</li>
              <li>Categories</li>
              <li>Progress</li>
            </ul>
          </nav>
        </div>
        
    </div>
  )
}
