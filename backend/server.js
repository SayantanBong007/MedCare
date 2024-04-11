const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Import the router files
const userRoutes = require("./routes/userRoutes");
// const candidateRoutes = require("./routes/candidateRoutes");

//Use the routers
app.use('/api/v1', userRoutes);
// app.use("/candidate", candidateRoutes);