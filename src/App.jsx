import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Footer from "./components/Footer"

import * as Sentry from "@sentry/react"
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
