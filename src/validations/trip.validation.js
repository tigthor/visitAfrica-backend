/* eslint-disable import/prefer-default-export */
import joiBase from 'joi';
import joiDate from '@hapi/joi-date';
import ResponseService from '../services/response.service';
import TripService from '../services/trip.service';

const Joi = joiBase.extend(joiDate);

export const editTripValidation = async (req, res, next) => {
	const trip = await TripService.findTripByAttribute({
		userId: req.userData.id,
	});
	const schema = Joi.object({
		departureFrom: Joi.number().integer().min(1).optional()
			.messages({
				'number.base': 'departure From city must be a an id',
				'number.empty': 'departure from city must not be empty',
			}),
		departureTo: Joi.number().integer().min(1).optional()
			.messages({
				'number.base': 'departure To city must be a an id',
				'number.empty': 'departure To city must not be empty',
			}),
		startingDate: Joi.date()
			.greater('now')
			.utc()
			.format('YYYY-MM-DD')
			.optional()
			.messages({
				'date.greater': 'starting date" must not be in the past',
				'date.format': 'starting date must have format YYYY-MM-DD',
			}),
		returningDate: Joi.date()
			.greater(req.body.startingDate || trip.dataValues.startingDate)
			.utc()
			.format('YYYY-MM-DD')
			.optional()
			.messages({
				'date.greater': 'returning date" must be greater than strting date',
				'date.format': 'returning date must have format YYYY-MM-DD',
			}),
		reason: Joi.string().trim().strict().min(3)
			.max(30)
			.optional()
			.messages({
				'string.min': 'reason length must be at least 3 characters long',
				'string.max':
        'reason length must be less than or equal to 15 characters long',
				'string.empty': 'reason is not allowed to be empty',
				'string.trim':
        'reason must not have white spces at the beginning and at the end',
			}),
	}).options({ abortEarly: false });
	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	if (Object.entries(req.body).length === 0) {
		ResponseService.setError(
			402,
			'Please you should keep that empty is never edited'
		);
		return ResponseService.send(res);
	}
	next();
};

export const returnTripValidation = (req, res, next) => {
	const schema = Joi.object({
		departureFrom: Joi.string()
			.trim()
			.strict()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.empty': 'departureFrom is not allowed to be empty',
				'string.min': 'departureFrom length must be at least 3 characters long',
				'string.max':
          ' departureFrom length must be less than or equal to 30 characters long',
				'any.required': 'departureFrom is required',
				'string.trim':
          'departureFrom must not have white spces at the beginning and at the end',
			}),
		departureTo: Joi.string()
			.trim()
			.strict()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.empty': 'departureTo is not allowed to be empty',
				'string.min': 'departureTo length must be at least 3 characters long',
				'string.max':
          'departureTo length must be less than or equal to 30 characters long',
				'any.required': 'departureTo is required',
				'string.trim':
          'departureTo must not have white spces at the beginning and at the end',
			}),
		startingDate: Joi.date()
			.greater('now')
			.utc()
			.format('YYYY-MM-DD')
			.optional()
			.messages({
				'date.greater': 'starting date" must not be in the past',
				'date.format': 'starting date must have format YYYY-MM-DD',
			}),
		returningDate: Joi.date()
			.greater(req.body.startingDate)
			.utc()
			.format('YYYY-MM-DD')
			.optional()
			.messages({
				'date.greater': 'returning date" must be greater than starting date',
				'date.format': 'returning date must have format YYYY-MM-DD',
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
