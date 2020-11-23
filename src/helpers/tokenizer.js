import jwt from 'jsonwebtoken';
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
