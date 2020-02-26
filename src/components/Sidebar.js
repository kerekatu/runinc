import React from 'react'

const Sidebar = props => (
  <aside className={`sidebar ${props.className}`}>
    <h2 className="heading-secondary mb-sm">{props.title}</h2>
    {props.items.map((item, index) => (
      <div className="sidebar__item" key={index}>
        {item.headingText != '' ? (
          <h3 className="sidebar__title">{item.headingText}</h3>
        ) : null}
        <p className="sidebar__text">{item.contentText}</p>
      </div>
    ))}
  </aside>
)

export default Sidebar
