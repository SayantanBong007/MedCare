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
  votes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      votedAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  voteCount: {
    type: Number,
    default: 0,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
