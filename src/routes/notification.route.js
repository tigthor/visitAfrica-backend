import { Router } from 'express';
import NotificationController from '../controllers/notification.controller';

const router = Router();

router.get('/', NotificationController.getAllNotifications);

export default router;
