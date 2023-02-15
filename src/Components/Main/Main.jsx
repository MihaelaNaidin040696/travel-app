import React from 'react';
import './main.scss';
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi";

const Main = () => {
    const data = [
        {
            id: 1,
            imgSrc: img,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
        },

        {
            id: 2,
            imgSrc: img2,
            destTitle: 'Machu Picchu',
            location: 'Peru',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
        },

        {
            id: 3,
            imgSrc: img3,
            destTitle: 'Bali Island',
            location: 'Indonesia',
            grade: 'CULTURAL RELAX',
            fees: '$500',
            description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
        },

        {
            id: 4,
            imgSrc: img4,
            destTitle: 'Angkor Wat',
            location: 'Cambodia',
            grade: 'CULTURAL RELAX',
            fees: '$790',
            description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
        },

        {
            id: 5,
            imgSrc: img5,
            destTitle: 'Cinque Terre',
            location: 'Italy',
            grade: 'CULTURAL RELAX',
            fees: '$840',
            description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
        }
    ];


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent flex-wrap">
                {
                    data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id} className='singleDestination'>
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <div>
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS
                                        <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Main;