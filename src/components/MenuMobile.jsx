import React from 'react';
import close from "@icons/icon_close.png";
import '@styles/MenuMobile.scss'

const MenuMobile = ({ setToggleMenu, toggleMenu }) => {
  return (
    <div className='mobile-menu'>
      <h1 className='title'>Categories</h1>
      <img 
        className='closeIcon'
        src={close} 
        alt="close icon"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">ELectronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuMobile