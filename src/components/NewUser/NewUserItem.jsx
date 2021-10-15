/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function NewUserItem({ labeFor, label, placeholder, type = 'text' }) {
    return (
        <div className="newUser__item">
            <label htmlFor={labeFor}>{label}</label>
            <input type={type} className="newUser__input" placeholder={placeholder} />
        </div>
    );
}

export default NewUserItem;
