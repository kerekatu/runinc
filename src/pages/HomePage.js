import React from 'react'

import Hero from '../components/Hero'
import Events from '../components/Events'
import Shop from '../components/Shop/Shop'
import Contact from '../components/Contact/Contact'

const HomePage = () => {
  return (
    <main className="home full">
      <Hero />
      <Events />
      <Shop />
      <Contact />
    </main>
  )
}

export default HomePage
