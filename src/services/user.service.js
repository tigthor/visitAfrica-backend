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
}

export default UserService;
