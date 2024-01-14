import React, { useState } from 'react';

export default function Check() {
  const [selectedOption1, setSelectedOption1] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption1(event.target.value === 'true');
  };

  return (
    <>
      <h6>Qúy vị có sở hữu nhiều khách sạn khác nhau. Hoặc là thành viên của một chuỗi hay công công ty quản lý bất động sản nào không?</h6>
      <div className="radio-check-cv">
        <label>
          <input
            type="radio"
            id="trueOption"
            value="true"
            checked={selectedOption1 === true}
            onChange={handleOptionChange}
          />
          Có
        </label>

        <label>
          <input
            type="radio"
            id="falseOption"
            value="false"
            checked={selectedOption1 === false}
            onChange={handleOptionChange}
          />
          Không
        </label>
      </div>
    </>
  );
}
