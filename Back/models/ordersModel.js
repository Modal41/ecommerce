const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    orderUserInfo:{
        type:Object,
        required:true
    },
    orderCartInfo:{
        type:Array,
        required:true
    },
    orderStatus:{
        type:String,
        required:true,
        default:"Hazırlanıyor"
    }
})

const ordersModel = mongoose.model('orders',ordersSchema)

module.exports = ordersModel