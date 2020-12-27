/* eslint-disable no-restricted-globals */
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 *
 * @param {Object} req req
 * @param {Object} res res
 * @param {Object} next ment
 * @returns {Object} hghfgjh
 */
export const checkUser = async (req, res, next) => {
	const { userId } = req.params;
	if (isNaN(userId)) {
		ResponseService.setError(400, 'The userId must be a number');
		return ResponseService.send(res);
	}
	const user = await UserService.findUserByAttribute({ id: userId });
	if (!user) {
		ResponseService.setError(
			404,
			'The user you are trying to asign does not exist'
		);
		return ResponseService.send(res);
	}
	next();
};
export default checkUser;
