/* eslint-disable no-unused-vars */
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
	/**
   * This is the class for dealng with database models
   */
	class User extends Model {}
	User.init(
		{
			fullname: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			gender: DataTypes.ENUM('male', 'female'),
			birthdate: DataTypes.DATEONLY,
			tel: DataTypes.STRING,
			country: DataTypes.STRING,
			city: DataTypes.STRING,
			profilePicture: DataTypes.STRING,
			role: DataTypes.STRING,
			line_manager_id: DataTypes.INTEGER,
			isVerified: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	User.associate = (models) => {
		User.hasMany(models.User, {
			foreignKey: 'line_manager_id',
			onDelete: 'CASCADE',
		});
	};
	return User;
};
