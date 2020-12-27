/* eslint-disable no-unused-vars */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	/**
   * this is the model of location
   */
	class location extends Model {
		/**
     * @param {object} models
     * @returns {object} this de
     */
		static associate(models) {}
	}
	location.init(
		{
			location: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'location',
		}
	);
	return location;
};
