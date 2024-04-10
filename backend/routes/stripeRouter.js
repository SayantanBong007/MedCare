import { spay } from '../Controllers/payment.controller.js';
import { Router } from "express";
const router = Router()


router.post("/").post(spay);

export default router