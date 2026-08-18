import React from 'react';
import "./About.css";
import { FaBuildingColumns, FaCode, FaPaintbrush, FaRocket, FaMobileScreen } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
    const aboutBoxes = [
        {
            id:1,
            title: "Clean Code Advocate",
            titleII: "Writing well-structured and maintainable codebases",
            description: "Experienced in creating scalable applications with proper code organization, documentation, and best practices.",
            icon: <FaCode />,
        },
         {
            id:2,
            title: "UI/UX Focus",
            titleII: "User-centered design principles",
            description: "Designing intuitive interfaces with modern CSS frameworks and responsive design techniques for optimal user experience.",
            icon: <FaPaintbrush />,
        },
         {
            id:3,
            title: "Performance Optimized",
            titleII: "Fast-loading and efficient applications",
            description: "Implementing performance best practices, code splitting, lazy loading, and optimized database queries for seamless user experience.",
            icon: <FaRocket />,
        },
         {
            id:4,
            title: "Mobile First",
            titleII: "Responsive design for all devices",
            description: "Creating mobile-responsive applications that provide excellent user experience across all device sizes and screen resolutions.",
            icon: <FaMobileScreen />,
        },
    ]


  return (

    <div className='about_main' id='about'>
        <div className="about_left">

            <h1>About Me</h1> 

            <p>I am <b>Abu Ammar Akber Shah</b>, a <span className='blueSpan'> B.Sc. Computer Science graduate </span> and <span className='blueSpan'> passionate Full-Stack Web Developer </span>  with expertise in  <span className='greenSpan'> React.js, JavaScript, Node.js, Express.js, and MongoDB</span>. I enjoy building responsive, user-friendly, and scalable web applications that deliver seamless digital experiences. </p>

            <p>I have developed projects including <b> AI-powered applications and eCommerce platforms to media streaming and portfolio websites </b>. I am continuously learning new technologies and best practices to create efficient, maintainable, and high-performance solutions.</p>
            <p>My goal is to solve real-world problems, contribute to impactful products, and grow as a software developer while delivering clean code and great user experiences.</p>

            <div className="abtlft_Box">
                <h3>My Development Phollisophy</h3>
                <p>I believe great software combines clean code, thoughtful design, and excellent user experience. I focus on building scalable, maintainable applications while continuously learning and following modern development best practices.</p>

                <div className="abtlftBox_educ">
                    <div className='abtlftBox_eduBox'>
                        <FaBuildingColumns className='eduBox_icon'/>
                        <h4>B.Sc. Computer Science</h4>
                        <p>Completed</p>
                        <p>CGPA: 8.74/10 (A+)</p>
                    </div>
                    <div className='abtlftBox_eduBox'>
                        <FaLaptopCode  className='eduBox_icon'/>
                        <h4>Web Developer</h4>
                        <p>Fresher</p>
                        <p>Frontend | React.js</p>
                    </div>
                </div>
            </div>

        </div>
    
        <div className="about_right">

            {aboutBoxes.map(item => (
                 <div className="abt_Box" key={item.id}>
                <span className='icon'> {item.icon} </span>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.titleII}</p>
                    <p>{item.description}</p>
                </div>
            </div>
            ))}


        </div>
    </div>
  
)
}

export default About