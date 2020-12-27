const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	/**
   * This the notification class
  */
	class notification extends Model {
		/**
     * @param {Object} models
     * @returns {Object}
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate() {
			// define association here
		}
	}
	notification.init({
		userId: DataTypes.INTEGER,
		message: DataTypes.STRING,
		requestId: DataTypes.INTEGER,
		isRead: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'notification',
	});
	return notification;
};
