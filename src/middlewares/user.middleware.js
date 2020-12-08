/* eslint-disable import/prefer-default-export */
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

export const checkIfEmailExist = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (user) {
		ResponseService.setError(409, 'email is already exist');
		return ResponseService.send(res);
	}
	next();
};
