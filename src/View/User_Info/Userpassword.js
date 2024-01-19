import React, { useState,useEffect } from 'react';
const UserPassword = ({title, value,  onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(''); // Giả sử tên người dùng đã có sẵn
    const [editedUserName, setEditedUserName] = useState('');

    useEffect(() => {
      // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
      if (value && !userName) {
        setUserName(value);
        setEditedUserName(value);
      }
    }, [value, userName]);
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleInputChange = (e) => {
      setEditedUserName(e.target.value);
    };
  
    const handleSaveClick = () => {
      setIsEditing(false);
      setUserName(editedUserName);
      onUpdate({ password: editedUserName });
      // Thực hiện các hành động cần thiết để lưu thông tin người dùng, chẳng hạn gửi dữ liệu lên server.
    };
  
    const handleCancelClick = () => {
      setIsEditing(false);
      setEditedUserName(userName);
      // Đặt giá trị chỉnh sửa về giá trị hiện tại để hủy bỏ thay đổi
    };
  
    return (
      <div className='user-name row'>
        <div className='col-2 text-1'>
          <p>{title}</p>
        </div>
        <div className='col-7 text-2'>
          {isEditing ? (
            <input
              type='text'
              value={editedUserName}
              onChange={handleInputChange}
            />
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
export default UserPassword