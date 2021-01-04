import { Router } from 'express';
import protectRoute from '../middlewares/protect-route.middleware';
import RequestController from '../controllers/request.controller';

const router = Router();

router.get(
	'/',
	protectRoute,
	RequestController.getRequestTable

);

export default router;
