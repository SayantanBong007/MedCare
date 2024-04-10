import { Router } from "express";
import  {
    getreview,
    postreview,
    getspecificReview,
    putspecificReview,
    deleteReview
} from "../Controllers/reviews.controller.js";

const router = Router()

router.route("/").get(getreview)
                 .post(postreview);
router.route("/:reviewId")
      .get(getspecificReview)
      .put(putspecificReview)
      .delete(deleteReview)


export default router