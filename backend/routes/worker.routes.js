import { Router } from "express";
import { deleteWorker, getWorkerDetails, registerWorker, updateWorkerDetails } from "../Controllers/worker.controller.js";

const router = Router()

router.route("/").post(registerWorker);
router.route("/:_id")
      .get(getWorkerDetails)
      .patch(updateWorkerDetails)
      .delete(deleteWorker)

export default router