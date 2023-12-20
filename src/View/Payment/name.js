import React, { useState } from 'react';

const NameInput = () => {
  const [firstName, setFirstName] = useState('Nguyen');
  const [lastName, setLastName] = useState('Nguyen');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

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
