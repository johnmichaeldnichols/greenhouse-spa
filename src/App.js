import { Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/navbar';
import About from './pages/about';
import Services from './pages/services';
import Store from './pages/store';
import Contact from './pages/contact';
import Landing from "./pages/landing";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
