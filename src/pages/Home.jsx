import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import Trusted from '../components/Trusted'
import FeatureProduct from '../components/FeatureProduct'
import Category from '../components/Category'

function Home() {

  const data = {
    name: "Singh's Footwears"
  }

  return (
    <>
    <HeroSection myData = {data}/>
    <FeatureProduct/>
    <Category/>
    <Service/>
    <Trusted/>
    </>
  )
}

export default Home
