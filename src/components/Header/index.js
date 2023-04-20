import React from 'react';
import "./style.scss"
import {BsSearch} from "react-icons/bs";
import {RiShoppingBagLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title">
                        <NavLink to={"/bookShop"}>
                            Bookshop
                        </NavLink>
                        <NavLink to={"/genres"}>
                            Categories
                        </NavLink>
                        <NavLink to={"/recent"}>
                            Recent
                        </NavLink>
                        <NavLink to={"/books"}>
                            Books
                        </NavLink>
                        <NavLink to={"/aboutUs"}>
                            About Us
                        </NavLink>

                    </div>
                    <div className="header--search">

                        <BsSearch className="header--search__first"/>
                        <RiShoppingBagLine className="header--search__bag"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;