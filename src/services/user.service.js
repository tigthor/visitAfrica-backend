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
 * @param {object} property
 * @returns {object} update user by attribute
*/
	static async updateUserByAttribute(attribute, property) {
		return User.update(property, { where: attribute,
		});
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
