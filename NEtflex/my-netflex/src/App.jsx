import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Components/Header'
import Cards from '../Components/Cards'
import CardSlider from '../Components/slider'
import NetflixAccordion from '../Components/netflixfaq'
import Footer from '../Components/Footer'
import Newslider from '../Components/newslider'
import Eg from '../Components/o'

function App() {

  return (
    <>
     <Header/>
<CardSlider/>
     <Cards/>
     <NetflixAccordion/>
     <Footer/>
<Newslider/>
<Eg/>
    </>
  )
}

export default App
