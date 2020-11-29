import models from '../database/models';
import EncryptPassword from '../helpers/passEncrypt';
import tokenizer from '../helpers/tokenizer';
import sendMail from '../helpers/mailSender';

class UserController {
	/**
	 * @description this takes request and response make a full
	 * @author tigthor
	 * @date 30/11/2020
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @return {*} object
	 * @memberof UserController
	 */
	static async signup(req, res) {
		try {
			const {
				fullname,
				email,
				birthdate,
				gender,
				tel,
				city,
				country,
			} = req.body;

			const password = EncryptPassword(req.body.password);

			const newUser = {
				fullname,
				email,
				password,
				birthdate,
				gender,
				tel,
				country,
				city,
				role: 'REQUESTER',
				isVerified: false,
			};
			const createUser = await models.User.create(newUser);

			res.status(201).send({ message: 'success', createUser });
			const tokenToSend = tokenizer.generate(email);
			sendMail(fullname, email, tokenToSend);
		} catch (error) {
			res.send(error);
		}
	}

	/**
	 * @description this is the controller for verifying Email
	 * @author tigthor
	 * @date 30/11/2020
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @return {}
	 * @memberof UserController
	 */
	static async emailVerify(req, res) {
		const { token } = req.query;
		const stringfyToken = token.toString();
		try {
			const { email } = await tokenizer.verify(stringfyToken);
			const findReplaceByEmail = await models.User.update(
				{ isVerified: true },
				{
					where: { email },
				},
			);

			if (findReplaceByEmail) {
				res.status(200).json({
					status: 200,
					message: 'Verification Successfuly Verified',
				});
			} else {
				res.status(403).json({
					status: 403,
					message: 'Invalid verification link',
				});
			}
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: 'Error Occured',
				Error_occured: error,
			});
		}
	}
}

export default UserController;
