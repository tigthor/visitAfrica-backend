<<<<<<< HEAD
'use strict';
const { Model } = require('sequelize');
=======
const { Model } = require('sequelize');

>>>>>>> work in progress
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
      tel: DataTypes.STRING,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      role: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
=======
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			fullname: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			birthdate: DataTypes.STRING,
			tel: DataTypes.STRING,
			country: DataTypes.STRING,
			city: DataTypes.STRING,
			token: DataTypes.STRING,
			isVerified: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
>>>>>>> work in progress
};
