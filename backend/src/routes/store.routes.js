import { Router } from "express";
import {
  deleteStore,
  getStoreDetails,
  registerStore,
  updateStoreDetails,
  getAllStore,
} from "../Controllers/store.controller.js";

const router = Router();

router.route("/").post(registerStore).get(getAllStore);
router
  .route("/:_id")
  .get(getStoreDetails)
  .patch(updateStoreDetails)
  .delete(deleteStore);

export default router;
