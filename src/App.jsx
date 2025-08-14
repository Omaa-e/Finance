import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Profile />
    </div>
  )
}

export default App
