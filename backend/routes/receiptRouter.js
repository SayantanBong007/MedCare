import { sendReceipt } from '../Controllers/payment.controller.js';
import { Router } from "express";
const router = Router()


router.post("/").post(sendReceipt);

export default router