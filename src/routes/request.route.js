import { Router } from 'express';
import TripController from '../controllers/trip.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { verifyIfAssigned, checkIfUserIsManager } from '../middlewares/user.middleware';

const router = Router();
router.get(
	'/triprequest',
	protectRoute,
	verifyIfAssigned,
	checkIfUserIsManager,
	TripController.findTripRequests
);

export default router;
