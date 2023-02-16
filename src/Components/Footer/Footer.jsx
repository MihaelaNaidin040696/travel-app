import React from 'react';
import './footer.scss';
import video from '../../Assets/videofooter.mp4';
import {FiChevronRight, FiSend} from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type='video/mp4'/>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address'/>
                        <button className='btn flex' type='submit'>SEND <FiSend className='icon'/></button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className='icon'/>
                                Travel
                            </a>
                        </div>

                        <div className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>

                        <div className="footerSocials">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>
                        </div>

                    </div>
                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>CEVA TEXT AICI </small>
                        <small>COPYRIGHT 2023</small>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Footer;