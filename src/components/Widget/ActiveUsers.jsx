import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

function ActiveUsers({ name, avatar, title }) {
    return (
        <>
            <li className="widget__active-item">
                <img src={avatar} alt="" className="widget__active-item--img" />
                <div className="widget__active-item--info">
                    <h4>{name}</h4>
                    <span className="widget__active-item--position">{title}</span>
                </div>
                <button type="button" className="widget__btn">
                    <AiOutlineEye className="icon" />
                    Display
                </button>
            </li>
        </>
    );
}

export default ActiveUsers;
