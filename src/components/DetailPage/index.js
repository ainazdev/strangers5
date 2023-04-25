import React from 'react';
import './index.scss'
import Loshad from '../../img/markeyBook.png'
import {AiOutlineHeart, AiOutlinePlus} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {MdOutlineMinimize} from "react-icons/md";

const DetailPage = () => {
    return (
        <div id="cart">
            <div className="container">
                <div className="cart__wrapper">
                    <div className="cart__img">
                        <img src={Loshad} alt=""/>
                    </div>
                    <div className="cart__title">
                        <div className="cart__title-text">
                            <div className="cart__title-text--icon">
                                <h1>
                                    THE BOY, THE MOLE, THE FOX <br /> AND THE HORSE
                                </h1>
                                <AiOutlineHeart size={"2rem"} className="heartIcon" />
                                <HiOutlineShare size={"2rem"} className="shateIcon" />
                            </div>

                            <div className="by">by Charlie Mackesy</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
                            </p>
                            <div className="dollar">$99</div>
                            <div className="df">
                                <div className="linkcart">
                                    <button><a>Add to Cart </a></button>
                                </div>
                                <h3 className="linkOne"><MdOutlineMinimize className="minus"/>1<AiOutlinePlus className="plus"/></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;