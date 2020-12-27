import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 * This is user management middleware class
 */
class verifyLineManagerMiddleware {
	/**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object} this is going to verify a user
   */
	static async checkIfLineManagerExist(req, res, next) {
		const foundManager = await UserService.findUserByAttribute({
			id: req.body.managerId,
		});
		if (foundManager.role !== 'lineManager') {
			ResponseService.setError(
				403,
				'The user has to be a lineManager to be assigned a user'
			);
			return ResponseService.send(res);
		}
		next();
	}
}

export default verifyLineManagerMiddleware;
