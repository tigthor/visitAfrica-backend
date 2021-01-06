import express from 'express';
import AuthRoute from './auth.route';
import UserRoute from './user.route';
import TripRoute from './trip.route';
import AvailRoute from './Availrequest.route';

const app = express();

app.use('/api/auth', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/trip', TripRoute);
app.use('/api/Availrequest', AvailRoute);

export default app;
