import axios from 'axios';

// Hàm để thêm id khách sạn vào trường booking của người dùng
const addBooking = async (hotelId) => {
  const token = localStorage.getItem('accessToken');

  try {
    const response = await axios.post('http://localhost:8000/hotel', { hotelId }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data.message); // Log thông báo thành công từ server
  } catch (error) {
    console.error('Error adding booking:', error);
  }
};

export default addBooking;
