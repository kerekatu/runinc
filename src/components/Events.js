import React, { useState } from 'react'

import HeadingTitle from './HeadingTitle'
import Sidebar from './Sidebar'

import EventImg from '../assets/images/event.jpg'

const Events = () => {
  const [items] = useState([
    {
      headingText: 'Copenhagen Maraton',
      contentText: 'Den 29. maj 2018'
    },
    {
      headingText: 'Aarhus City Run',
      contentText: 'Den 1. juni 2018'
    },
    {
      headingText: 'Berlin Marathon',
      contentText: 'Den 6. juni 2018'
    }
  ])

  return (
    <section className="event">
      <HeadingTitle text="Next Event" />
      <img src={EventImg} alt="event" className="event__img" />
      <Sidebar title="Events" items={items} className="event__sidebar" />
    </section>
  )
}

export default Events
