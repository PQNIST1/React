import React, { useState, useEffect } from 'react';

const UserDate = ({ title, value }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date(value)); // Khởi tạo giá trị mặc định từ chuỗi ngày tháng năm

  useEffect(() => {
    // Chuyển đổi giá trị ngày tháng từ chuỗi sang đối tượng Date khi giá trị thay đổi
    setBirthDate(new Date(value));
  }, [value]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBirthDateChange = (e) => {
    // Lấy giá trị từ input ngày tháng (đã được chuyển đổi về đối tượng Date)
    setBirthDate(new Date(e.target.value));
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    // Định dạng lại thành chuỗi "YYYY-MM-DD" để sử dụng trong input type='date'
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
  };
  const formatYear = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    // Định dạng lại thành chuỗi "YYYY-MM-DD" để sử dụng trong input type='date'
    const formattedYear = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    return formattedYear;
  };
  const handleSaveClick = () => {
    setIsEditing(false);

    // Lấy chuỗi ngày tháng đã định dạng
    const formattedDate = formatDate(birthDate);

    // Thực hiện các hành động cần thiết để lưu thông tin người dùng, chẳng hạn gửi dữ liệu lên server.
    console.log('Ngày tháng năm đã định dạng:', formattedDate);
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
          <>
            <input
              type='date'
              value={formatDate(birthDate)} // Hiển thị giá trị đã định dạng trong input
              onChange={handleBirthDateChange}
            />
          </>
        ) : (
          <p>{formatYear(birthDate)}</p>
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

export default UserDate;
