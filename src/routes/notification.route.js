import { Router } from 'express';
import notificationController from '../controllers/notification.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import verifyManager from '../middlewares/verify.manager';

const router = Router();

router.get('/', protectRoute, verifyManager.checkIfManagerExist, notificationController.getUserNotifications);

export default router;
