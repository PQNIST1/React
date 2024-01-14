import React, { useState } from 'react';

const HottelInput = () => {
  const [hotelName, setHotelName] = useState('Hương Bình');
  const [ownerName, setOwnerName] = useState('Nguyen');

  const handleFirstNameChange = (event) => {
    setHotelName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setOwnerName(event.target.value);
  };

  return (
    <div className='input-name'>
      <div className="input-l">
        <h6>Tên chổ nghỉ</h6>
        <input
          type='text'
          value={hotelName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="input-r">
        <h6>Tên người liên hệ</h6>
        <input
          type='text'
          value={ownerName}
          onChange={handleLastNameChange}
        />
      </div>
    </div>
  );
};

export default HottelInput;
