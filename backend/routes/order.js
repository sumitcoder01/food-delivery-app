const express = require('express');
const Order = require("../models/Order");
const fetchUser = require('../middlewares/fetchUser');

const router = express.Router();

//ROUTE 1:Get All the Orders using: POST "/api/order/fetchorders".(Login Required)
router.post('/fetchorders', fetchUser, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
    res.status(200).json({ success: true, orders: orders });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ success: false, error: "Internal Server Error!" });
  }
});

//ROUTE 2:Create Orders using: POST "/api/order/createorder".(Login Required)
router.post('/createorders', fetchUser, async (req, res) => {
  try {
      const orders = req.body.orders;
      for (const order of orders) {
          await Order.create({ user: req.user.id, name: order.name, quantity: order.quantity, size: order.size, price: order.price });
      }
      res.status(200).json({ success: true, message: "User orders were updated successfully" });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
});



module.exports = router;