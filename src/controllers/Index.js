import models from '../database/models';
import EncryptPassword from '../helpers/passEncrypt';
import isEmailValid from '../helpers/isEmailValid';
import isPasswordValid from '../helpers/isPasswordValid';
import emailExists from '../helpers/emailExists';
import GenerateToken from '../helpers/tokenizer';
import accountVerify from '../helpers/acountVerify';
import sendMail from '../helpers/mailSender';

class UserController {
	static async signup(req, res) {
		const exists = await emailExists(req.body.email);
		if (exists) {
			return res.json({
				status: 'error',
				message: `looks like ${req.body.email} is already being used by someone else`,
			});
		} if (isEmailValid(req.body.email) === false) {
			return res.json({
				status: 'error',
				message: 'Email address is not formed correctly.',
			});
		} if (isPasswordValid(req.body.password) === false) {
			return res.json({
				status: 'error',
				message:
          'Password must contain 1 lowercase,1 uppercase, a special character and muct not be less than 8 characters.',
			});
		}
		try {
			const {
				fullname, email, birthdate, tel, city, country,
			} = req.body;

			const password = EncryptPassword(req.body.password);

			const token = GenerateToken({
				email,
				fullname,
				isVerified: false,
			});
			const newUser = {
				fullname,
				email,
				password,
				birthdate,
				tel,
				country,
				city,
				token,
				isVerified: 'false',
			};
			const createUser = await models.User.create(newUser);

			res.send({ message: 'success', createUser });
			sendMail(fullname, email, token);
		} catch (error) {
			res.send(error);
		}
	}

	static async emailVerify(req, res) {
		try {
		} catch (error) {}
	}
}

export default UserController;
