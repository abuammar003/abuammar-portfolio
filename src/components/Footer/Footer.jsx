import React from 'react';
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {

  return (

    <div className='footer'>

        <div className="ftr_heading">
            <h1>Abu Ammar</h1>
            <h3>Full-Stack Web Developer | Computer Science Graduate</h3>
        </div>
        <div className="ftr_icons">
            <a href='https://github.com/abuammar003'><FaGithub className='icon'/></a>
            <a href='https://www.linkedin.com/in/ammar-shah-252448284/'><FaLinkedinIn className='icon'/></a>
            <a href='https://x.com/Ammarshah1252'><FaTwitter className='icon'/></a>
        </div>
        <p>Tech Stack I'm Proficient in:</p>
        <div className="ftr_stack">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
        </div>

        <div className="ftr_contact">
          <p>Email: <a href="mailto:ammarshah1252@gmail.com">ammarshah1252@gmail.com</a></p>
        </div>

        <div className="ftr_bottom">
          <p>© {new Date().getFullYear()} Ammar Shah. All rights reserved.</p>
          <p>Built with ❤️ using React.js</p>
        </div>

    </div>

  )
}

export default Footer