import { useState } from 'react'
import  Navbar  from './components/Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Skills from './PGs.jsx'
import Contact from './Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero /> 
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
