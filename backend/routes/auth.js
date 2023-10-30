require('dotenv').config({ path: '../config.env' });
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET;
const fetchUser = require('../middlewares/fetchUser');
const fetchAdmin = require('../middlewares/fetchAdmin');


//ROUTE 1:Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser", [
  body("name", "Name must be atleast 5 characters").isLength({ min: 5 }),
  body("email", "Enter Valid Email").isEmail(),
  body("password", "Password must be atleast 5 characters").isLength({
    min: 5,
  }),
],
  async (req, res) => {
    //If There are returns bad Request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    //check weather the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ success: false, error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a  new User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user._id
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

//ROUTE 2:Authenticate a User using: POST "/api/auth/login". No login required
router.post("/login", [
  body("email", "Enter Valid Email").isEmail(),
  body("password", "Password Cannot be blank").exists(),
],
  async (req, res) => {
    //If There are returns bad Request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user._id
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, authToken });


    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);
//ROUTE 3:Get loggedin  User Details using: POST "/api/auth/getuser". login required
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json({ success: true, user });
  }
  catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
);
//ROUTE 4:Get Admin Control using: POST "/api/auth/adminaccess". login required
router.post("/adminaccess", fetchAdmin, async (req, res) => {
  try {
    console.log("Admin access is Allowed");
    res.json({ success: true, message: "Welcome Admin" });
  }
  catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
);

module.exports = router;
