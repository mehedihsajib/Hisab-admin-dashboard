/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
    AiOutlineCalendar,
    AiOutlineCloudUpload,
    AiOutlineMail,
    AiOutlinePhone,
    // eslint-disable-next-line prettier/prettier
    AiOutlineUser
} from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import UserFormInput from './UserFormInput';
import UserInfoItem from './UserInfoItem';

function EditUser() {
    return (
        <div className="editUser">
            <div className="editUser__header">
                <h3 className="heading__tertiary">Edit User</h3>
                <Link to="/newUser">
                    <button type="button" className="editUser__add-btn">
                        Create
                    </button>
                </Link>
            </div>

            <div className="editUser__content">
                <div className="editUser__left-content">
                    <div className="editUser__profile">
                        <img src={avatar} alt="avatar" className="editUser__profile-avatar" />
                        <div className="editUser__profile-details">
                            <h4 className="editUser__profile-name">Ariya Stark</h4>
                            <span className="editUser__profile-title">Software Engineer</span>
                        </div>
                    </div>
                    <div className="editUser__info">
                        <h4 className="editUser__info-title">Account Details</h4>
                        <ul className="editUser__info-items">
                            <UserInfoItem icon={<AiOutlineUser />} text="ariya007" />
                            <UserInfoItem icon={<AiOutlineCalendar />} text="10.12.1999" />
                        </ul>
                        <h4 className="editUser__info-title">Contact Details</h4>
                        <ul className="editUser__info-items">
                            <UserInfoItem icon={<AiOutlinePhone />} text="+8801777 090 833" />
                            <UserInfoItem icon={<AiOutlineMail />} text="ariya@gmail.com" />
                            <UserInfoItem icon={<FaMapMarkerAlt />} text="Dhaka, BD" />
                        </ul>
                    </div>
                </div>
                <div className="editUser__right-content">
                    <form className="editUser__form">
                        <UserFormInput placeholder="Username" />
                        <UserFormInput placeholder="Full Name" />
                        <UserFormInput placeholder="Email" />
                        <UserFormInput placeholder="Phone" />
                        <UserFormInput placeholder="Address" />
                    </form>

                    <div className="editUser__upload">
                        <img src={avatar} alt="avatar" className="editUser__upload-img" />
                        <label htmlFor="file">
                            <AiOutlineCloudUpload className="editUser__upload-icon" />
                            <input style={{ display: 'none' }} type="file" id="file" />
                        </label>
                    </div>
                    <div className="editUser__form-update">
                        <button type="button" className="editUser__form-btn">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;
