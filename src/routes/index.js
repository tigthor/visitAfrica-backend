<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Router } from 'express';
import UserController from '../controllers/Index';
=======
import { Router } from "express"
import UserController from "../controllers/Index"
>>>>>>> 3934a2f (ft: email sent on success user creation)

const router = Router()

router.post("/register", UserController.signup)

<<<<<<< HEAD
export default router;
>>>>>>> 3f5e3cc (work in progress)
=======
export default router
>>>>>>> 3934a2f (ft: email sent on success user creation)
