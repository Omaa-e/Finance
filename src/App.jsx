import { Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Profile from './components/Profile'
import Background from './components/Background'
import Smart from './components/Smart'
import Custom from './components/Custom'
import Believe from './components/Believe'
import Footer from './components/Footer'

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
      <Believe/>
      <Footer/>
    </div>
  )
}

export default App
