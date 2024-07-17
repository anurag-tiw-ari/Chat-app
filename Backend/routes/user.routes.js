//import { upload } from "../middleware/multer.middleware";
import { Router } from "express";
import { getOtherUsers, loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";


const router=Router();
//console.log("hi")
router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").get(logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/").get(verifyJWT, getOtherUsers);

export default router
    