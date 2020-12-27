/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';
import BcryptService from '../services/bcrypt.service';

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @return {object} this is going to verify a user
 */
export const checkIfEmailExist = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (user) {
		ResponseService.setError(409, 'email is already exist');
		return ResponseService.send(res);
	}
	next();
};
export const checkUserCredentials = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (!user) {
		ResponseService.setError(400, 'email not registered');
		return ResponseService.send(res);
	}
	const userIsVerified = await UserService.findUserByAttribute({
		email: req.body.email,
		isVerified: true,
	});
	if (!userIsVerified) {
		ResponseService.setError(401, 'account is not verified');
		return ResponseService.send(res);
	}

	if (!BcryptService.comparePassword(req.body.password, user.password)) {
		ResponseService.setError(401, 'Invalid email or password');
		return ResponseService.send(res);
	}
	next();
};
export const checkUserIfExist = async (req, res, next) => {
	const user = await UserService.findUserByProperty({ id: req.params.userId });
	if (req.userData.role !== 'superAdmin') {
		ResponseService.setError(403, 'You can not perform this task');
		return ResponseService.send(res);
	}

	if (!user) {
		ResponseService.setError(404, 'We can not find user in the system');
		return ResponseService.send(res);
	}
	if (user.role === 'superAdmin') {
		ResponseService.setError(400, ' super admin role cant be change');
		return ResponseService.send(res);
	}
	next();
};

/**
 * @param  {string} accessToken
 * @param  {string} refreshToken
 * @param  {object} profile
 * @param  {function} done
 * @returns {object} this function get profile for a google user, and create a user if not exits
 */
export const googleAuth = async (accessToken, refreshToken, profile, done) => {
	const user = await UserService.findUserByAttribute({
		email: profile._json.email,
	});
	const newUser = {
		fullname: profile.displayName,
		email: profile._json.email,
		password: BcryptService.hashPassword(Math.random().toString(36)),
	};
	if (!user) {
		await UserService.createUser(newUser);
	}
	done(null, newUser);
};

/**
 * @param  {string} accessToken
 * @param  {string} refreshToken
 * @param  {object} profile
 * @param  {function} done
 * @returns {object} this function get profile for a facebook user, and create a user if not exits
 */
export const facebookAuth = async (
	accessToken,
	refreshToken,
	profile,
	done
) => {
	const user = await UserService.findUserByAttribute({
		email: profile._json.email,
	});

	const newUser = {
		fullname: profile.displayName,
		email: profile._json.email,
		password: BcryptService.hashPassword(Math.random().toString(36)),
	};

	if (!user) {
		await UserService.createUser(newUser);
	}
	done(null, newUser);
};

export const verifyIfAssigned = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ id: req.userData.id });
	if (user.dataValues.line_manager_id === null) {
		ResponseService.setError(400, 'User is not assigned to line manager');
		return ResponseService.send(res);
	}
	next();
};
