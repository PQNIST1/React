const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');

async function login(req, res, next) {
    
    const { email, password } = req.body;

    try {
        // Tìm người dùng theo địa chỉ email
        const user = await User.findOne({ email: email.toLowerCase() });

        // Nếu không tìm thấy người dùng hoặc mật khẩu không đúng
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Tạo accessToken với payload chứa userId
        const accessToken = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        // Gửi accessToken về client
        res.json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    login,
};
