
import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";


const router=Router();
//console.log("hi")
router.route("/send/:id").post(verifyJWT,sendMessage)
router.route("/get/:id").get(verifyJWT,getMessage)
export default router