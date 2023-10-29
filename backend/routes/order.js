const express = require('express');
const Order = require("../models/Order");
const fetchUser = require('../middlewares/fetchUser');

const router = express.Router();

//ROUTE 1:Get All the Orders using: GET "/api/order/fetchorders".(Login Required)
router.get('/fetchorders',fetchUser,async (req, res) => {
    try {
      const orders =await Order.find({ user: req.user.id })
      res.status(200).json({success:true,orders:orders});
    } catch (error) {
      console.error(error.message);
      res.status(401).json({success:false,error:"Internal Server Error!"});
    }
  });

//ROUTE 2:Create Orders using: POST "/api/order/createorder".(Login Required)
router.get('/createorders',fetchUser,async (req, res) => {
    try {
        const orders = req.body;
        orders.forEach(async(order) => {
            await new Order.create({ user: req.user.id,name:order.name,qty:order.qty,size:order.size,price:order.price});
        });
      res.status(200).json({success:true,message:"user orders is updated successfully"});
    } catch (error) {
      console.error(error.message);
      res.status(401).json({success:false,error:"Internal Server Error!"});
    }
  });

  module.exports = router;