import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const UserPhone = ({ title, value }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(value);
    const [editedUserName, setEditedUserName] = useState(value);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (newPhoneNumber) => {
        setEditedUserName(newPhoneNumber);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setUserName(editedUserName);
        // Perform other actions needed to save user information, e.g., send data to the server.
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedUserName(userName);
    };

    return (
        <div className='user-name row'>
            <div className='col-2 text-1'>
                <p>{title}</p>
            </div>
            <div className='col-7 text-2'>
                {isEditing ? (
                    <div className='phone-input'>
                        <PhoneInput
                            value={editedUserName}
                            onChange={handleInputChange}
                            defaultCountry="VN"
                        />
                    </div>

                ) : (
                    <p>{userName}</p>
                )}
            </div>
            <div className='col-2 text-3'>
                {isEditing ? (
                    <div className='text-4'>
                        <button className='but-2' type='button' onClick={handleCancelClick}>Hủy</button>
                        <button className='but-1' type='button' onClick={handleSaveClick}>Lưu</button>
                    </div>
                ) : (
                    <button type='button' onClick={handleEditClick}>Chỉnh sửa</button>
                )}
            </div>
        </div>
    );
};

export default UserPhone;
