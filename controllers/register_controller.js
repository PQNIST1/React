const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createUser(req, res, next) {
    const name = req.body.name;
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    try {
        // Kiểm tra xem người dùng có tồn tại hay không
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Băm mật khẩu trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới
        const newUser = {
            name: name,
            email: email,
            password: hashedPassword,
        };

        // Lưu người dùng vào cơ sở dữ liệu
        const createUser = await User.create(newUser);

        if (!createUser) {
            return res.status(500).json({ message: 'Failed to create user' });
        }

        // Tạo accessToken
        const accessToken = jwt.sign({ userId: createUser._id }, 'your-secret-key', { expiresIn: '1h' });

        // Gửi accessToken về cho client
        res.status(201).json({ accessToken,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    createUser
};
