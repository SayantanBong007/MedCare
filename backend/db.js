const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/.env" });

//Define the MongoDB connection URL
const mongoURL =
  "mongodb+srv://aviral:CanluDIihICUUFI4@cluster0.3idi7uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const mongoURL = process.env.MONGODB_URL;

//Set up MongoDB connection
mongoose.connect(mongoURL);

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//Export the database connection
module.exports = db;
