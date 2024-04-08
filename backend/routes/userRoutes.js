const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { jwtAuthMiddleware, generateToken } = require("../jwt");

//POST route to add a user
router.post("/signup", async (req, res) => {
  try {
    const data = req.body;

    const existingAdmin = await User.findOne({ role: "admin" });

    if (data.role === existingAdmin) {
      return res.status(403).json({
        message:
          "An admin user already exists. Only one admin user is allowed.",
      });
    }
    // Create a new User document using the Mongoose model
    const newUser = new User(data);

    // Save the new user to the database
    const response = await newUser.save();
    console.log("data saved");

    const payload = {
      id: response.id,
    };
    console.log(JSON.stringify(payload));

    // Generate a JWT token for the user
    const token = generateToken(payload);
    console.log("Token is:", token);

    res.status(200).json({ response: response, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    //Extract email and password from request body
    const { email, password } = req.body;

    //Find the user by email
    const user = await User.findOne({ email: email });

    //If user does not exit or password does not match, return error
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invaliv username or password" });
    }

    //genarate Token
    const payload = {
      id: user.id,
    };
    const token = generateToken(payload);

    //return token as response
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/profile", jwtAuthMiddleware, async (req, res) => {
  try {
    const userData = req.user;
    console.log("User Data:", userData);

    const userId = userData.id;
    const user = await User.findById(userId);

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/profile/password", async (req, res) => {
  try {
    // Extract the person's ID from the token
    const userId = req.user.id;

    const { currentPassword, newPassword } = req.body; //Extract current and new password from request body

    //Find the user by userId
    const user = await User.findById(userId);

    //If password does not match, return error
    if (!(await user.comparePassword(currentPassword))) {
      return res.status(401).json({ error: "Invalid password" });
    }

    //Update the user's password
    user.password = newPassword;
    await user.save();

    // If the update was successful, log a message and respond to the client with the updated data
    console.log("password updated");
    res.status(200).json({ message: "password updated" });
  } catch (err) {
    // Handle any errors that might occur during the execution of the route handler
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;