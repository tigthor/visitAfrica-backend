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
