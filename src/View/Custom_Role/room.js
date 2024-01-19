import React, { useEffect, useState } from 'react';

const RoomForm = ({onChange}) => {
    const [rooms, setRooms] = useState([]);
    const [roomInfo, setRoomInfo] = useState({
        detail: '',
        capacity: '',
        price: '',
    });
    useEffect(() => {
        // Use the latest value of rooms when onChange is called
        onChange('rom', rooms);
      }, [rooms]);


    const [editingIndex, setEditingIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRoomInfo((prevRoomInfo) => ({
            ...prevRoomInfo,
            [name]: value,
        }));
    };

    const handleAddRoom = () => {
        // Kiểm tra xem tất cả các trường có giá trị không
        if (!roomInfo.detail || !roomInfo.capacity || !roomInfo.price) {
            alert('Vui lòng nhập đầy đủ thông tin phòng.');
            return;
        }

        if (editingIndex !== null) {
            // Nếu đang ở chế độ sửa, cập nhật thông tin phòng tại vị trí đang sửa
            setRooms((prevRooms) => {
                const updatedRooms = [...prevRooms];
                updatedRooms[editingIndex] = roomInfo;
                return updatedRooms;
            });
            setEditingIndex(null);
        } else {
            // Nếu không, thêm phòng mới vào danh sách
            setRooms((prevRooms) => [...prevRooms, roomInfo]);
        }

        // Sau khi thêm/sửa, đặt thông tin phòng về trạng thái ban đầu
        setRoomInfo({
            detail: '',
            capacity: '',
            price: '',
        });
        onChange('rom',rooms)
    };
    const handleEditRoom = (index) => {
        // Đặt thông tin phòng từ danh sách vào form để sửa
        setRoomInfo(rooms[index]);
        setEditingIndex(index);
    };

    const handleDeleteRoom = (index) => {
        // Xóa phòng khỏi danh sách
        setRooms((prevRooms) => prevRooms.filter((_, i) => i !== index));
        onChange('rom',rooms);
    };
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div className='add-room'>
            <div className='room-l'>
                <h2>Thông Tin Phòng</h2>
                <form>
                    <label>
                        Tên Phòng:
                        <input
                            className='i1'
                            type="text"
                            name="detail"
                            value={roomInfo.detail}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Sức Chứa:
                        <input
                            className='i2'
                            type="text"
                            name="capacity"
                            value={roomInfo.capacity}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Giá(1 đêm):
                        <input
                            className='i3'
                            type="text"
                            name="price"
                            value={roomInfo.price}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button className='b1' type="button" onClick={handleAddRoom}>
                        {editingIndex !== null ? 'Sửa Phòng' : 'Thêm Phòng'}
                    </button>
                </form>
            </div>
            <div className='room-r'>
                <h2>Danh Sách Phòng</h2>
                <ul>
                    {rooms.map((room, index) => (
                        <li key={index}>
                            {room.detail} - Sức Chứa: {room.capacity}, Giá: {formatter.format(room.price)}
                            <button type="button" onClick={() => handleEditRoom(index)}>
                                Sửa
                            </button>
                            <button type="button" onClick={() => handleDeleteRoom(index)}>
                                Xóa
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RoomForm;
