import React from 'react';

function UserInfoItem({ icon, text }) {
    return (
        <li className="editUser__info-item">
            <span className="editUser__info-icon">{icon}</span>
            {text}
        </li>
    );
}

export default UserInfoItem;
