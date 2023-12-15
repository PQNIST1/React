import React, { useState } from 'react';

const UserDate = ({ title, value }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [birthDate, setBirthDate] = useState(value); // Khởi tạo giá trị mặc định là ngày hiện tại

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Thực hiện các hành động cần thiết để lưu thông tin người dùng, chẳng hạn gửi dữ liệu lên server.
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Đặt giá trị chỉnh sửa về giá trị hiện tại để hủy bỏ thay đổi
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
              type='date'
              value={birthDate}
              onChange={handleBirthDateChange}
            />
          </>
        ) : (
          <p>{birthDate}</p>
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

export default UserDate;
