import { Router } from 'express';
import UserController from '../controllers/user.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { checkUserIfExist } from '../middlewares/user.middleware';
import { validateProfilePage, validateUserRoleBody } from '../validations/user.validation';

const router = Router();

router.patch('/profile', protectRoute, validateProfilePage, UserController.updateProfileUser);
router.get('/profile', protectRoute, UserController.getSpecificUser);
router.patch('/role/:userId', protectRoute, validateUserRoleBody, checkUserIfExist, UserController.userRoleSetting);

export default router;
