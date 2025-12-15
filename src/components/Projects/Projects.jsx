import React from 'react';
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdDescription } from 'react-icons/md';
import eCommerce from "../../assets/e-commerce.png";
import ticTacToe from "../../assets/TicTacToe.png";


const Projects = () => {
    const projects = [
        {
            id: 1,
            image: eCommerce,
            title: "E-Commerce Platform",
            description : "Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies",
            tech: ["Ract.js", 'TailwindCSS', 'REST API'],
            gitHub: "#",
            live: "#"
        },
         {
            id: 2,
            image: ticTacToe,
            title: "Tic-Tac-Toe Game",
            description : "Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies",
            tech: ["Ract.js", 'Reasponsive CSS'],
            gitHub: "https://github.com/abuammar003/reactTicTacToeApp",
            live: "https://tic-tac-toe-app-zeta-six.vercel.app/"
        },
         {
            id: 3,
            image: "https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg",
            title: "E-Commerce Platform",
            description : "Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies",
            tech: ["Ract.js", 'TailwindCSS', 'REST API'],
            gitHub: "#",
            live: "#"
        },
         {
            id: 4,
            image: "https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg",
            title: "E-Commerce Platform",
            description : "Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies",
            tech: ["Ract.js", 'TailwindCSS', 'REST API'],
            gitHub: "#",
            live: "#"
        },

    ]

  return (
    <div className='prjct_main' id='projects'>

        <div className="prjct_heading">
            <h1>Featured Projects</h1>
            <p>Showcasing my technical journey and practical implementation of web development concepts </p>
        </div>

        <div className="prjct_container">

            {projects.map(item => (
                <div className="prjct_box slide-left" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="prjct_text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="prjct_tech">
                       {item.tech.map((tech, i) => (
                        <span key={i}>{tech}</span>
                       ))}
                    </div>
                    
                    <div className="prjct_link">
                        <a href={item.gitHub}><p><FaGithub /> Code</p></a>
                        <a href={item.live}><p><FaExternalLinkAlt /> Live Demo</p></a>
                    </div>
                </div>
            </div> 
            ))}
            
        </div>

    </div>
  )
}

export default Projects