//import { upload } from "../middleware/multer.middleware";
import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const router=Router();
//console.log("hi")
router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

export default router
    