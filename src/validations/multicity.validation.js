/* eslint-disable import/prefer-default-export */
import joiBase from 'joi';
import joiDate from '@hapi/joi-date';
import ResponseService from '../services/response.service';

const Joi = joiBase.extend(joiDate);

export const validateTrip = async (req, res, next) => {
	const schema = Joi.object({
		startingDate: Joi.date()
			.greater('now')
			.utc()
			.format('YYYY-MM-DD')
			.required()
			.messages({
				'date.greater': 'date of travel" must not be in the past',
				'date.format': 'date of travel must have format YYYY-MM-DD',
				'any.required': 'travel date is required',
			}),
		returningDate: Joi.date()
			.greater(req.body.startingDate)
			.utc()
			.format('YYYY-MM-DD')
			.required()
			.messages({
				'date.greater': 'date of travel must be greater than departure date',
				'date.format': 'date of travel must have format YYYY-MM-DD',
				'any.required': 'travel date is required',
			}),
		reason: Joi.string()
			.min(5)
			.trim()
			.regex(/^[a-zA-Z .]+$/)
			.required()
			.messages({
				'string.base': 'travelling reason must be a string',
				'string.empty': 'Reason must not be empty',
				'string.pattern.base':
          'Please know the difference between travel reason and telephone number',
				'any.required': 'travel reason is required',
			}),
		departureFrom: Joi.number().integer().min(1).required()
			.messages({
				'number.base': 'city must be a an id',
				'number.empty': 'departure from city must not be empty',
				'any.required': 'departure from location is required',
			}),
		departureTo: Joi.number().integer().min(1).required()
			.messages({
				'number.base': 'city must be a an id',
				'number.empty': 'departure from city must not be empty',
				'any.required': 'departure from location is required',
			}),
		multiCity: Joi.array().required().messages({
			'any.required': 'tripLocation must not be empty',
			'array.empty': 'tripLocation data must not be empty',
		}),
	}).options({ abortEarly: false });
	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(402, errors);
		return ResponseService.send(res);
	}

	if (req.body.departureFrom === req.body.departureTo) {
		ResponseService.setError(402, 'Please enter different locations');
		return ResponseService.send(res);
	}
	next();
};

export const validateMultiCity = async (req, res, next) => {
	const schema = Joi.array()
		.items(
			Joi.object({
				startingDate: Joi.date()
					.greater('now')
					.utc()
					.format('YYYY-MM-DD')
					.required()
					.messages({
						'date.greater': 'date of travel" must not be in the past',
						'date.format': 'date of travel must have format YYYY-MM-DD',
						'any.required': 'travel date is required',
					}),
				returningDate: Joi.date()
					.greater(req.body.startingDate)
					.utc()
					.format('YYYY-MM-DD')
					.required()
					.messages({
						'date.greater':
              'date of returning from travel must be greater than departure date',
						'date.format': 'date of travel must have format YYYY-MM-DD',
						'any.required': 'travel date is required',
					}),
				name: Joi.string()
					.min(5)
					.trim()
					.regex(/^[a-zA-Z .]+$/)
					.required()
					.messages({
						'string.base': 'travelling city must be a string',
						'string.empty': 'travelling city must not be empty',
						'string.pattern.base':
              'Please know the difference between travel reason and telephone number',
						'any.required': 'travelling city is required',
					}),
			}).options({ abortEarly: false })
		)
		.min(2)
		.required()
		.messages({
			'array.min':
        'Multi city have to be more than one destination, otherwise choose either one way or return trip',
			'array.base': 'Request body must be an array',
		})
		.options({ abortEarly: false });
	const { error } = schema.validate(req.body.multiCity);
	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(402, errors);
		return ResponseService.send(res);
	}
	next();
};
