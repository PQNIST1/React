const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
   name: {
    type: String,
   },
   image: {
    type: [String],
    required: true
   },
   title: {
    type: String
   },
   detail: {
    type: String
   },
   address: {
    province: {
        type: String
    },
    s_addrees:{
        type: String
    }
   },
   rank:{
    type: Number,
    default: 0
   },
   extension: [{
        icon: {
            type: String
        },
        ex: {
            type: String
        }
   }],
   rom: [{
    types: {
        type: String
    },
    capacity: {
        type: Number,
        default: 0
    },
    detail: {
        type: String
    },
    price: {
        type: Number
    }
   }]

})