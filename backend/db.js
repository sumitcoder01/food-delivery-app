require('dotenv').config({path:'./config.env'});
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO;
const connectToMongo = async () => {
    await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports = connectToMongo;