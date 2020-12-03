/* eslint-disable import/named */
import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { checkIfEmailExist, checkUserCredentials } from '../middlewares/user.middleware';
import { validateSignup, validateLoginBody } from '../validations/user.validation';

const router = Router();

router.post(
	'/signup',
	validateSignup, checkIfEmailExist, AuthController.signup,
);
router.patch('/activate', AuthController.verifyUser);

router.post(
	'/login',
	validateLoginBody,
	checkUserCredentials,
	AuthController.login,
);
router.get('/activate', AuthController.verifyUser);

export default router;
