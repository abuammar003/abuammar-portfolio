import React from 'react';
import "./Home.css";
import portfolioImage from "../../assets/portfolio_image.png"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home_main" id='home'>

        <div className='home_text'>
            <h1>Hello, I'm <br /> <span className="grad-text"> Abu Ammar </span> </h1>
            <h3>Computer Science Graduate crafting digital solutions with modern technologies, eager to start my professional journey in web development</h3>
            <div className="hmtext_btn">
                <button>Download CV</button>
                <h4> <a href='#contact'>Get in Touch</a></h4>
            </div>
            <div className="hmtext_icons">
                <p><a href='https://github.com/abuammar003'><FaGithub /></a></p>
                <p><a href='https://www.linkedin.com/in/ammar-shah-252448284/'><FaLinkedinIn /></a></p>
                <p><a href='https://x.com/Ammarshah1252'><FaTwitter /></a></p>
                <p><a href='https://www.instagram.com/abu_ammar_003/'><FaInstagram /></a></p>
            </div>
        </div>
        <div className='home_img'>
            <img src={portfolioImage} alt='Ammar_Image'/>
            <FaCode className='hmimg_icon'/>
        </div>
    </div>

  )
}

export default Home;