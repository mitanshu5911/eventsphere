import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contactus/ContactUs';
import Signin from './components/signin/Signin';

function App() {
  const[isLoggedIn,setStatus]=useState(false);

  function doUpdateStatus(status){
    setStatus(status);
  }
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} doUpdateStatus={doUpdateStatus}></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>

      
    
  )
}

export default App
