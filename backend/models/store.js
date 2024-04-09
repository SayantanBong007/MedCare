const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  workers: {
    type: Number,
    required: true,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
