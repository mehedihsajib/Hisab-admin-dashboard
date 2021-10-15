import React from 'react';
import { Link } from 'react-router-dom';

function SidebarItem({ icon, text, link }) {
    return (
        <>
            <li className="sidebar__list-item">
                <Link to={link} className="sidebar__list-link">
                    <span className="sidebar__list-icon">{icon}</span>
                    {text}
                </Link>
            </li>
        </>
    );
}

export default SidebarItem;
