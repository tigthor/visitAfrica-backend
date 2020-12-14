import { Router } from 'express';
import TripController from '../controllers/trip.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import {
	validateTrip,
	validateMultiCity,
} from '../validations/multicity.validation';
import { verifyIfAssigned } from '../middlewares/user.middleware';
import {
	checkIfTripExist,
	checkLocation,
	validateEditTrip,
	validateReturnTrip,
	validateReturnTripBody,
} from '../middlewares/trip.middleware';
import {
	editTripValidation,
	returnTripValidation,
} from '../validations/trip.validation';

const router = Router();

router.post(
	'/multi-city',
	protectRoute,
	verifyIfAssigned,
	validateTrip,
	validateMultiCity,
	checkLocation,
	checkIfTripExist,
	TripController.requestMultiCityTrip
);

router.post(
	'/return-trip',
	protectRoute,
	returnTripValidation,
	validateReturnTripBody,
	validateReturnTrip,
	TripController.returnTripController
);

router.get(
	'/:id',
	protectRoute,
	validateEditTrip,
	TripController.getSpecificTrip
);
router.patch(
	'/edit/:id',
	protectRoute,
	editTripValidation,
	validateEditTrip,
	checkLocation,
	TripController.updateInfoTrip
);

export default router;
