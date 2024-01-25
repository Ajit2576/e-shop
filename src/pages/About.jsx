import React from 'react'
import HeroSection from '../components/HeroSection'

function About() {

  const data = {
    name: "Footwear Store"
  }

  return (
    <HeroSection myData = {data}/>
  )
}

export default About
