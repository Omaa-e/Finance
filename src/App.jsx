import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Profile from './components/Profile'
import Background from './components/Background'
import Smart from './components/Smart'
import Custom from './components/Custom'

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Profile />
      <Background />
      <Smart/>
      <Custom/>
    </div>
  )
}

export default App
