/* eslint-disable radix */
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 * user controller class
 *  */
class UserController {
	/**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} get a specific user from the database
   */
	static async getSpecificUser(req, res) {
		const userProfile = await UserService.findUserByAttribute({
			id: req.userData.id,
		});
		const userData = {
			id: userProfile.id,
			fullname: userProfile.fullname,
			email: userProfile.email,
			birthdate: userProfile.birthdate,
			gender: userProfile.gender,
			tel: userProfile.tel,
			country: userProfile.country,
			city: userProfile.city,
			profilePicture: userProfile.profilePicture,
			role: userProfile.role,
			createdAt: userProfile.createdAt,
			updatedAt: userProfile.updatedAt,
		};
		ResponseService.setSuccess(200, 'User information', userData);
		return ResponseService.send(res);
	}

	/**
   * @param {object} req
   * @param {object} res
   * @returns {object} update a specific user
   */
	static async updateProfileUser(req, res) {
		await UserService.updateUserByAttribute(
			{ id: req.userData.id },
			{
				fullname: req.body.fullname,
				gender: req.body.gender,
				country: req.body.country,
				tel: req.body.tel,
				city: req.body.city,
			}
		);
		const findUser = await UserService.findUserByAttribute({
			id: req.userData.id,
		});
		ResponseService.setSuccess(200, 'Profile Page updated successfully', {
			id: findUser.id,
			fullname: findUser.fullname,
			email: findUser.email,
			birthdate: findUser.birthdate,
			gender: findUser.gender,
			tel: findUser.tel,
			country: findUser.country,
			city: findUser.city,
			profilePicture: findUser.profilePicture,
			role: findUser.role,
			createdAt: findUser.createdAt,
			updatedAt: findUser.updatedAt,
		});
		return ResponseService.send(res);
	}

	/**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} this update user role
   */
	static async userRoleSetting(req, res) {
		const { userId } = req.params;
		const id = parseInt(userId);
		await UserService.findUserByAttribute(id);
		UserService.updateProperty({ id }, { role: req.body.role });
		ResponseService.setSuccess(200, 'User role was updated succesfuly');
		return ResponseService.send(res);
	}

	/**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} this assign user to manager
   */
	static async assignUserToManager(req, res) {
		await UserService.updateProperty(
			{ id: parseInt(req.params.userId) },
			{ lineManager: parseInt(req.params.managerId) }
		);
		ResponseService.setSuccess(200, 'User assigned to manager successfully');
		ResponseService.send(res);
	}
}

export default UserController;
