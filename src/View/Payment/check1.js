import React, { useState } from 'react';

export default function Check1() {
  const [selectedOption, setSelectedOption] = useState(null); // Khởi tạo với chuỗi "true"

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value === "true");
  };

  return (
    <>
      <h6>Bạn đặt phòng cho ai?</h6>
      <div className="radio-check">
        <label>
          <input
            type="radio"
            value="true"
            checked={selectedOption === true}
            onChange={handleOptionChange}
          />
          Tôi là khách lưu trú chính
        </label>

        <label>
          <input
            type="radio"
            value="false"
            checked={selectedOption === false}
            onChange={handleOptionChange}
          />
          Đặt phòng này là cho người khác
        </label>
      </div>
    </>
  );
}
