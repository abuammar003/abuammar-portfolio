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
            <h3>B.Sc. Computer Science graduate focused on building responsive, user-friendly web applications with modern frontend technologies.</h3>
            <div className="hmtext_btn">
                <button><a href='../../assets/Abu_Ammar_Akber_Shah_Resume.pdf' download='Abu_Ammar_Akber_Shah_Resume.pdf'> Download CV </a></button>
                <h4> <a href='#contact'>Get in Touch</a></h4>
            </div>
            <div className="hmtext_icons">
                <a href='https://github.com/abuammar003'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/abu-ammar-252448284/'><FaLinkedinIn /></a>
                {/*<a href='https://x.com/Ammarshah1252'><FaTwitter /></a> */}
                <a href='https://www.instagram.com/abuammar_03/'><FaInstagram /></a>
            </div>
        </div>
        <div className='home_img'>
            <FaCode className='hmimg_icon'/>
            <img src={portfolioImage} alt='Ammar_Image'/>
        </div>
    </div>

  )
}

export default Home;