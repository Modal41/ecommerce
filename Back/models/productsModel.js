const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    }
})

const productsModel = mongoose.model('products',productsSchema)

module.exports = productsModel