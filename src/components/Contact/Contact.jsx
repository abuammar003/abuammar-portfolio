import React, { useState } from 'react';
import "./Contact.css";
import { IoCall, IoLocationSharp  } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleClick() {

        if(!name || !email || !message) {
            alert("All fields are Requires!");
        }

            alert("Thanks for Contact");
            setName("");
            setEmail("");
            setMessage("");
    }

    function handleChange(e) {
        setName(e.target.value);
        setEmail(e.target.value);
        setMessage(e.target.value)
    }

  return (
    <div className='contact' id='contact'>

        <div className='cont_heading'>
            <h1>Get In Touch</h1>
            <p>I am excited to start my professional journey. Let's connect and explore opportunities together!</p>
        </div>

        <div className="cont_container">

        <div className="cont_form">
            <h2>Send me a message</h2>
            <div className="input">
                <h5>Name</h5>
                <input type='text' placeholder='Your Full Name' onChange={handleChange}/>
            </div>
            <div className="input">
                <h5>Email</h5>
                <input type='text' placeholder='Your Email' onChange={handleChange}/>
            </div>
             <div className="input">
                <h5>Subject</h5>
                <input type='text' placeholder='Subject' onChange={handleChange}/>
            </div>
             <div className="input">
                <h5>Message</h5>
                <textarea type='text' placeholder='Enter a Message...'  className='msg' onChange={handleChange}/>
            </div>
            <button className='contform_Btn' onClick={handleClick}>Send a Message</button>
        </div>

        <div className="cont_information">

            <div className="cont_info">
                <h2>Contact  Information</h2>
                <div className="info_Boxes">
                    <div className="info_Box">
                        <span className='icon'> <IoCall className='code_icon'/> </span>
                        <div className="box_text">
                            <h3>Phone</h3>
                            <p>Available for call/SMS</p>
                        </div>
                    </div>

                     <div className="info_Box">
                            <span className='icon'> <MdEmail className='code_icon'/> </span>
                            <div className="box_text">
                            <h3>Email</h3>
                            <p>ammarshah1252@gmail.com</p>
                        </div>
                     </div>

                    <div className="info_Box">
                        <span className='icon'> <IoLocationSharp  className='code_icon'/> </span>
                        <div className="box_text">
                            <h3>Location</h3>
                            <p>Open for OnSite/Remote Opportunities</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="cont_links">
                <h2>Follow Me</h2>
                <div className="link_Btns">
                    <div className="link_Btn">
                        <a href="https://github.com/abuammar003">
                            <button> <FaGithub className='icon' /> Github </button>
                        </a>
                        <a href="https://www.linkedin.com/in/ammar-shah-252448284/">
                            <button> <FaLinkedinIn className='icon' /> LinkedIn</button>
                        </a>
                    </div>
                    <div className="link_Btn">
                        <a href='https://x.com/Ammarshah1252'>
                        <button> <FaTwitter className='icon' /> Twitter</button>
                        </a>
                        <a href='https://www.instagram.com/abu_ammar_003/'>
                        <button> <FaInstagram className='icon' /> Instagram</button>
                        </a>
                    </div>

                </div>
            </div>

        </div>

        </div>

    </div>
  )
}

export default Contact