import axios from 'axios';

// Hàm để thêm id khách sạn vào trường booking của người dùng
const deleteBooking = async (hotelId) => {
  const token = localStorage.getItem('accessToken');

  try {
    const response = await axios.post('http://localhost:8000/delete/hotel', { hotelId }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data.message); // Log thông báo thành công từ server
  } catch (error) {
    console.error('Error delete booking:', error);
  }
};

export default deleteBooking;
