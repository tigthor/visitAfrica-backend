import Joi from 'joi';
import ResponseService from '../services/response.service';

export const validateSignup = (req, res, next) => {
	const schema = Joi.object({
		fullname: Joi.string()
			.allow('')
			.trim()
			.strict()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.empty': 'fullname is not allowed to be empty',
				'string.min': 'fullname length must be at least 3 characters long',
				'string.max':
          ' fullname length must be less than or equal to 30 characters long',
				'any.required': 'fullname is required',
				'string.trim':
          'fullname must not have white spces at the beginning and at the end',
			}),
		email: Joi.string().email().required().messages({
			'string.email': 'Please enter a valid email address',
			'any.required': 'email is required',
			'string.empty': 'email is not allowed to be empty',
		}),
		password: Joi.string()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
			.required()
			.messages({
				'string.pattern.base':
          'password should contain uppercase,lowercase,specialCharacter,and number',
				'any.required': 'password is required',
				'string.empty': 'password is not allowed to be empty',
			}),

		birthdate: Joi.string()
			.regex(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
			.required()
			.messages({
				'string.pattern.base':
          'birthdate shoul be in the format (yyyy-mm-dd) example:(2017-11-30)',
				'any.required': 'birthdate is required',
				'string.empty': 'birthdate is not allowed to be empty',
			}),
		gender: Joi.any().valid('male', 'female').required().messages({
			'string.empty': 'gender is not allowed to be empty',
			'any.required': 'gender is required',
			'any.only': 'gender must be  male or female',
		}),
		tel: Joi.string()
			.length(10)
			.regex(/^[0-9]+$/)
			.required()
			.messages({
				'string.length': 'phone number length must be 10 characters long',
				'any.required': 'phone number is required',
				'string.empty': 'phone number is not allowed to be empty',
				'string.pattern.base':
          'phone number must be number between 0-9 no characters allowed',
			}),
		country: Joi.string()
			.allow('')
			.trim()
			.strict()
			.min(3)
			.max(15)
			.required()
			.messages({
				'string.min': 'country length must be at least 3 characters long',
				'string.max':
          'country length must be less than or equal to 15 characters long',
				'string.empty': 'country is not allowed to be empty',
				'any.required': 'country is required',
				'string.trim':
          'country must not have white spces at the beginning and at the end',
			}),
		city: Joi.string().min(3).max(30).required()
			.messages({
				'string.min': 'city length must be at least 3 characters long',
				'string.max':
        'city length must be less than or equal to 30 characters long',
				'any.required': 'city is required',
				'string.empty': 'city is not allowed to be empty',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(402, errors);
		return ResponseService.send(res);
	}

	next();
};
/** }
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @return {object} this is going to verify a user
 */
export const validateUserRoleBody = (req, res, next) => {
	const schema = Joi.object({
		userId: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.required()
			.messages({
				'string.pattern.base': 'UserId must be a number',
			}),

		role: Joi.string()
			.trim()
			.valid(
				'superAdmin',
				'Travel-Administrator',
				'Travel-Team-Member',
				'Manager',
				'Requester'
			)
			.required()
			.messages({
				'any.required': 'role is required',
				'any.only':
          'Roles must be one of [superAdmin, Travel-Administrator, Travel-Team-Member, Manager, Requester]',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate({ ...req.params, ...req.body });

	if (error) {
		const errors = error.details.map((err) => err.message);

		ResponseService.setError(402, errors);
		return ResponseService.send(res);
	}

	next();
};

export const validateProfilePage = (req, res, next) => {
	const schema = Joi.object({
		fullname: Joi.string().optional().trim().messages({
			'string.empty': 'fullname is not allowed to be empty',
		}),
		gender: Joi.string().optional().trim().messages({
			'string.empty': 'gender is not allowed to be empty',
		}),
		country: Joi.string().optional().trim().messages({
			'string.empty': 'country is not allowed to be empty',
		}),
		tel: Joi.string()
			.trim()
			.regex(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
			.messages({
				'string.empty': 'tel is not allowed to be empty',
				'phoneNumber.invalid': 'tel did not seem to be a phone number',
			}),
		city: Joi.string().optional().trim().messages({
			'string.empty': 'city is not allowed to be empty',
		}),
	}).options({ abortEarly: false });
	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};
export const validateLoginBody = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required().messages({
			'any.required': 'Email is required',
			'string.email': 'Email must be a valid email',
			'string.empty': 'Email must not be empty',
		}),
		password: Joi.string().required().messages({
			'any.required': 'Password is required',
			'string.empty': 'Password must not be empty',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);

	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(422, errors);
		return ResponseService.send(res);
	}
	next();
};

export const validateUserBody = (req, res, next) => {
	const schema = Joi.object({
		managerId: Joi.number().required().messages({
			'number.pattern.base': 'managerId must be a number',
			'any.required': 'managerId is required',
			'string.empty': 'managerId must not be empty',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);

	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(422, errors);
		return ResponseService.send(res);
	}
	next();
};
export const resetPassword = (req, res, next) => {
	const schema = Joi.object({
		password: Joi.string()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
			.required()
			.messages({
				'string.pattern.base':
          'password should contain uppercase,lowercase,specialCharacter,and number',
				'any.required': 'password is required',
				'string.empty': 'password is not allowed to be empty',
			}),
		confirmPassword: Joi.any()
			.equal(Joi.ref('password'))
			.required()
			.label('Confirm password')
			.messages({ 'any.only': '{{#label}} does not match' }),
	}).options({ abortEarly: false });
	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};
export const sendResetPasswordLink = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required().messages({
			'any.required': 'Email is required',
			'string.email': 'Email must be a valid email',
			'string.empty': 'Email must not be empty',
		}),
	}).options({ abortEarly: false });
	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};
