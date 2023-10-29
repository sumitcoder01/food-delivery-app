const mongoose = require('mongoose');
const { Schema } = mongoose;
const FoodCategorySchema = new Schema({
    CategoryName: {
        type: String,
        required:true,
    },
});
const FoodCategory = mongoose.model('food_category', FoodCategorySchema);
module.exports = FoodCategory;