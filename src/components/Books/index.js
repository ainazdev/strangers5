import React from 'react';

const Books = () => {
    return (
        <div>
            
import './style.scss'
import Slider from "react-slick"
import sublte from '../../img/subtleBook.png'
import rules from '../../img/rulesBook.png'
import markey from '../../img/markeyBook.png'
import hevver from '../../img/hovverBook.png'
import harry from '../../img/harryBook.png'
import glob from '../../img/globBook.png'
import BooksPage from "../BooksPage";
import {Link} from "react-router-dom";

const Books = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className="container">
            <div className='books'>
                <div className="books__title">
                    <h1>Books</h1>
                    <Link to="/BooksPage" className='books__view'>View all</Link>
                </div>

                <div className="books__anyBooks">
                    <Slider {...settings}>
                        <div className="">
                            <img src={sublte} alt=""/>
                            <h1>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h1>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="">
                            <img src={rules} alt=""/>
                            <h1>8 RULES OF LOVE</h1>
                            <p>by Jay Shetty</p>
                        </div>
                        <div className="">
                            <img src={glob} alt=""/>
                            <h1>THE CREATIVE ACT</h1>
                            <p>by Rick Rubin with Neil Strauss</p>
                        </div>
                        <div className="">
                            <img src={markey} alt=""/>
                            <h1>THE BOY, THE MOLE, <br/> THE FOX AND THE <br/> HORSE</h1>
                            <p>by Charlie Mackesy</p>
                        </div>
                        <div className="">
                            <img src={harry} alt=""/>
                            <h1>HARRY POTTER</h1>
                            <p>by J.K. Rowling</p>
                        </div>
                        <div className="">
                            <img src={hevver} alt=""/>
                            <h1>IT ENDS WITH US</h1>
                            <p>by Colleen Hoover</p>
                        </div>
                    </Slider>
                </div>


            </div>
        </div>
    );
};

export default Books;