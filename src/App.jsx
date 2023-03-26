import React from 'react'
import {
  Navbar,
  HeroBan,
  Footer,
  Content,
  Popular,
  Why,
  Newslet
} from './components/index'
import { ToastContainer } from 'react-toastify'
import { hero, navbarlinks, contentlinks, popularlinks } from './data/travelsdata'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar navbarlinks={navbarlinks} />
      <HeroBan hero={hero} />
      <Content contentlinks={contentlinks} />
      <Popular popularlinks={popularlinks} />
      <Why />
      <Newslet/>
      <Footer />
    </>
  )
}

export default App