import jwt from 'jsonwebtoken';
<<<<<<< HEAD
<<<<<<< HEAD
import { config } from 'dotenv';

config();
class tokenizer {
	static async generate(payload) {
		const token = jwt.sign(
			{
				payload,
			},
			process.env.JWTKEY,
		);
		return token;
	}

	static async verify(token) {
		const decoded = await jwt.verify(token, process.env.JWTKEY);
		return decoded;
	}
}

export default tokenizer;
=======
=======
import { config } from 'dotenv';
>>>>>>> ft: email sent on success user creation

config();
class tokenizer {
  static async generate(payload) {
    const token = jwt.sign(
      {
        payload,
      },
      process.env.JWTKEY,
    );
    return token;
  }

<<<<<<< HEAD
	return token;
};
export default GenerateToken;
>>>>>>> work in progress
=======
  static async verify(token) {
    const decoded = await jwt.verify(token, process.env.JWTKEY);
    return decoded;
  }
}

export default tokenizer;
>>>>>>> ft: email sent on success user creation
