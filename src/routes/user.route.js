import { Router } from 'express';
import UserController from '../controllers/user.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { checkUserIfExist } from '../middlewares/user.middleware';
import {
	validateProfilePage,
	validateUserRoleBody,
	validateUserBody,
} from '../validations/user.validation';
import verifySuperAdmin from '../middlewares/superAdmin.verify.middleware';
import verifyLineManager from '../middlewares/verify_line_manager';
import verifyUser from '../middlewares/check.UserExit';

const router = Router();

router.patch(
	'/profile',
	protectRoute,
	validateProfilePage,
	UserController.updateProfileUser
);
router.get('/profile', protectRoute, UserController.getSpecificUser);
router.patch(
	'/role/:userId',
	protectRoute,
	validateUserRoleBody,
	checkUserIfExist,
	UserController.userRoleSetting
);
router.post(
	'/user/:userId',
	protectRoute,
	validateUserBody,
	verifySuperAdmin,
	verifyUser,
	verifyLineManager.checkIfLineManagerExist,
	UserController.assignUserToManager
);
export default router;
