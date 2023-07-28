import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import Contacts from '../components/Contacts/Contacts'

import './ContactsPage.scss'
import Footer from '../components/Footer/Footer'

const ContactsPage = () => {
  return (
    <div className='ContactsPage'>
      <div className="ContactsPage__wrapper">
        <SideBar/>
        <Contacts/>
      </div>
      <Footer/>
    </div>

  )
}

export default ContactsPage