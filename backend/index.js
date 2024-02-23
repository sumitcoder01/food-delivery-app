require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
//Connect To MongoDB
try {
    connectToMongo();
    console.log("Connect to Database  Successfully");
} catch (error) {
    console.error(error.message);
}


//Creating Node APP at Given Port(default 8000) 
const app = express();
const port = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());



//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/food', require('./routes/food'));
app.use('/api/order', require('./routes/order'));

//Listen App At port 5000
app.listen(port, () => {
    console.log(`FoodiesRice backend listening at ${port}`);
})