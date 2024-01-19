import axios from 'axios';

export const getUserData = async () => {
    try {
        // Lấy accessToken từ localStorage
        const accessToken = localStorage.getItem('accessToken');

        // Gọi API để lấy thông tin người dùng
        const response = await axios.get('http://localhost:8000/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // Trả về dữ liệu người dùng
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        // Trả về null hoặc giá trị mặc định khi có lỗi
        return null;
    }
};
