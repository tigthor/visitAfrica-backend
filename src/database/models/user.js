import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
	/**
   * This is the class for dealng with database models
   */
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * @param {object} models
     * @returns {object} this deals with sequelize models
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
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
			role: DataTypes.ENUM('Super Administrator', 'Travel Administrator', 'Travel Team Member', 'Manager', 'Requester'),
			isVerified: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
