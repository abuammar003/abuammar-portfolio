import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    function toggleMenu() {
      setShowNav((prev) => !prev);
      return;
    }

  return (
    <div className="nav">
    <div className='nav_main'>
        <h1>Abu Ammar</h1>

        <div className={`nav_links ${showNav ? "show" : ""}`} onClick={() => {setShowNav(false)}}> 
            <ul>
                <li><a href="#home"> Home </a></li>
                <li><a href="#skill"> Skills </a></li>
                <li><a href="#projects"> Projects </a></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
          </div>

            <button className='menuIcon' onClick={toggleMenu}>{ showNav ? <RxCross2 /> : <IoMenu /> }</button>
            
    </div>
    </div>
  )
}

export default Navbar;