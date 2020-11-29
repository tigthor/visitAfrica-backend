<<<<<<< HEAD

import { Router } from 'express';
import UserController from '../controllers/Index';
const UserRouter = Router()


UserRouter.post("/register", UserController.signup)

export default UserRouter;

=======
import { Router } from "express"
import UserController from "../controllers/Index"

const router = Router()

router.post("/register", UserController.signup)

export default router
>>>>>>> ft: email sent on success user creation
