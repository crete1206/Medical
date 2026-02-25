import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import News from './Pages/News'
import Home from './Pages/Home'
import Services from './Pages/services'
import Footer from './Components/footer'
import Header from './Components/Header'
import Preloader from './Components/preloader'


const App = () => {
  const [loading,setloading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setloading(false)
    },2500)

    return ()=> clearTimeout(timer)
  })
  if(loading){
    return(
      <Preloader />
    )
  }
  return (
    <BrowserRouter>
    <Header />



    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contacts" element={<Contact />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/news" element={<News />}/>
      {/* <Route path="/appointment" element={<Appointment />}/> */}
    </Routes>



    <Footer />




    </BrowserRouter>
  )
}

export default App



