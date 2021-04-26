import React from 'react';
import Logo from '../images/robinhood.svg';
import '../css/Header.css';

function Header() {
    return (
        <div className="header__wrapper">
            {/* Logo */}
            <div className="header__logo">
                <img src={Logo} width={25} />
            </div>
            {/* Search */}
            <div className="header__search">
                <div className="header__searchContainer">
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            {/* Menu */}
            <div className="header__menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
            
        </div>
    )
}

export default Header;
