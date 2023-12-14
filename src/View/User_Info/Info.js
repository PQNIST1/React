import OnlyHeader from '../Only_Header/Only_Header'
import './Info.css'
import React, { useState } from 'react';
const UserInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState('Nguyen Pham'); // Giả sử tên người dùng đã có sẵn
    const [editedUserName, setEditedUserName] = useState(userName);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleInputChange = (e) => {
      setEditedUserName(e.target.value);
    };
  
    const handleSaveClick = () => {
      setIsEditing(false);
      setUserName(editedUserName);
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
          <p>Tên</p>
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

export default function Info() {
    return (
        <>
        <div className="info-container container-fluid">
        <OnlyHeader/>
            <div className="info-content container">
                <div className='user-info row'>
                     <div className='col-10 text p-0'>
                        <h3><span className='font-weight-bolder'>Thông tin cá nhân</span></h3>
                        <p>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
                    </div> 
                    <div className='col-1 avatar p-0'>
                        <button type="button"><img src='https://q-xx.bstatic.com/xdata/images/xphoto/square128/296828436.jpg?k=accd6bfd812eb8dcd6c2449c3720ea5538cb5ac84d20c7cde972329c73d3a003&amp;o='></img></button>
                    </div>
                </div>
               <UserInfo/>
               <UserInfo/>
            </div>
        </div>
    </> 
    )
} 