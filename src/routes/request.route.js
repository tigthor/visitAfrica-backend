// eslint-disable-next-line no-unused-vars
import { Router } from 'express';
import express from 'express';
import protectRoute from '../middlewares/protect-route.middleware';
import TripController from '../controllers/trip.controller';
const router = express.Router();

router.get('/trip', protectRoute, TripController.findRequests);

export default router;
