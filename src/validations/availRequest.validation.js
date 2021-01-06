/* eslint-disable import/prefer-default-export */
import joiBase from 'joi';
import joiDate from '@hapi/joi-date';
import ResponseService from '../services/response.service';

const Joi = joiBase.extend(joiDate);

export const requestApprovedValidation = (req, res, next) => {
	const schema = Joi.object({
		departureFrom: Joi.number().integer().min(1).optional()
			.messages({
				'number.base': 'departure From city must be a an id',
				'number.empty': 'departure from city must not be empty',
				'number.trim': 'number must not have white spces at the beginning and at the end',
			}),
		departureTo: Joi.number().integer().min(1).optional()
			.messages({
				'number.base': 'departure To city must be a an id',
				'number.empty': 'departure To city must not be empty',
				'number.trim': 'number must not have white spces at the beginning and at the end',
			}),
		startingDate: Joi.date()
			.greater('now')
			.utc()
			.format('YYYY-MM-DD')
			.optional()
			.messages({
				'date.greater': 'starting date" must not be in the past',
				'date.format': 'starting date must have format YYYY-MM-DD',
				'date.trim': 'date must not have white spces at the beginning and at the end',
			}),
		returningDate: Joi.date()
			.greater(req.body.startingDate)
			.utc()
			.format('YYYY-MM-DD')
			.optional()
			.messages({
				'date.greater': 'returning date" must be greater than starting date',
				'date.format': 'returning date must have format YYYY-MM-DD',
				'date.trim': 'date must not have white spces at the beginning and at the end',
			}),
		reason: Joi.string().trim().strict().min(3)
			.max(30)
			.required()
			.messages({
				'string.min': 'reason length must be at least 3 characters long',
				'string.max':
        'reason length must be less than or equal to 15 characters long',
				'string.empty': 'reason is not allowed to be empty',
				'any.required': 'reason is required',
				'string.trim':
        'reason must not have white spces at the beginning and at the end',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(422, errors);
		return ResponseService.send(res);
	}
	next();
};
