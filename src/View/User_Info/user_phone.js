import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the styles for react-phone-number-input

const UserPhone = ({ title, value, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userPhone, setUserPhone] = useState(''); // Use userPhone state instead of userName
  const [editedUserPhone, setEditedUserPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (value, metadata) => {
    setEditedUserPhone(value);
    setIsValid(metadata && metadata.isValidNumber);
  };
  
  useEffect(() => {
    // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
    if (value && !userPhone) {
      setUserPhone(value);
      setEditedUserPhone(value);
    }
  }, [value, userPhone]);
  const handleSaveClick = () => {
      setIsEditing(false);
      setUserPhone(editedUserPhone);
      onUpdate({ infoUser:{ phone: editedUserPhone }});
      // Perform other actions needed to save user information, e.g., send data to the server.
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUserPhone(userPhone);
  };

  return (
    <div className='user-name row'>
      <div className='col-2 text-1'>
        <p>{title}</p>
      </div>
      <div className='col-7 text-2'>
        {isEditing ? (
          <>
            <PhoneInput
              value={editedUserPhone}
              onChange={handleInputChange}
              defaultCountry="VN"
            />
            {!isValid && <p style={{ color: 'red' }}>Invalid phone number</p>}
          </>
        ) : (
          <p>{userPhone}</p>
        )}
      </div>
      <div className='col-2 text-3'>
        {isEditing ? (
          <>
            <div className='text-4'>
              <button className='but-2' type='button' onClick={handleCancelClick}>
                Hủy
              </button>
              <button className='but-1' type='button' onClick={handleSaveClick}>
                Lưu
              </button>
            </div>
          </>
        ) : (
          <button type='button' onClick={handleEditClick}>
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPhone;
