/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NewUserItem from './NewUserItem';

function NewUser() {
    return (
        <div className="newUser">
            <h3 className="heading__tertiary">New User</h3>
            <form className="newUser__form">
                <NewUserItem labeFor="username" label="User Name" placeholder="john007" />
                <NewUserItem label="Email" placeholder="john@gmail.com" labeFor="email" />
                <NewUserItem labeFor="phone" label="Phone" placeholder="+8801777 090833" />
                <NewUserItem labeFor="name" label="Full Name" placeholder="John Snow" />
                <NewUserItem
                    type="password"
                    label="password"
                    labeFor="password"
                    placeholder="password"
                />
                <NewUserItem labeFor="address" label="Address" placeholder="Dhaka, Bangladesh" />
                <div className="newUser__item">
                    <label htmlFor="name">Gender</label>
                    <div className="newUser__gender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            className="newUser__input"
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="felmale"
                            value="felmale"
                            className="newUser__input"
                        />
                        <label htmlFor="felame">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="others"
                            value="others"
                            className="newUser__input"
                        />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>
                <div className="newUser__form-submit">
                    <button type="button" className="newUser__btn">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewUser;
