const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

var medicinerouter = require("./routes/medicineRouter")
var reviewrouter = require('./routes/reviewRouter')

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.use('/medicines',medicinerouter);
app.use('reviews',reviewrouter);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

//Import the router files
// const userRoutes = require("./routes/userRoutes");
// const candidateRoutes = require("./routes/candidateRoutes");

//Use the routers
// app.use("/user", userRoutes);
// app.use("/candidate", candidateRoutes);
