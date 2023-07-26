import { Route, Routes } from 'react-router';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import ContactsPage from '../../pages/ContactsPage';
import MainPage from '../../pages/MainPage';

import './App.scss';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className='App'>
        <Header/>
          <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/Contacts' element={<ContactsPage/>}/>
          </Routes>
        <Footer/>

    </div>
  )
}

export default App
