import React from 'react';
import './home.scss';
import video from '../../Assets/videoplayback.mp4';
import {GrLocation} from "react-icons/gr";
import {HiFilter} from "react-icons/hi";
import 'aos/dist/aos.css';

const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'/>
            <video src={video} muted autoPlay loop type='video/mp4'/>

            <div className='homeContent container'>
                <div className='textDiv'>
                    <span data-aos='fade-up' className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos='fade-up' className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>

                <div className='cardDiv grid'>
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className='input flex'>
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className='input flex'>
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price"> Max price:</label>
                            <h3 className='total'>$3000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max='3000' min='1000'/>
                        </div>
                    </div>

                    <div className='searchOptions flex'>
                        <HiFilter className='icon'/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Home;