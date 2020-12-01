import bcrypt from 'bcrypt';

class BcryptService{
	static hashPassword(password){
		return bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
	};

	static comparePassword(plainPwd, hashedPwd) {
		return bcrypt.compareSync(plainPwd, hashedPwd);
	}
}

export default BcryptService;
