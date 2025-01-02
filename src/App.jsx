import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Desti from './Components/Desti/Desti'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () =>{
  return(
    <div>
      <NavBar />
      <Home />
      <div className='container'>
      <Title id="Destis" title={'Our Destinations'}/>
        <Desti />
      </div>
      <About />
      <Service />
      <Testimonial />
      <Title title={'Contact Us'}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App