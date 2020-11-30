<<<<<<< HEAD
import 'regenerator-runtime/runtime';
=======
>>>>>>> bg: resolving eslint bug
import { config } from 'dotenv';

config();

export const development = {
	url: process.env.DATABASE_URL,
	dialect: 'postgres',
	logging: false,
};

export const test = {
<<<<<<< HEAD
	url: process.env.DATABASE_URL,
=======
	url: process.env.TEST_DATABASE_URL,
>>>>>>> bg: resolving eslint bug
	dialect: 'postgres',
	logging: false,
};

export const production = {
<<<<<<< HEAD
	url: process.env.DATABASE_URL,
=======
	url: process.env.TEST_DATABASE_URL,
>>>>>>> bg: resolving eslint bug
	dialect: 'postgres',
	logging: false,
};
