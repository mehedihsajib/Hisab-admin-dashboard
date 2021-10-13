/* eslint-disable react/button-has-type */
import React from 'react';

function LatestTransaction({ avatar, name, date, amount, btnText }) {
    const Button = ({ type }) => <button className={`widget__btn + " " ${type}`}>{type}</button>;
    return (
        <tr className="transaction__table-row">
            <td className="transaction__data-user">
                <img src={avatar} alt="" className="transaction__data-user--avatar" />
                <span className="transaction__data-user--name">{name}</span>
            </td>

            <td className="transaction__data-date">{date}</td>
            <td className="transaction__data-amount">{amount}</td>
            <td className="transaction__data-status">
                <Button type={btnText} />
            </td>
        </tr>
    );
}

export default LatestTransaction;
