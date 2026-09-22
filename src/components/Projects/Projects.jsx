import React from 'react';
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdDescription } from 'react-icons/md';
import bazaar from "../../assets/Bazaar-ui-image.png";
import ticTacToe from "../../assets/TicTacToe.png";
import movieradar from "../../assets/MovieRadar.png";
import amura_ai from "../../assets/Amura.ai-ui-image.png";


const Projects = () => {
    const projects = [
        {
            id: 1, 
            image: bazaar, 
            title: "Bazaar - E-Commerce Platform",
            description : "A full-stack e-commerce platform built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Features dynamic product browsing, search and filtering, product details, cart management, responsive UI, and REST API integration with a MongoDB-backed product database. Built with reusable components and a clean frontend-backend architecture.",
            tech: ["React.js", 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Responsive Design'],
            gitHub: "https://github.com/abuammar003/e-commerce.app",
            live: "https://bazaar-store.netlify.app/"
        }, {
            id: 2,
            image: amura_ai,
            title: "Amura.ai – AI Chat Application",
            description : "A modern AI-powered chat application built with React.js and the Groq API, designed for smooth and real-time conversations. Features include chat history, unique conversation management, message interactions, and persistent chat data using local storage.",
            tech: ["React.js", 'Groq API', "State Management", 'Responsive Design', 'Local Storage'],
            gitHub: "https://github.com/abuammar003/amura.ai",
            live: "https://amura-ai.netlify.app/"
        },{
            id: 3,
            image: movieradar,
            title: "MovieRadar – Movie Information Platform",
            description : "A responsive movie discovery platform built with React.js that allows users to search, explore, and view detailed movie information through real-time API integration. Features include trending movies, search, movie details, saved movies, and persistent user preferences using Context API and local storage.",
            tech: ["React.js", 'JavaScript', 'REST API', 'Local Storage', 'Context API', "Responsive CSS"],
            gitHub: "https://github.com/abuammar003/MovieRadar",
            live: "https://movieradar-info.vercel.app/"
        }, {
            id: 4,
            image: ticTacToe,
            title: "Tic-Tac-Toe Game",
            description : "A React-based Tic Tac Toe game featuring User vs User and User vs Computer modes, real-time score tracking, and a clean responsive UI built with custom CSS.",
            tech: ["React.js", 'Reasponsive CSS', 'Game Logic'],
            gitHub: "https://github.com/abuammar003/reactTicTacToeApp",
            live: "https://tic-tac-toe-game-abuammar.vercel.app/"
        }
         

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