import { Router } from 'express';
import NotificationController from '../controllers/notification.controller';
import protectRoute from '../middlewares/protect-route.middleware';

const router = Router();

router.get('/', protectRoute, NotificationController.getAllNotifications);

export default router;
