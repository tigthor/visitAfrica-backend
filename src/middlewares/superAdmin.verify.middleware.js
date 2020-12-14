import ResponseService from '../services/response.service';

/**
 *
 * @param {Object} req req
 * @param {Object} res res
 * @param {Object} next ment
 * @returns {Object} hghfgjh
 */
const verifySuperAdmin = async (req, res, next) => {
	const { role } = req.userData;
	if (role !== 'superAdmin') {
		ResponseService.setError(403, 'You can not perform this Action');
		return ResponseService.send(res);
	}
	return next();
};
export default verifySuperAdmin;
