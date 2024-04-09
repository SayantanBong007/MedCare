const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "manager", "ceo"],
    default: "user",
  },
  //   medicines: {
  //     medicine: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "MEDICINE",
  //       required: true,
  //     },
  //   },
  //   medicineCount: {
  //     type: Number,
  //     default: 0,
  //   },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;

    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    console.log("Password comparison result:", isMatch);
    return isMatch;
  } catch (err) {
    console.error("Error comparing passwords:", err);
    throw new Error("Error comparing passwords");
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
