import { Router } from 'express';
import TripController from '../controllers/trip.controller';
import protectRoute from '../middlewares/protect-route.middleware';
<<<<<<< HEAD
import { checkIfTripExist, checkLocation } from '../middlewares/trip.middleware';
import { validateTrip, validateMultiCity } from '../validations/multicity.validation';
import { verifyIfAssigned } from '../middlewares/user.middleware';
import validateReturnTrip from '../validations/trip.validation';
import TripMiddleware from '../middlewares/trip.middlewares';

const router = Router();

router.post('/multi-city', protectRoute, verifyIfAssigned, validateTrip, validateMultiCity, checkLocation, checkIfTripExist, TripController.requestMultiCityTrip);

router.post('/return-trip', protectRoute, validateReturnTrip, TripMiddleware.validateReturnTripBody, TripMiddleware.validateReturnTrip, TripController.returnTripController);
=======
import TripMiddleware from '../middlewares/trip.middleware';
import { validateEditTrip } from '../validations/trip.validation';

const router = Router();

router.get('/:id', protectRoute, TripMiddleware.validateTrip, TripController.getSpecificTrip);
router.patch('/edit/:id', protectRoute, validateEditTrip, TripMiddleware.validateTrip, TripController.updateInfoTrip);
>>>>>>> cd83769 (edit requests with status)

export default router;
