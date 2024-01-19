import React, { useState, useEffect } from 'react';

const UserGender = ({ title, value, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [gender, setGender] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
    if (value && !gender) {
      setGender(value);
    }
  }, [value, gender]);
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onUpdate({ infoUser:{ sex: gender }});
    // Thực hiện các hành động cần thiết để lưu thông tin người dùng, chẳng hạn gửi dữ liệu lên server.
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Không cần phải thay đổi gì khi hủy bỏ chỉnh sửa
  };

  return (
    <div className='user-name row'>
      <div className='col-2 text-1'>
        <p>{title}</p>
      </div>
      <div className='col-7 text-2'>
        {isEditing ? (
          <select value={gender} onChange={handleGenderChange}>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        ) : (
          <p>{gender}</p>
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

export default UserGender;
