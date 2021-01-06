/* eslint-disable require-jsdoc */
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Notification extends Model {
		static associate(models) {
			// define association here
		}
	}
	Notification.init({
		userId: DataTypes.INTEGER,
		message: DataTypes.STRING,
		isRead: DataTypes.BOOLEAN,
		requestId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Notification',
	});
	return Notification;
};
