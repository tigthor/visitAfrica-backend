/* eslint-disable require-jsdoc */
import BcryptService from '../services/bcrypt.service';
import TokenService from '../services/token.service';
import MailService from '../services/mail.service';
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 *  AuthController
 */
class AuthController {
	/**
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} this is going to create a user
	 */

	static async signup(req, res) {
		const newUser = await UserService.createUser({
			fullname: req.body.fullname,
			email: req.body.email,
			password: BcryptService.hashPassword(req.body.password),
			birthdate: req.body.birthdate,
			gender: req.body.gender,
			tel: req.body.tel,
			country: req.body.country,
			city: req.body.city,
		});
		MailService.sendMail(req.body.fullname, req.body.email, TokenService.generateToken({
			email: req.body.email
		}));

		ResponseService.setSuccess(201, 'User Successfully Created', {
			id: newUser.id,
			fullname: newUser.fullname,
			email: newUser.email,
			birthdate: newUser.birthdate,
			gender: newUser.gender,
			tel: newUser.tel,
			country: newUser.country,
			city: newUser.city,
			profilePicture: newUser.profilePicture,
			role: newUser.role,
			createdAt: newUser.createdAt,
			updatedAt: newUser.updatedAt
		});
		return ResponseService.send(res);
	}
}

export default AuthController;
