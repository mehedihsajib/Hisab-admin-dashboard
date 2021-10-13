import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo.png';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar__content ">
            <div className="navbar__content-left">
                <a href="/" className="logo">
                    <img src={logo} alt="lolog" />
                </a>
            </div>
            <div className="navbar__content-right">
                <div className="icon__wrapper">
                    <IoMdNotificationsOutline className="icon" />
                    <div className="icon__badge">1</div>
                </div>
                <div className="icon__wrapper">
                    <TiMessages className="icon" />
                    <div className="icon__badge">1</div>
                </div>
                <div className="icon__wrapper">
                    <AiOutlineSetting className="icon" />
                </div>
                <a href="/" className="navbar__avatar">
                    <img src={avatar} alt="avatar" />
                </a>
            </div>
        </div>
    </nav>
);

export default Navbar;
