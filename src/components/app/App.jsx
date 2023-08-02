import { Route, Routes } from 'react-router';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import ContactsPage from '../../pages/ContactsPage';
import MainPage from '../../pages/MainPage';

import './App.scss';
import Menu from '../Menu/Menu';
import { useState } from 'react';


function App() {

  const [activeMenu, setActiveMenu] = useState(false)

  

  const items = [
    {value: 'О НАС', href: '#AboutUs'},
    {value: 'КОМАНДА', href: '#Teem'},
    {value: 'РАБОТЫ', href: '#Works'}
  ]

  return (
    <div className='App'>
        <Header setActiveMenu={setActiveMenu} activeMenu={activeMenu}/>
          <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/Contacts' element={<ContactsPage/>}/>
          </Routes>
          <Menu active={activeMenu} setActive={setActiveMenu} items={items}/>
    </div>
  )
}

export default App
