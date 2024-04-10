import { Router } from "express";
import  {
    getMedicine,
    registerMedicine,
    getSpecificMedicine,
    updateMedicine,
    deleteMedicine
} from "../Controllers/medicines.controller.js";

const router = Router()

router.route("/").get(getMedicine)
                 .post(registerMedicine);
router.route("/:medicineId")
      .get(getSpecificMedicine)
      .put(updateMedicine)
      .delete(deleteMedicine)


export default router