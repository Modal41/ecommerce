const express = require('express');
const router = express.Router()
const categoriesModel = require('../../models/categoriesModel')
const productsModel = require('../../models/productsModel')

router.post("/getCategories",async(req,res)=>{
    try{
        const getCategories = await categoriesModel.find({})
        res.json(getCategories)
    }catch(e){
        console.log(e)
    }
})

router.post("/getProducts",async(req,res)=>{
    try{
        const category = req.body.category
        const products = await productsModel.find({category})
        res.json(products)
    }catch(e){
        console.log(e)
    }
})




module.exports = router