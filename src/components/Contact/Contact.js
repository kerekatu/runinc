import React from 'react'

import ContactForm from './ContactForm'
import Footer from '../Footer'
import HeadingTitle from '../HeadingTitle'

import mapImg from '../../assets/images/map.jpg'

const Contact = () => {
  return (
    <section className="contact">
      <ContactForm />
      <HeadingTitle text="Contact" />
      <img src={mapImg} alt="Map" className="contact__map" />
      <Footer />
    </section>
  )
}

export default Contact
