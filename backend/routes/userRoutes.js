const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Create New user
router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const { email } = data;

    const alreadyExistUser = await User.findOne({ email });

    if (alreadyExistUser) {
      return res.status(403).json({
        message: "User already exists",
      });
    }

    const newUser = new User(data);

    const response = await newUser.save();
    console.log("data saved");

    res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const data = req.body;

    const { email, password } = data;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/profile/:userId", async (req, res) => {
  try {
    // const userData = req.user;
    // console.log("User Data", userData);

    // const userId = userData.id;
    
    const userId = req.params.userId;
    const user = await User.findById(userId);

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/profile/:userId", async (req, res) => {
  try {
    // const userId = req.user.id;

    // const { currentPassword, newPassword } = req.body;

    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    if (currentPassword && newPassword) {
      if (!(await user.comparePassword(currentPassword))) {
        return res.status(401).json({ error: "Invalid password" });
      }
    }

    user.password = newPassword;

    // if (photo) user.photo = photo;
    // if (name) user.name = name;
    // if (address) user.address = address;
    // if (phone) user.phone = phone;

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.phone) user.phone = req.body.phone;

    await user.save();

    console.log("user data updated");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
