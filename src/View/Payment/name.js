import React, { useState, useEffect } from 'react';

const NameInput = ({value}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(value);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  useEffect(() => {
    // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
    if (value) {
      setLastName(value);
      setFirstName(value);
    }
  }, [value]);

  return (
    <div className='input-name'>
      <div className="input-l">
        <h6>Họ (Tiếng Anh)</h6>
        <input
          type='text'
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="input-r">
        <h6>Tên (Tiếng Anh)</h6>
        <input
          type='text'
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
    </div>
  );
};

export default NameInput;
