import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import Book from './Pages/Book'
import ServicesPage from './Pages/ServiceP/ServicesPage'


const App = () => {
  return (
      <Router>
        <div className='font-work-sans'>
          {/* Navbar appears on all pages */}
          <Navbar />
          <Routes>
            {/* Navbar page route */}
            <Route path="/" 
            element={<>
            <Hero />
            <Service />
            <About />
            <Profile />
            <Background />
            <Smart/>
            <Custom/>
            <Believe/>
            <Footer/>
              </>
            } 
            />
          
          {/* Services Page */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Book Page */}
          <Route path="/book" element={<Book/>} />
        </Routes>
        </div>
      </Router>
      
    
  )
}

export default App
