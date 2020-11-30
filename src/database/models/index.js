import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.url, config);
}

readdirSync(__dirname)
<<<<<<< HEAD
	.filter(file => (
		file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	))
	.forEach(file => {
=======
	.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
	.forEach((file) => {
>>>>>>> bg: resolving eslint bug
		const model = require(join(__dirname, file))(sequelize, DataTypes);
		db[model.name] = model;
	});

<<<<<<< HEAD
Object.keys(db).forEach(modelName => {
=======
Object.keys(db).forEach((modelName) => {
>>>>>>> bg: resolving eslint bug
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
