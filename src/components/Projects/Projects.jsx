import React from 'react';
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  return (
    <div className='prjct_main' id='projects'>

        <div className="prjct_heading">
            <h1>Featured Projects</h1>
            <p>Showcasing my technical journey and practical implementation of web development concepts </p>
        </div>

        <div className="prjct_container">

            <div className="prjct_box slide-right" >
                <img src='https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg' alt='' />
                <div className="prjct_text">
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies</p>
                    <div className="prjct_tech">
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Express.js</span>
                    </div>
                    <div className="prjct_link">
                        <p><FaGithub /> Code</p>
                        <p><FaExternalLinkAlt /> Live Demo</p>
                    </div>
                </div>
            </div>
            <div className="prjct_box slide-left" >
                <img src='https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg' alt='' />
                <div className="prjct_text">
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies</p>
                    <div className="prjct_tech">
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Express.js</span>
                    </div>
                    <div className="prjct_link">
                        <p><FaGithub /> Code</p>
                        <p><FaExternalLinkAlt /> Live Demo</p>
                    </div>
                </div>
            </div>
            <div className="prjct_box slide-right" >
                <img src='https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg' alt='' />
                <div className="prjct_text">
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies</p>
                    <div className="prjct_tech">
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Express.js</span>
                    </div>
                    <div className="prjct_link">
                        <p><FaGithub /> Code</p>
                        <p><FaExternalLinkAlt /> Live Demo</p>
                    </div>
                </div>
            </div>
            <div className="prjct_box slide-left" >
                <img src='https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg' alt='' />
                <div className="prjct_text">
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies</p>
                    <div className="prjct_tech">
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Express.js</span>
                    </div>
                    <div className="prjct_link">
                        <p><FaGithub /> Code</p>
                        <p><FaExternalLinkAlt /> Live Demo</p>
                    </div>
                </div>
            </div>
            <div className="prjct_box slide-right" >
                <img src='https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg' alt='' />
                <div className="prjct_text">
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies</p>
                    <div className="prjct_tech">
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Express.js</span>
                    </div>
                    <div className="prjct_link">
                        <p><FaGithub /> Code</p>
                        <p><FaExternalLinkAlt /> Live Demo</p>
                    </div>
                </div>
            </div>
            <div className="prjct_box slide-left" >
                <img src='https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg' alt='' />
                <div className="prjct_text">
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution implementing user authentication, product management, and payment integration using modern web technologies</p>
                    <div className="prjct_tech">
                        <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Express.js</span>
                    </div>
                    <div className="prjct_link">
                        <p><FaGithub /> Code</p>
                        <p><FaExternalLinkAlt /> Live Demo</p>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Projects