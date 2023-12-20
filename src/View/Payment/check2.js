import React, { useState } from 'react';

export default function Check2() {
  const [selectedOption1, setSelectedOption1] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption1(event.target.value === 'true');
  };

  return (
    <>
      <h6>Bạn sắp đi công tác?</h6>
      <div className="radio-check-cv">
        <label>
          <input
            type="radio"
            id="trueOption"
            value="true"
            checked={selectedOption1 === true}
            onChange={handleOptionChange}
          />
          Đúng
        </label>

        <label>
          <input
            type="radio"
            id="falseOption"
            value="false"
            checked={selectedOption1 === false}
            onChange={handleOptionChange}
          />
          Sai
        </label>
      </div>
    </>
  );
}
