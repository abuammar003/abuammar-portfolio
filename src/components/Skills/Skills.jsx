import React from 'react';
import "./Skills.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGlobe, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiExpress, SiSpringsecurity, SiMysql, SiMongodb, SiNetlify, SiPostman } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const {ref, inView} = useInView({triggerOnce : true, threshold : 0.1});

  return (
    <div className='skil_main' id='skill'>

        <div className='skil_heading'>
            <h1 className='head-main'>Technical Skills</h1>
            <p>Comprehensive knowledge in modern web technologies and development tools, as a fresh Computer Science graduate</p>
        </div>

        <div className='skil_contnr'>
            <div className="skil_box">
                <h3><span className='sklbox_head'><FaCode /></span></h3>
                <h4>Front-End</h4>
                <ul>
                    <li><span className='red_icon'><FaHtml5 /></span>HTML5</li>
                    <li><span className='blue_icon'><FaCss3Alt /></span>CSS3</li>
                    <li><span><RiJavascriptFill /></span>JavaScript</li>
                    <li><span className='blue_icon'><FaReact /></span>React.js</li>
                    <li><span className='blue_icon'><SiTailwindcss /></span>Tailwind CSS </li>
                    <li><span className='blue_icon'><FaBootstrap /></span>BootStrap</li>
                </ul>
            </div>
            <div className="skil_box">
                <h3><span className='sklbox_head'><FaCode /></span></h3>
                <h4>Back-End</h4>
                <ul>
                    <li><span className='gren_icon'><FaNodeJs /></span>Node.js</li>
                    <li><span className='black_icon'><SiExpress /></span>Express.js</li>
                    <li><span><FaGlobe /></span>Restful APIs</li>
                    <li><span className='blue_icon'>< SiSpringsecurity /></span>Authentication</li>
                </ul>
            </div>
            <div className="skil_box">
                <h3><span className='sklbox_head'><FaCode /></span></h3>
                <h4>DataBases</h4>
                <ul>
                    <li><span className='blue_icon'><SiMysql /></span>MySQL</li>
                    <li><span className='gren_icon'><SiMongodb /></span>MongoDB</li>
                    <li><span className='black_icon'><AiFillDatabase /></span>Database Design</li>
                    <li>ORM</li>
                </ul>
            </div>
            <div className="skil_box">
                    <h3><span className='sklbox_head'><FaCode /></span></h3>
                    <h4>Tools</h4>
                <ul>
                    <li><span className='blue_icon'><VscVscode /></span>VSCode</li>
                    <li><span className='black_icon'><FaGithub /></span>GitHub</li>
                    <li><span className='black_icon'><IoLogoVercel /></span>Vercel</li>
                    <li><span className='blue_icon'><SiNetlify /></span>Netlify</li>
                    <li><span className='red_icon'><SiPostman /></span>Postman</li>
                </ul>
            </div>
        </div>

            <h1>Skill Proficiency</h1>
        <div className="skilrng_main" ref={ref}>
            <div className="skil_range">
                <h2>HTML/CSS <span>{inView && <CountUp end={95} duration={2} separator=','/>} %
                 {/* 95%  */}
                </span></h2>
                <div className="range_white">
                    <div className="range_blueHTML"></div>
                </div>
            </div>
             <div className="skil_range">
                <h2>JavaScript 
                    <span>{inView && <CountUp end={80} duration={2} separator=','/>}%</span>
                    </h2>
                <div className="range_white">
                    <div className="range_blueJS"></div>
                </div>
            </div>
             <div className="skil_range">
                <h2>React.js 
                    <span>{inView && <CountUp end={85} duration={2} separator=','/>}%</span>
                    </h2>
                <div className="range_white">
                    <div className="range_blueRJs"></div>
                </div>
            </div>
             <div className="skil_range">
                <h2>Node.js 
                    <span>{inView && <CountUp end={75} duration={2} separator=','/>}%</span>
                </h2>
                <div className="range_white">
                    <div className="range_blueNJs"></div>
                </div>
            </div>
             <div className="skil_range">
                <h2>Express.js 
                    <span>{inView && <CountUp end={80} duration={2} separator=','/>}%</span>
                </h2>
                <div className="range_white">
                    <div className="range_blueEJs"></div>
                </div>
            </div>
             <div className="skil_range">
                <h2>DataBase 
                    <span>{inView && <CountUp end={78} duration={2} separator=','/>}%</span>
                </h2>
                <div className="range_white">
                    <div className="range_blueDB"></div>
                </div>
            </div>
        </div>

    </div>
)
}

export default Skills