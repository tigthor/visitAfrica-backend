/* eslint-disable no-unused-vars */
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	/**
   * this is the model of location
   */
	class notification extends Model {
		/**
     * @param {object} models
     * @returns {object} this de
     */
		static associate(models) {

		}
	}
	notification.init({
		userId: DataTypes.INTEGER,
		message: DataTypes.STRING,
		isRead: DataTypes.BOOLEAN,
		requestId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'notification',
	});
	return notification;
};
