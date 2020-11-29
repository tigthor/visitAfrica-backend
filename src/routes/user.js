import { Router } from 'express';
import userController from '../controllers/Index';
import validInput from '../middlewares/validInput';

const userRoute = Router();

userRoute.post(
  '/signup',
  validInput.signupForm,
  userController.signup,
);
userRoute.get('/verify/activate', userController.emailVerify);

export default userRoute;
