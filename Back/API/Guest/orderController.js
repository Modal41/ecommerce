const express = require('express');
const router = express.Router()
const ordersModel   = require('../../models/ordersModel')


router.post("/newOrder",async(req,res)=>{
    try{
        const formData = req.body.formData
        const cart = req.body.items
        
        const newOrder = new ordersModel()
        newOrder.orderUserInfo = formData
        newOrder.orderCartInfo = cart
        await newOrder.save().then(e=>{
            res.json({success:true})
        }).catch(e=>{res.json({success:false,error:e})})
    }catch(e){console.log(e)}
    
})

router.post("/getOrders",async (req,res)=>{
    try{
        const getOrders = await ordersModel.find({})
        res.json(getOrders)
    }catch(e){
        console.log(e)
    }
})

router.post("/getOrderDetail",async (req,res)=>{
    try{
        const id = req.body.id
        const getOrder = await ordersModel.findById(id)
        res.json(getOrder)
    }catch(e){ 
        console.log(e)
        res.json({sucess:false,error:e})
    }
})

module.exports = router