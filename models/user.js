const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    infoUser: {
        avatar : {
            type: String,
        },
        username: {
            type: String,
        },
        phone: {
            type: String,
        },
        dateofbirth: {
            type: Date,
        },
        sex: {
            type: String,   
        },      
        address: {
            type: String,
        }  
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
          },
        status:{
            type:Boolean,
            default: false
        }
    }],
    role: {
        type: String,
        enum: ['user', 'admin', 'rent'], // Định nghĩa các giá trị hợp lệ cho phần quyền truy cập
        default: 'user' // Phần quyền mặc định khi tạo người dùng mới
    }
})


const User = mongoose.model('User', userSchema);

module.exports = {User};