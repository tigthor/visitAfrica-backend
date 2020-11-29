<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import models from "../database/models";
import EncryptPassword from "../helpers/passEncrypt";
import isEmailValid from "../helpers/isEmailValid";
import isPasswordValid from "../helpers/isPasswordValid";
import emailExists from "../helpers/emailExists";
import GenerateToken from "../helpers/tokenizer";
import accountVerify from "../helpers/acountVerify";
import sendMail from "../helpers/mailSender";
=======
import models from '../database/models';
import EncryptPassword from '../helpers/passEncrypt';
import isEmailValid from '../helpers/isEmailValid';
import isPasswordValid from '../helpers/isPasswordValid';
import emailExists from '../helpers/emailExists';
import GenerateToken from '../helpers/tokenizer';
import accountVerify from '../helpers/acountVerify';
import sendMail from '../helpers/mailSender';
>>>>>>> 3f5e3cc (work in progress)

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
>>>>>>> 9dfd941 (adding verification)
=======
import models from '../database/models';
import EncryptPassword from '../helpers/passEncrypt';
import tokenizer from '../helpers/tokenizer';
import accountVerify from '../helpers/acountVerify';
import sendMail from '../helpers/mailSender';

class UserController {
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
        // token,
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

  static async emailVerify(req, res) {
    const { token } = req.query;
    const stringfyToken = token.String()
    try {
      const { email } = await tokenizer.verify(string);
      const findReplaceByEmail = await models.User.update(
        { isVerified: true },
        {
          where: { email },
        },
      );
      if (findReplaceById) {
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
>>>>>>> 3baadcc (ft: email sent on success user creation)
