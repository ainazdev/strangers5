import React from 'react';
import './index.scss'
import Loshad from '../../img/markeyBook.png'
import giving from '../../img/subtleBook.png'
import harry from '../../img/harryBook.png'

const DetailBooks = () => {
    return (
        <div id="cartTwo">
            <div className="container">
                <div className="poragraf">
                    <h1>Your cart</h1>
                    <p>
                        Not ready to checkout? <span>Continue Shopping</span>
                    </p>
                </div>
                <div className="global--wrap">
                    <div>
                        <div className="cart__wrapper2">
                            <div className="cart__wrapper--wrap2">
                                <div className="cart__img2">
                                    <img
                                        src={Loshad}
                                        alt=""
                                        style={{ width: "150px", height: "225px" }}
                                    />
                                </div>
                                <div className="cart__title2">
                                    <div className="cart__title-text2">
                                        <div className="cart__title-text--icon2">
                                            <h1>
                                                THE BOY, THE MOLE, THE FOX <br /> AND THE HORSE
                                            </h1>
                                            <h3>Remove</h3>
                                        </div>
                                        <div className="byMackey">by Charlie Mackesy</div>
                                        <h4>Quantity: 1</h4>
                                        <div className="dollar2">$99</div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="hr"></h1>
                        </div>
                        <div className="cart__wrapper2">
                            <div className="cart__wrapper--wrap2">
                                <div className="cart__img2">
                                    <img
                                        src={giving}
                                        alt=""
                                        style={{ width: "150px", height: "225px" }}
                                    />
                                </div>
                                <div className="cart__title2">
                                    <div className="cart__title-text2">
                                        <div className="cart__title-text--icon2">
                                            <h1>
                                                THE SUBTLE ART OF NOT GIVING A<br /> F*CK
                                            </h1>
                                            <h3>Remove</h3>
                                        </div>
                                        <div className="byMackey">by Charlie Mackesy</div>
                                        <h4>Quantity: 1</h4>
                                        <div className="dollar2">$99</div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="hr"></h1>
                        </div>
                        <div className="cart__wrapper2">
                            <div className="cart__wrapper--wrap2">
                                <div className="cart__img2">
                                    <img
                                        src={harry}
                                        alt=""
                                        style={{ width: "150px", height: "225px" }}
                                    />
                                </div>
                                <div className="cart__title2">
                                    <div className="cart__title-text2">
                                        <div className="cart__title-text--icon2">
                                            <h1>HARRY POTTER</h1>
                                            <h3>Remove</h3>
                                        </div>
                                        <div className="byMackey">by Charlie Mackesy</div>
                                        <h4>Quantity: 1</h4>
                                        <div className="dollar2">$99</div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="hr"></h1>
                        </div>
                    </div>

                    <div className="select">
                        <h1>Order Summary</h1>

                        <div className="select--acc">
                            <h3>Shipping</h3>
                            <details>
                                <summary>Select Method</summary>
                            </details>
                        </div>

                        <div className="select--acc">
                            <h3>Payment</h3>
                            <details>
                                <summary>Select Method</summary>
                            </details>
                        </div>
                        <div className="border"></div>
                        <div className="total">
                            <span>Total</span>
                            <span>$188</span>
                        </div>
                        <button className="countbtn">
                            <a>Continue to checkout</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailBooks;