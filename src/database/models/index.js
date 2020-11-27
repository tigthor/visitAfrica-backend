<<<<<<< HEAD
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';

const basename = _basename(__filename);
=======
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
>>>>>>> work in progress
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.url, config);
}

<<<<<<< HEAD
readdirSync(__dirname)
	.filter(file => (
		file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	))
	.forEach(file => {
		const model = require(join(__dirname, file))(sequelize, DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
=======
fs
	.readdirSync(__dirname)
	.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
>>>>>>> work in progress
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
