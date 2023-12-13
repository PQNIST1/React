const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    infoUser: {
        type: infoUserSchema  
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    booking: [{
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        },
        createdAt: {
            type: Date,
            default: Date.now
          }   
    }],
    role: {
        type: String,
        enum: ['user', 'admin', 'rent'], // Định nghĩa các giá trị hợp lệ cho phần quyền truy cập
        default: 'user' // Phần quyền mặc định khi tạo người dùng mới
    }
})
const infoUserSchema = new mongoose.Schema({
    avatar : {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    dateofbirth: {
        type: Date
    },
    sex: {
        type: Boolean
    },
    address: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;