import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Info from './components/Info'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' overflow-x-hidden '>
    < Nav/>
    <Hero/>
    <Info/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
    
  )
}

export default App