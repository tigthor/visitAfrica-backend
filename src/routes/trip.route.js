/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
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
	validateReturnTripBody
} from '../middlewares/trip.middleware';
import {
	editTripValidation,
	returnTripValidation,
} from '../validations/trip.validation';

const router = Router();

router.post('/multi-city', (req, res) => { protectRoute, verifyIfAssigned, validateTrip, validateMultiCity, checkLocation, checkIfTripExist, TripController.requestMultiCityTrip; });

router.post('/return-trip', (req, res) => { protectRoute, returnTripValidation, validateReturnTripBody, returnTripValidation, TripController.returnTripController; });

router.get('/:id', (req, res) => { protectRoute, validateEditTrip, TripController.getSpecificTrip; });
router.patch('/edit/:id', (req, res) => { protectRoute, editTripValidation, validateEditTrip, checkLocation, TripController.updateInfoTrip; });

export default router;
