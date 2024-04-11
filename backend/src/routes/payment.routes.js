import { sendRecipt } from '../Controllers/payment.controller.js';
import { Router } from "express";
const router = Router()


router.route("/").post(sendRecipt);

export default router