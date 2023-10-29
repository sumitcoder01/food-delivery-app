const mongoose = require('mongoose');
const { Schema } = mongoose;
const FoodItemSchema = new Schema({
    CategoryName: {
        type: String,
        required:true,
    },
    name: {
        type: String,
        required:true,

    },
    img: {
        type: String,
        required:true,
    },
    options: {
        type: Array,
         required:true,
    },
    description: {
        type:String,
        default:"New Item"
    }
});
const FoodItem = mongoose.model('food_item', FoodItemSchema);
module.exports = FoodItem;