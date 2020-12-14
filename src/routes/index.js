import express from 'express';
import AuthRoute from './auth.route';
import UserRoute from './user.route';
import TripRoute from './trip.route';

const app = express();

app.use('/api/auth', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/trip', TripRoute);

export default app;
