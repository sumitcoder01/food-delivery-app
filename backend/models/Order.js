const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
      },
    name:{
        type:String,
        required:true,
    },
    qty:{
        type:Number,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    orderDate:{
        type: Date,
        default: Date.now,
    }
});
const Order = mongoose.model('order', OrderSchema);
module.exports = Order;