import { Router } from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    getOrderHistory
} from "../Controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWTuser } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
    ]),
    registerUser
    )

router.route("/login").post(loginUser)
//secured routes
router.route("/logout").post(verifyJWTuser,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWTuser, changeCurrentPassword)
router.route("/current-user").get(verifyJWTuser, getCurrentUser)
router.route("/update-account").patch(verifyJWTuser, updateAccountDetails)

router.route("/avatar").patch(verifyJWTuser, upload.single("avatar"), updateUserAvatar)
// router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

router.route("/order").get(verifyJWTuser, getOrderHistory)

export default router