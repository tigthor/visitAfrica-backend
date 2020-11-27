
import { Router } from 'express';
import UserController from '../controllers/Index';
const UserRouter = Router()


UserRouter.post("/register", UserController.signup)

export default UserRouter;

