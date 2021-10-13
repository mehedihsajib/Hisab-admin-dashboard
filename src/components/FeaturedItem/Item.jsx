import React from 'react';

function Item({ title, dollar, rate, icon, iconClass, text }) {
    return (
        <div className="featured__item">
            <h3 className="heading__small featured__item-title">{title}</h3>
            <div className="featured__item-money">
                <span className="featured__item-money--dollar">{dollar}</span>
                <span className="featured__item-money--rate">{rate}</span>
                <span className={iconClass}>{icon}</span>
            </div>
            <span className="featured__item-text">{text}</span>
        </div>
    );
}

export default Item;
