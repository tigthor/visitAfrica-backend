import { Router } from 'express';
import TripController from '../controllers/trip.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { verifyIfAssigned, ManagerCheck } from '../middlewares/user.middleware';

const router = Router();
router.get(
	'/',
	protectRoute,
	verifyIfAssigned,
	ManagerCheck,
	TripController.findAvailTripRequests
);

export default router;
