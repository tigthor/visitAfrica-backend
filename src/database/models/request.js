/* eslint-disable no-mixed-spaces-and-tabs */
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
	/**
   * Request Model
   */
	class Request extends Model {
	}
	Request.init({
		requesterId: DataTypes.INTEGER,
		tripId: DataTypes.INTEGER,
		status: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Request',
	});
	Request.associate = (models) => {
		Request.belongsTo(models.User, { foreignKey: 'requesterId', targetKey: 'id' });
		Request.belongsTo(models.trips, { foreignKey: 'tripId', targetKey: 'id' });
	};
	return Request;
};
