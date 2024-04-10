const express = require("express");
const router = express.Router();
const {
  deleteStore,
  getStoreDetails,
  registerStore,
  updateStoreDetails,
} = require("../Controllers/store.controller.js");

router.post("/", registerStore);

router.route("/:_id")
  .get(getStoreDetails)
  .patch(updateStoreDetails)
  .delete(deleteStore);

module.exports = router;
