import React from 'react';
import "./Skills.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGlobe, FaGithub, FaServer, FaDatabase, FaTools, FaMagic } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiExpress, SiSpringsecurity, SiMongodb, SiNetlify, SiPostman } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { MdWeb } from "react-icons/md";



const Skills = () => { 
    const {ref, inView} = useInView({triggerOnce : true, threshold : 0.5});

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    categoryIcon: MdWeb,
    skills: [
      { name: "HTML5", icon: FaHtml5, iconClass: "red_icon" },
      { name: "CSS3", icon: FaCss3Alt, iconClass: "blue_icon" },
      { name: "JavaScript", icon: RiJavascriptFill },
      { name: "React.js", icon: FaReact, iconClass: "blue_icon" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconClass: "blue_icon" },
      { name: "Bootstrap", icon: FaBootstrap, iconClass: "blue_icon" },
    ],
  },

  {
    title: "Backend",
    categoryIcon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs, iconClass: "gren_icon" },
      { name: "Express.js", icon: SiExpress, iconClass: "black_icon" },
      { name: "REST APIs", icon: FaGlobe },
      { name: "Authentication", icon: SiSpringsecurity, iconClass: "blue_icon" },
    ],
  },

  {
    title: "Databases",
    categoryIcon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb, iconClass: "gren_icon" },
      { name: "MySQL", icon: TbBrandMysql, iconClass: "black_icon" },
      { name: "ORM" },
    ],
  },

  {
    title: "Tools & Platforms",
    categoryIcon: FaTools,
    skills: [
      { name: "VSCode", icon: VscVscode, iconClass: "blue_icon" },
      { name: "GitHub", icon: FaGithub, iconClass: "black_icon" },
      { name: "Vercel", icon: IoLogoVercel, iconClass: "black_icon" },
      { name: "Netlify", icon: SiNetlify, iconClass: "blue_icon" },
      { name: "Postman", icon: SiPostman, iconClass: "red_icon" },
      { name: "AI-Assisted Development", icon: FaMagic, iconClass: "black_icon" },
    ],
  },
];


const SKILL_PROFICIENCY = [
  {
    name: "HTML/CSS",
    level: "Advanced",
    rangeClass: "range_blueHTML",
  },
  {
    name: "JavaScript",
    level: "Intermediate/Advanced",
    rangeClass: "range_blueJS",
  },
  {
    name: "React.js",
    level: "Advanced",
    rangeClass: "range_blueRJs",
  },
  {
    name: "Node.js",
    level: "Beginner",
    rangeClass: "range_blueNJs",
  },
  {
    name: "Express.js",
    level: "Beginner",
    rangeClass: "range_blueEJs",
  },
  {
    name: "Database",
    level: "Beginner",
    rangeClass: "range_blueDB",
  },
];
 
  return (
    <div className='skil_main' id='skill'>

        <div className='skil_heading'>
            <h1 className='head-main'>Technical Skills</h1>
            <p>Comprehensive knowledge in modern web technologies and development tools, as a fresh Computer Science graduate</p>
        </div>


        <div className="skil_contnr">
          {SKILL_CATEGORIES.map((category, index) => {
            const CategoryIcon = category.categoryIcon;
        
            return (
              <div className="skil_box" key={index}>
            
                <h3><span className="sklbox_head"><CategoryIcon /></span></h3>
                <h4>{category.title}</h4>
            
                <ul>
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                
                    return (
                      <li key={skillIndex}>
                        {SkillIcon && (
                          <span className={skill.iconClass || ""}>
                            <SkillIcon />
                          </span>
                        )}

                        {skill.name}
                      </li>
                    );
                  })}
                </ul>
              
              </div>
            );
          })}
        </div>


          <h1>Skill Proficiency</h1>
        <div className="skilrng_main" ref={ref}>
           {SKILL_PROFICIENCY.map((skill, index) => (
             <div className="skil_range" key={index}>
               <h2> {skill.name} 
                <span className="skill_range_span"> {skill.level}</span>
               </h2>

               <div className="range_white">
                 <div className={skill.rangeClass}></div>
               </div>
             </div>
           ))}
          </div>
    
    </div>

)
}

export default Skills