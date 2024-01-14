import React, { useState } from 'react';

const RoomTypeSelector = ({ onRoomTypeChange }) => {
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [roomName, setRoomName] = useState('');

  // Function to handle room type changes
  const handleRoomTypeChange = (event) => {
    const value = event.target.value;
    setSelectedRoomType(value);

    // If a callback function is provided, call it with the selected room type
    if (onRoomTypeChange) {
      onRoomTypeChange(value);
    }
  };

  const handleRoomName = (event) => {
    setRoomName(event.target.value)
  }

  return (
    <div className="room-type-selector">
      <h6>Chọn loại phòng:</h6>
      <select value={selectedRoomType} onChange={handleRoomTypeChange}>
        <option value="">-- Chọn loại phòng --</option>
        <option value="2">Phòng giường Đôi</option>
        <option value="1">Phòng giường đơn</option>
      </select>
      <h6>Tên phòng</h6>
      <input value={roomName}
        onChange={handleRoomName}
      />
    </div>
  );
};

export default RoomTypeSelector;
