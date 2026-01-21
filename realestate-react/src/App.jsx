import React from 'react'
import Header from './components/layout/Header'
import PromotionalBanner from './components/sections/PromotionalBanner/PromotionalBanner'
import Hero from './components/sections/Hero/Hero'
import Stats from './components/sections/Stats/Stats'
import About from './components/sections/About/About'
import Properties from './components/sections/Properties/Properties'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/layout/Footer'
import './styles/globals.css'

const App = () => {
  return (
    <div>
      <Header />
      <PromotionalBanner />
      <Hero />
      <Stats />
      <About />
      <Properties />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
