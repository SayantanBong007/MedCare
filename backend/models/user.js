const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  

});

module.exports = mongoose.model("user", userSchema);
