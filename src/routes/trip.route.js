import { Router } from 'express';
import TripController from '../controllers/trip.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { checkIfTripExist, checkLocation } from '../middlewares/trip.middleware';
import { validateTrip, validateMultiCity } from '../validations/multicity.validation';

const router = Router();

router.post('/multi-city', protectRoute, validateTrip, validateMultiCity, checkLocation, checkIfTripExist, TripController.requestMultiCityTrip);

export default router;
