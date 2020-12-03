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
	 * @return {object} update user by attribute
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

	/**
	 * @param {string} instance
	 * @param {object} property
	 * @returns {object} this update a given user
	 */
	static updateProperty(instance, property) {
		return User.update(property, { where: instance });
	}

	/**
	 *
	 * @param {object} property
	 * @returns {object} this return a given user based by property
	 */
	static findByProperty(property) {
		return User.findOne({ where: property });
	}
}
export default UserService;
