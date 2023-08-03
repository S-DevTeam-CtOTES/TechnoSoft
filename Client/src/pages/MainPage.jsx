import React from 'react'
import Main from '../components/Lending/Main/Main'
import AboutUs from '../components/Lending/AboutUs/AboutUs'
import Teem from '../components/Lending/Teem/Teem'
import Works from '../components/Lending/Works/Works'
import SideBar from '../components/SideBar/SideBar'
import Footer from '../components/Footer/Footer'
import './MainPage.scss'

const MainPage = () => {
  return (
    <>
      <div className='MainPage'>
          <SideBar/>
          <div className='MainLending'>
            <Main/>
            <AboutUs/>
            <Teem/>
            <Works/>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default MainPage