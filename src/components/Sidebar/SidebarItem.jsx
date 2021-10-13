import React from 'react';

function SidebarItem({ icon, text }) {
    return (
        <>
            <li className="sidebar__list-item">
                <a href="/" className="sidebar__list-link">
                    <span className="sidebar__list-icon">{icon}</span>
                    {text}
                </a>
            </li>
        </>
    );
}

export default SidebarItem;
