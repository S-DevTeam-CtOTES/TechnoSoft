import React from 'react'
import Main from '../components/Lending/Main/Main'
import AboutUs from '../components/Lending/AboutUs/AboutUs'
import Teem from '../components/Lending/Teem/Teem'
import Works from '../components/Lending/Works/Works'

const MainPage = () => {
  return (
    <div className='MainPage'>
      <Main/>
      <AboutUs/>
      <Teem/>
      <Works/>
    </div>
  )
}

export default MainPage