import React from 'react';
import "./About.css";
import { FaBuildingColumns, FaHandHoldingHeart, FaCode } from "react-icons/fa6";

const About = () => {

  return (

    <div className='about_main' id='about'>
        <div className="about_left">

            <h1>About Me</h1>
            <p>I am <b>Abu Ammar</b>, a passionate and dedicated <span className='blueSpan'> Computer Science Graduate </span> with a zeal for creating innovative digital solutions. As a <span className='greenSpan'> Freasher in the Web Development industry</span>, I bring fresh perspectives, enthusiasm, and a strong foundation in technologies to every project.</p>
            <p>Currently puruing my <b> Bachelors in Computer Scence </b> , I have developed a comprehensive skill set in full-stack Web Development. My journey in computer science has equipped me with problem-solving skills and a genuine passion for technology that drives me to continously learn and adapt to new challenges.</p>
            <div className="abtlft_Box">
                <h3>My Development Phollisophy</h3>
                <p>I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. Every project I undertake is an opportunity to demonstrate technical excellence and innovative problem-solving.</p>
                <div className="abtlftBox_educ">
                    <div>
                        <FaBuildingColumns className='eduBox_icon'/>
                        <h4>Bsc Computer Science</h4>
                        <p>Current Student</p>
                    </div>
                    <div>
                        <FaHandHoldingHeart  className='eduBox_icon'/>
                        <h4>Bsc Computer Science</h4>
                        <p>Current Student</p>
                    </div>
                </div>
            </div>

        </div>
    
        <div className="about_right">

            <div className="abt_Box">
                <span className='icon'> <FaCode className='code_icon'/> </span>
                <div>
                    <h2>Clean Code Advocate</h2>
                    <p>Writing well-structured and maintainable codebases</p>
                    <p>Experienced in creating scalable applications with proper code organization, documentation, and best practices.</p>
                </div>
            </div>
             <div className="abt_Box">
                <span className='icon'> <FaCode className='code_icon'/> </span>
                <div>
                    <h2>Clean Code Advocate</h2>
                    <p>Writing well-structured and maintainable codebases</p>
                    <p>Experienced in creating scalable applications with proper code organization, documentation, and best practices.</p>
                </div>
            </div>
             <div className="abt_Box">
                <span className='icon'> <FaCode className='code_icon'/> </span>
                <div>
                    <h2>Clean Code Advocate</h2>
                    <p>Writing well-structured and maintainable codebases</p>
                    <p>Experienced in creating scalable applications with proper code organization, documentation, and best practices.</p>
                </div>
            </div>
             <div className="abt_Box">
                <span className='icon'> <FaCode className='code_icon'/> </span>
                <div>
                    <h2>Clean Code Advocate</h2>
                    <p>Writing well-structured and maintainable codebases</p>
                    <p>Experienced in creating scalable applications with proper code organization, documentation, and best practices.</p>
                </div>
            </div>

        </div>
    </div>
  
)
}

export default About