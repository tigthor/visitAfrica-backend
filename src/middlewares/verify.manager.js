import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 * This is user management middleware class
 */
class verifyManagerMiddleware {
	/**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object} this is going to verify a manager
   */
	static async checkIfManagerExist(req, res, next) {
		const foundManager = await UserService.findUserByAttribute({
			id: req.userData.id
		});
		if (foundManager.role !== 'Manager') {
			ResponseService.setError(
				403,
				'The user has to be a Manager to get the notification'
			);
			return ResponseService.send(res);
		}
		next();
	}
}

export default verifyManagerMiddleware;
