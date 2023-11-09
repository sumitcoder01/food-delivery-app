require('dotenv').config({ path: '../config.env' });
const express = require('express');
const FoodItem = require("../models/FoodItem");
const FoodCategory = require("../models/FoodCategory");
const router = express.Router();


//ROUTE 1:Get All the Foods using: GET "/api/food/fetchfoods".(Login Required but No use Of MiddleWare)
router.get('/fetchfoods', async (req, res) => {
  try {
    const foodItem = await FoodItem.find({});
    const foodCategory = await FoodCategory.find({});
    res.status(200).json({ success: true, food: [foodItem, foodCategory] });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ success: false, error: "Internal Server Error!" });
  }
});

// Admin Routes---
//ROUTE 2:Add food Item using: PUT "/api/food/addfood".(Login Required but No use Of MiddleWare)
router.put('/addfood', async (req, res) => {
  try {
    const foodCategory = await FoodCategory.find({ CategoryName: req.body.CategoryName });
    if (!foodCategory) {
      await FoodCategory.create({ CategoryName: req.body.CategoryName });
    }
    const newFood= await FoodItem.create({ name: req.body.name, CategoryName: req.body.CategoryName, options: req.body.options, img: req.body.img, description: req.body.description });
    res.status(200).json({ success: true, message: "Data Updated Successfully",id:newFood._id });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ success: false, error: "Internal Server Error!" });
  }
});

//ROUTE 3:Add food category using: PUT "/api/food/addfoodcategory".(Login Required but No use Of MiddleWare)
router.put('/addfoodcategory', async (req, res) => {
  try {
    const foodCategory = await FoodCategory.findOne({ CategoryName: req.body.CategoryName });
    if (!foodCategory) {
     const newCategory= await FoodCategory.create({ CategoryName: req.body.CategoryName });
      res.status(200).json({ success: true, message: "Data Updated Successfully",id:newCategory._id });
    }
    else {
      res.status(200).json({ success: true, message: "Data already Exits" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ success: false, error: "Internal Server Error!" });
  }
});

//ROUTE 4:Update food item using: POST "/api/food/updatefooditem/:id".(Login Required but No use Of MiddleWare)
router.post('/updatefooditem/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (foodItem) {
      const updatedData = { name: req.body.name, CategoryName: req.body.CategoryName, options: req.body.options, img: req.body.img, description: req.body.description }
      if (req.body.CategoryName !== foodItem.CategoryName) {
        const foodCategory = await FoodCategory.find({ CategoryName: req.body.CategoryName });
        if (!foodCategory) await FoodCategory.create({ CategoryName: req.body.CategoryName });
      }
      const updatedItem = await FoodItem.findByIdAndUpdate(req.params.id, updatedData, { new: true });
      if (updatedItem) {
        console.log("Data is updated Successfully");
        res.status(200).json({ success: true, message: "Data Updated Successfully" });
      } else {
        res.status(401).json({ success: false, error: "Internal Server Error!" });
      }
    } else res.status(401).json({ success: false, error: "Data is not present first add the data!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error!" });
  }
});
//ROUTE 5:Update food Category using: POST "/api/food/updatefoodCategory/:id".(Login Required but No use Of MiddleWare)
router.post('/updatefoodCategory/:id', async (req, res) => {
  try {
    const foodCategory = await FoodCategory.findById(req.params.id);
    if (foodCategory) {
      await FoodItem.updateMany(
        { CategoryName: foodCategory.CategoryName },
        { $set: { CategoryName: req.body.CategoryName } }
      );
      const updatedItem = await FoodCategory.findByIdAndUpdate(req.params.id, { CategoryName: req.body.CategoryName }, { new: true });
      if (updatedItem) {
        console.log("Data Updated Successfully");
        res.status(200).json({ success: true, message: "Data Updated Successfully" });
      } else {
        res.status(404).json({ success: false, error: "Food category not found" });
      }

    } else res.status(401).json({ success: false, error: "Data is not present first add the data!" });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ success: false, error: "Internal Server Error!" });
  }
});
//ROUTE 6:Delete food item using: DELETE "/api/food/deletefoodItem/:id".(Login Required but No use Of MiddleWare)
router.delete('/deletefoodItem/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (foodItem) {
      console.log('Deleted food item:', foodItem.name);
      res.status(200).json({ success: true, message: 'Food item deleted successfully' });
    } else {
      res.status(404).json({ success: false, error: 'Food item not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

//ROUTE 7:Delete food item using: DELETE "/api/food/deltefoodcategory/:id".(Login Required but No use Of MiddleWare)
router.delete('/deletefoodcategory/:id', async (req, res) => {
  try {
    const foodcategory = await FoodCategory.findByIdAndDelete(req.params.id);
    if (foodcategory) {
      console.log('Deleted food Category:', foodcategory.CategoryName);
      await FoodItem.deleteMany({ CategoryName: foodcategory.CategoryName });
      res.status(200).json({ success: true, message: 'Food Category deleted successfully' });
    } else {
      res.status(404).json({ success: false, error: 'Food Category not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;

