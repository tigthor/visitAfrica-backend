import { Router } from 'express';
import TripController from '../controllers/trip.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { checkIfTripExist, checkLocation } from '../middlewares/trip.middleware';
import { validateTrip, validateMultiCity } from '../validations/multicity.validation';
import { verifyIfAssigned } from '../middlewares/user.middleware';
import validateReturnTrip from '../validations/trip.validation';
import TripMiddleware from '../middlewares/trip.middlewares';

const router = Router();

router.post('/multi-city', protectRoute, verifyIfAssigned, validateTrip, validateMultiCity, checkLocation, checkIfTripExist, TripController.requestMultiCityTrip);

router.post('/return-trip', protectRoute, validateReturnTrip, TripMiddleware.validateReturnTripBody, TripMiddleware.validateReturnTrip, TripController.returnTripController);

export default router;
