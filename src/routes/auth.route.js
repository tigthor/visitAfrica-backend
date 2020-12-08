/* eslint-disable import/named */
import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { checkIfEmailExist } from '../middlewares/user.middleware';
import { validateSignup } from '../validations/user.validation';

const router = Router();

router.post(
	'/signup',
	validateSignup, checkIfEmailExist, AuthController.signup,
);

export default router;
