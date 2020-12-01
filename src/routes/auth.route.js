import { Router } from 'express';
import AuthController from '../controllers/auth.controller';


const router = Router();

router.post(
	'/signup',
	AuthController.signup,
);
router.get('/verify/activate', AuthController.emailVerify);

export default router;
