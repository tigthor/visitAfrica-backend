/* eslint-disable no-tabs */
import emailExists from '../helpers/emailExists';
import isEmailValid from '../helpers/isEmailValid';
import isPasswordValid from '../helpers/isPasswordValid';
import isPhoneValid from '../helpers/isPhoneValid';

class validInput {
	/**
	 * @description
	 * @author tigthor
	 * @date 30/11/2020
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @param {function} next
	 * @returns {*}  a validation
	 * @memberof validInput
	 */
	static async signupForm(req, res, next) {
		const exists = await emailExists(req.body.email);
		if (exists) {
			return res.status(404).json({
				status: 404,
				message: 'Email already taken',
			});
		}
		if (isEmailValid(req.body.email) === false) {
			return res.status(404).json({
				status: 404,
				message: 'Email address is invalid.',
			});
		}
		if (isPasswordValid(req.body.password) === false) {
			return res.status(404).json({
				status: 404,
				message:
          'Password must contain 1 lowercase,1 uppercase, a special character and Imuct not be less than 8 characters.',
			});
		}
		if (isPhoneValid(req.body.tel) === false) {
			return res.status(404).json({
				status: 404,
				message: 'Telephone is invalid.',
			});
		}
		next();
	}
}

export default validInput;
