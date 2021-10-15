import React from 'react';

function UserFormInput({ placeholder }) {
    return (
        <div className="editUser__form-control">
            <input className="editUser__form-input" type="text" placeholder={placeholder} />
        </div>
    );
}

export default UserFormInput;
