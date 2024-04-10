import { Router } from "express";
import { deleteStore, getStoreDetails, registerStore, updateStoreDetails } from "../Controllers/store.controller.js";

const router = Router()

router.route("/").post(registerStore);
router.route("/:_id")
      .get(getStoreDetails)
      .patch(updateStoreDetails)
      .delete(deleteStore)


export default router