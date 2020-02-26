import React from 'react'
import { NavLink } from 'react-router-dom'

import HeaderSearchbar from './HeaderSearchbar'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderNavbar = ({ isOpen, toggleVisibility }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            exact
            to="/"
            className="navbar__link"
            activeClassName="navbar__link--active"
            title="Go to Homepage"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/event"
            className="navbar__link"
            activeClassName="navbar__link--active"
            title="Go to Events Page"
          >
            Events
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/shop"
            className="navbar__link"
            activeClassName="navbar__link--active"
            title="Go to Shop Page"
          >
            Shop
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/contact"
            className="navbar__link"
            activeClassName="navbar__link--active"
            title="Go to Contact Page"
          >
            Contact
          </NavLink>
        </li>
        <li className="navbar__item">
          <button className="navbar__btn" onClick={toggleVisibility}>
            <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
          </button>
        </li>
      </ul>
      {isOpen ? <HeaderSearchbar toggleVisibility={toggleVisibility} /> : null}
    </nav>
  )
}

export default HeaderNavbar
