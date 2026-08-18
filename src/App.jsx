import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
          <Navbar />  

               
            < Home />
            < Skills />
          < Projects />
          <About />

            <ToastContainer position='top-center' autoClose={3000} />
            < Contact /> 
   
          
          {/* <BrowserRouter > */}
          {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/About' element={<About />} />

            <Route path='/Contact' element={<Contact />} />
          </Routes> */}
          {/* </BrowserRouter> */}
          
             <Footer />
       </div>
    </>
  )
}

export default App
