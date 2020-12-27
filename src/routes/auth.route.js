/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';
import passport from 'passport';
import AuthController from '../controllers/auth.controller';
import { fakeUser } from '../tests/fixtures/user.fixture';
import {
	checkIfEmailExist,
	checkUserCredentials,
	googleAuth,
	facebookAuth,
} from '../middlewares/user.middleware';
import {
	validateSignup,
	validateLoginBody,
	resetPassword,
	sendResetPasswordLink,
} from '../validations/user.validation';
import '../config/passport.config';

const router = Router();

router.post(
	'/signup',
	validateSignup,
	checkIfEmailExist,
	AuthController.signup
);
router.patch('/activate', AuthController.verifyUser);

router.post(
	'/login',
	validateLoginBody,
	checkUserCredentials,
	AuthController.login
);
router.get('/activate', AuthController.verifyUser);
router.get('/resetpassword', AuthController.forgetPassword);

router.get(
	'/google',
	googleAuth,
	passport.authenticate('google', { scope: ['email', 'profile'] })
);
router.get(
	'/google/redirect',
	passport.authenticate('google', {
		session: false,
		failureRedirect: '/login',
	}),
	AuthController.loginWithSocialMedia
);
router.get('/facebook', facebookAuth, passport.authenticate('facebook'));
router.get(
	'/test/google',
	fakeUser,
	facebookAuth,
	AuthController.loginWithSocialMedia
);
router.get(
	'/test/facebook',
	fakeUser,
	googleAuth,
	AuthController.loginWithSocialMedia
);
router.get(
	'/facebook/redirect',
	passport.authenticate('facebook', {
		session: false,
		failureRedirect: '/login',
	}),
	AuthController.loginWithSocialMedia
);
router.patch(
	'/reset-password',
	resetPassword,
	AuthController.resetPassword
);
router.post(
	'/forget-password',
	sendResetPasswordLink,
	AuthController.sendResetPasswordLink
);

export default router;
