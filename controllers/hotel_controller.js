 const {Hotel} = require('../models/hotel')
const jwt = require('jsonwebtoken');
const {User} = require('../models/user')
async function getHotel (req,res) {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
async function postHotel(req, res) {
  try {
      // Thêm khách sạn vào cơ sở dữ liệu
      const hotel = new Hotel({
          name: req.body.name,
          image: req.body.image,
          title: req.body.title,
          detail: req.body.detail,
          address: req.body.address,
          rank: req.body.rank,
          extension: req.body.extension,
          rom: req.body.rom,
      });

      const newHotel = await hotel.save();

      // Lấy ID của khách sạn sau khi thêm vào
      const hotelId = newHotel._id;

      // Lấy userId từ accessToken (cách lấy tùy thuộc vào cách bạn xác định userId)
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'your-secret-key');
    const userId = decoded.userId;

      // Thêm bản ghi vào mục booking của người dùng
      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'Không tìm thấy người dùng' });
      }

      user.booking.push({ hotel: hotelId });

      // Lưu lại người dùng đã được cập nhật
      await user.save();

      res.status(201).json(newHotel);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
}

 async function getHotelId (req, res)  {
    try {
      const hotel = await Hotel.findById(req.params.id);
      if (!hotel) {
        return res.status(404).json({ message: 'Không tìm thấy khách sạn' });
      }
      res.status(200).json(hotel);
    } catch (error) {
        console.error(error);
        if (error.name === 'CastError') {
          return res.status(400).json({ message: 'ID không hợp lệ' });
        }
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
      }
      
  }

 async function addHotel (req, res)  {
    try {
      // Lấy accessToken từ header
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'your-secret-key');
      const userId = decoded.userId;
  
      // Lấy id khách sạn từ body yêu cầu
      const { hotelId } = req.body;
  
      // Kiểm tra xem người dùng có tồn tại hay không
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng' });
      }
  
      // Thêm id khách sạn vào trường booking của người dùng
      user.booking.push({ hotel: hotelId });
      
      // Lưu lại người dùng đã được cập nhật
      await user.save();
  
      res.status(200).json({ message: 'Id khách sạn đã được thêm vào booking của người dùng' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
  }
  async function deleteHotel(req, res)  {
    try {
      // Lấy accessToken từ header
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'your-secret-key');
      const userId = decoded.userId;
  
      // Lấy id khách sạn từ body yêu cầu
      const { hotelId } = req.body;
  
      // Kiểm tra xem người dùng có tồn tại hay không
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng' });
      }
  
      // Lọc ra các phần tử trong trường booking có id khách sạn khác với id cần xóa
      user.booking = user.booking.filter(booking => booking.hotel.toString() !== hotelId);
  
      // Lưu lại người dùng đã được cập nhật
      await user.save();
  
      res.status(200).json({ message: 'Id khách sạn đã được xóa khỏi booking của người dùng' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
  }
 
  
module.exports = {getHotel,postHotel,getHotelId,addHotel,deleteHotel}