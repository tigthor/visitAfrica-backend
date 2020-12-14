import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import dotenv from 'dotenv';
import passport from 'passport';
import { facebookAuth, googleAuth } from '../middlewares/user.middleware';

dotenv.config();
passport.use(
	new GoogleStrategy(
		{
			callbackURL: process.env.GOOGLE_CALLBACK_URL,
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			googleFields: ['emails', 'firstName', 'lastName'],
		},
		googleAuth
	)
);

passport.use(
	new FacebookStrategy(
		{
			callbackURL: process.env.FACEBOOK_CALLBACK_URL,
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			profileFields: [
				'id',
				'displayName',
				'first_name',
				'last_name',
				'email',
				'photos',
			],
		},
		facebookAuth
	)
);
