import joiBase from 'joi';
import joiDate from '@hapi/joi-date';
import ResponseService from '../services/response.service';

const Joi = joiBase.extend(joiDate);

const validateReturnTrip = (req, res, next) => {
	const schema = Joi.object(

		{
			departureFrom: Joi.string().trim().strict()
				.min(3)
				.max(30)
				.required()
				.messages({
					'string.empty': 'departureFrom is not allowed to be empty',
					'string.min': 'departureFrom length must be at least 3 characters long',
					'string.max': ' departureFrom length must be less than or equal to 30 characters long',
					'any.required': 'departureFrom is required',
					'string.trim': 'departureFrom must not have white spces at the beginning and at the end'
				}),
			departureTo: Joi.string().trim().strict()
				.min(3)
				.max(30)
				.required()
				.messages({
					'string.empty': 'departureTo is not allowed to be empty',
					'string.min': 'departureTo length must be at least 3 characters long',
					'string.max': 'departureTo length must be less than or equal to 30 characters long',
					'any.required': 'departureTo is required',
					'string.trim': 'departureTo must not have white spces at the beginning and at the end'
				}),
			startingDate: Joi.date().greater('now').utc().format('YYYY-MM-DD')
				.optional()
				.messages({
					'date.greater': 'starting date" must not be in the past',
					'date.format': 'starting date must have format YYYY-MM-DD'
				}),
			returningDate: Joi.date().greater(req.body.startingDate).utc().format('YYYY-MM-DD')
				.optional()
				.messages({
					'date.greater': 'returning date" must be greater than starting date',
					'date.format': 'returning date must have format YYYY-MM-DD'
				}),
			reason: Joi.string().trim().strict()
				.min(3)
				.max(30)
				.required()
				.messages({
					'string.min': 'reason length must be at least 3 characters long',
					'string.max': 'reason length must be less than or equal to 15 characters long',
					'string.empty': 'reason is not allowed to be empty',
					'any.required': 'reason is required',
					'string.trim': 'reason must not have white spces at the beginning and at the end'
				}),
		}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map(e => e.message);
		ResponseService.setError(422, errors);
		return ResponseService.send(res);
	}
	next();
};

export default validateReturnTrip;
