import React, { useState,useEffect } from 'react';

const UserEmail = ({ title, value, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const [editedUserName, setEditedUserName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
    if (value && !userName) {
      setUserName(value);
      setEditedUserName(value);
    }
  }, [value, userName]);
  const handleInputChange = (e) => {
    validateEmail(editedUserName);
    setEditedUserName(e.target.value);
  };

  const handleSaveClick = () => {
    // Validate the email when saving
    validateEmail(editedUserName);

    if (isValid) {
      setIsEditing(false);
      setUserName(editedUserName);
      onUpdate({ email: editedUserName });
      // Perform other actions needed to save user information, e.g., send data to the server.
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUserName(userName);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  return (
    <div className='user-name row'>
      <div className='col-2 text-1'>
        <p>{title}</p>
      </div>
      <div className='col-7 text-2'>
        {isEditing ? (
          <>
            <input
              type='email'
              value={editedUserName}
              onChange={handleInputChange}
            />
            {!isValid && <p style={{ color: 'red' }}>Invalid email address</p>}
          </>
        ) : (
          <p>{userName}</p>
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

export default UserEmail;
