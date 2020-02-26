import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderNavbar from './HeaderNavbar'

import LogoImg from '../../assets/images/runinc-logo.svg'
import LogoImgHover from '../../assets/images/runinc-logo-hover.svg'

const Header = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  const [logo, setLogo] = useState({
    isHovered: false
  })

  const [search, setSearch] = useState({
    isOpen: false
  })

  const handleMouseOver = () => {
    setLogo({
      isHovered: !logo.isHovered
    })
  }

  const handleMouseOut = () => {
    setLogo({
      isHovered: !logo.isHovered
    })
  }

  const toggleVisibility = () => {
    const { isOpen } = search

    if (isOpen != true || isOpen != false) {
      setSearch({
        isOpen: !isOpen
      })
    }
    console.log(isOpen)
  }

  return (
    <header className="header">
      <Link
        to="/"
        className="logo"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={logo.isHovered !== true ? LogoImg : LogoImgHover}
          alt="Logo"
          className="logo__img"
          title="Go to Homepage"
        />
      </Link>
      <HeaderNavbar
        toggleVisibility={toggleVisibility}
        isOpen={search.isOpen}
      />
      <form className="header__form" onSubmit={handleSubmit}>
        <input type="search" className="input-primary" />
        <button className="btn-primary" title="Search">
          Search
        </button>
      </form>
    </header>
  )
}

export default Header
