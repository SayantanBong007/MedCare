import { Router } from "express";
import  {
    postOrder,
    getOrder
} from "../Controllers/order.controller.js";

const router = Router()

router.route("/").get(getOrder)
                 .post(postOrder);



export default router