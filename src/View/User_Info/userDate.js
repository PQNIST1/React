import axios from 'axios';

const updateUserData = async (userData) => {
    const accessToken = localStorage.getItem('accessToken');
  console.log(userData);
  try {
    const response = await axios.put('http://localhost:8000/user', userData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data.message); // Log thông báo thành công từ server
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export default updateUserData;
