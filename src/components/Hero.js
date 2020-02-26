import React from 'react'

import HeadingTitle from './HeadingTitle'

import HeroImg from '../assets/images/hero.jpg'

const Hero = () => (
  <section className="hero">
    <HeadingTitle text="We Love Running" />
    <img src={HeroImg} alt="Hero" className="hero__img" />
  </section>
)

export default Hero
