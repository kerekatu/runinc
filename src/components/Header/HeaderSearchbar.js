import React from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderSearchbar = ({ toggleVisibility }) => {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <div className="searchbar__form-left">
          <input
            type="search"
            className="searchbar__input"
            title="Search"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="searchbar__form-right">
          <button className="searchbar__btn">Search</button>
          <FontAwesomeIcon
            icon={faTimes}
            className="searchbar__icon"
            onClick={toggleVisibility}
          />
        </div>
      </form>
    </div>
  )
}

export default HeaderSearchbar
