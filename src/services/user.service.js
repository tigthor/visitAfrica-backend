import models from '../database/models';

const { User } = models;

/**
 * this is a user service
 */
class UserService {
	/**
	 * @param {object} user
	 * @return {object} this is a service for creating a user
	 */
	static createUser(user) {
		return User.create(user);
	}

	/**
	 * @param {object} attribute
	 * @returns {object} getting a user that is already logged in
	 */
	static findUserByAttribute(attribute) {
		return User.findOne({ where: attribute });
	}
}

export default UserService;
