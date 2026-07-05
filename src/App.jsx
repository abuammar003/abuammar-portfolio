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
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
   
          
          {/* <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />

            <ToastContainer position='top-center' autoClose={3000} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </BrowserRouter> */}
          
             <Footer />
       </div>
    </>
  )
}

export default App
