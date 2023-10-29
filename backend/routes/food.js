const express = require('express');
const FoodItem = require("../models/FoodItem");
const FoodCategory=require("../models/FoodCategory");
const router = express.Router();

//ROUTE 1:Get All the Foods using: GET "/api/auth/fetchfoods".(Login Required but No use Of MiddleWare)
router.get('/fetchfoods',async (req, res) => {
    try {
      const foodItem = await FoodItem.find({});
      const foodCategory = await FoodCategory.find({});
      res.status(200).json({success:true,food:[foodItem,foodCategory]});
    } catch (error) {
      console.error(error.message);
      res.status(401).json({success:false,error:"Internal Server Error!"});
    }
  });
   // Admin accessible Routes are remaining
  module.exports = router;


