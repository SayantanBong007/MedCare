import { Router } from "express";

import {sendmessage} from '../Controllers/messge.controller.js'

const router = Router()
router.route("/").post(sendmessage);

export default router