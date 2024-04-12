import { Router } from "express";
import {
  deleteWorker,
  getWorkerDetails,
  registerWorker,
  updateWorkerDetails,
  getworker,
} from "../Controllers/worker.controller.js";

const router = Router();

router.route("/").post(registerWorker);
router
  .route("/:_id")
  .get(getWorkerDetails)
  .patch(updateWorkerDetails)
  .delete(deleteWorker);

router.route("/").get(getworker);
export default router;
