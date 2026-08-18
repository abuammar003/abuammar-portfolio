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
            id: 2,
            image: amura_ai,
            title: "Amura.ai - AI-Powered Chat Application",
            description : "Amura.ai is a modern AI chat application designed to deliver intelligent and real-time conversations. Built with React.js, Tailwind CSS, and the Groq API, it features a responsive UI, chat history management, and smooth message interactions for an intuitive user experience.",
            tech: ["Ract.js", 'GROQ API', 'Responsive Design', "State Management"],
            gitHub: "https://github.com/abuammar003/amura.ai",
            live: "https://amura-ai.netlify.app/"
        },{
            id: 1,
            image: movieradar,
            title: "Movies Information Website",
            description : "A responsive movie information website that allows users to search, explore, and view detailed data about movies including ratings, genres, and release dates using real-time API integration.",
            tech: ["React.js", 'REST API', "Responsive CSS"],
            gitHub: "https://github.com/abuammar003/MovieRadar",
            live: "https://movieradar-info.vercel.app/"
        },
        {
            id: 3, 
            image: bazaar, 
            title: "Bazaar - E-Commerce Platform",
            description : "React-based e-commerce application with a responsive Tailwind CSS UI and dynamic product rendering via REST API integration. Focused on performance, scalability, and clean component architecture.",
            tech: ["React.js", 'TailwindCSS', 'REST API', 'Responsive Design'],
            gitHub: "https://github.com/abuammar003/e-commerce.app",
            live: "https://bazaar-store.netlify.app/"
        },
         {
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