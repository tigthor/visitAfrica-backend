import jwt from 'jsonwebtoken';

class TokenService {
	static async generateToken(payload) {
		return jwt.sign(
			{
				payload,
			},
			process.env.JWTKEY,
		);
	}

	static async verifyToken(token) {
		return await jwt.verify(token, process.env.JWTKEY);
	}
}

export default TokenService;
