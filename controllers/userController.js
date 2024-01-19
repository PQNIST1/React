// userController.js
const {User} = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function getUserById(req, res) {
    try {
        // Lấy accessToken từ header của request
        const token = req.headers.authorization.split(' ')[1];
        // Giải mã accessToken để lấy userId
        const decoded = jwt.verify(token, 'your-secret-key');
        const userId = decoded.userId;

        // Tìm người dùng theo userId
        const user = await User.findById(userId).populate('booking.hotel');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Trả về thông tin người dùng
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
async function updateUser(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      // Giải mã accessToken để lấy userId
      const decoded = jwt.verify(token, 'your-secret-key');
      const userId = decoded.userId;
  
      const { name, email, password, infoUser, role } = req.body;
  
      // Kiểm tra xem email đã tồn tại cho người dùng khác chưa
      if (email) {
        const existingUser = await User.findOne({ email: email, _id: { $ne: userId } });
  
        if (existingUser) {
          return res.status(400).json({ message: 'Email đã tồn tại cho người dùng khác' });
        }
      }
  
      let hashedPassword = null;
  
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }
  
      // Kiểm tra xem người dùng có tồn tại hay không
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng' });
      }
  
      // Cập nhật thông tin người dùng
      if (name) {
        user.name = name;
      }
  
      if (email) {
        user.email = email;
      }
  
      if (hashedPassword) {
        user.password = hashedPassword;
      }
  
      if (infoUser) {
        // Cập nhật thông tin người dùng
        if (infoUser.avatar) {
          user.infoUser.avatar = infoUser.avatar;
        }
  
        if (infoUser.username) {
          user.infoUser.username = infoUser.username;
        }
  
        if (infoUser.phone) {
          user.infoUser.phone = infoUser.phone;
        }
  
        if (infoUser.dateofbirth) {
          user.infoUser.dateofbirth = infoUser.dateofbirth;
        }
  
        if (infoUser.sex) {
          user.infoUser.sex = infoUser.sex;
        }
  
        if (infoUser.address) {
          user.infoUser.address = infoUser.address;
        }
      }
  
      if (role) {
        user.role = role;
      }
  
      // Lưu lại người dùng đã được cập nhật
      await user.save();
  
      res.status(200).json({ message: 'Người dùng đã được cập nhật' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
  }

 async function getUserBooking(req, res)  {
  try {
    const users = await User.find().populate('booking.hotel');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
};
const updateBookingStatus = async (req, res) => {
  try {
    const userId = req.body.userId;
    const bookingId = req.body.bookingId;
    const newStatus = req.body.status;

    // Kiểm tra xem user có tồn tại hay không
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    console.log(userId)
    console.log(bookingId)
    console.log(newStatus)
    // Tìm booking trong user.booking
    const bookingIndex = user.booking.findIndex(booking => booking.hotel._id.toString() === bookingId);
    console.log(bookingIndex)
    if (bookingIndex === -1) {
      return res.status(404).json({ message: 'Booking không tồn tại' });
    }

    // Cập nhật trạng thái booking
    user.booking[bookingIndex].status = newStatus;

    // Lưu lại user đã được cập nhật
    await user.save();

    res.status(200).json({ message: 'Cập nhật trạng thái booking thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
}; 
  
module.exports = {
    getUserById, updateUser,getUserBooking,updateBookingStatus
};
