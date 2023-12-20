import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const UserAddress = ({ title, value }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(value);
    const [editedUserName, setEditedUserName] = useState(value);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const selectCountry = (val) => {
        setCountry(val);
        setEditedUserName(`${val}, ${region}`);
    };

    const selectRegion = (val) => {
        setRegion(val);
        setEditedUserName(`${country}, ${val}`);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setEditedUserName(e.target.value);
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
                    <div>
                        <CountryDropdown
                            value={country}
                            onChange={(val) => selectCountry(val)}
                            defaultOptionLabel='Chọn quốc gia của bạn'
                        />
                        <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => selectRegion(val)}
                            defaultOptionLabel='Chọn vùng của bạn'
                        />
                    </div>
                ) : (
                    <p>{userName}</p>
                )}
            </div>
            <div className='col-2 text-3'>
                {isEditing ? (
                    <>
                        <div className='text-4'>
                            <button className='but-2' type='button' onClick={handleCancelClick}>Hủy</button>
                            <button className='but-1' type='button' onClick={handleSaveClick}>Lưu</button>
                        </div>
                    </>
                ) : (
                    <button type='button' onClick={handleEditClick}>Chỉnh sửa</button>
                )}
            </div>
        </div>
    );
};
export default UserAddress;
