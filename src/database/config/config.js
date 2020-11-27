<<<<<<< HEAD

import 'regenerator-runtime/runtime';
import { config } from 'dotenv';

config();

export const development = {
=======
require('dotenv').config();

module.exports.development = {
	url: process.env.DATABASE_URL,
	dialect: 'postgres',
	logging: false,
};

module.exports.testing = {
>>>>>>> work in progress
	url: process.env.DATABASE_URL,
	dialect: 'postgres',
	logging: false,
};

<<<<<<< HEAD
export const test = {
	url: process.env.DATABASE_URL,
	dialect: 'postgres',
=======
module.exports.production = {
	url: process.env.DATABASE_URL,
	dialect: 'postgresql',
>>>>>>> work in progress
	logging: false,
};

export const production = {
	url: process.env.DATABASE_URL,
	dialect: 'postgres',
	logging: false,
}
