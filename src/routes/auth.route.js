/* eslint-disable import/named */
import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import passport from 'passport';
import AuthController from '../controllers/auth.controller';
import { fakeUser } from '../tests/fixtures/user.fixture';
import { checkIfEmailExist, checkUserCredentials, googleAuth, facebookAuth } from '../middlewares/user.middleware';
import { validateSignup, validateLoginBody } from '../validations/user.validation';
import '../config/passport.config';

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

router.get(
	'/google', googleAuth,
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
router.get('/test/google', fakeUser, AuthController.loginWithSocialMedia);
router.get('/test/facebook', fakeUser, AuthController.loginWithSocialMedia);

router.get(
	'/facebook/redirect',
	passport.authenticate('facebook', {
		session: false,
		failureRedirect: '/login',
	}),
	AuthController.loginWithSocialMedia
);

export default router;
