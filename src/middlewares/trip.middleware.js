/* eslint-disable import/prefer-default-export */
import { Op } from 'sequelize';
import TripService from '../services/trip.service';
import ResponseService from '../services/response.service';
import LocationService from '../services/location.service';

export const checkIfTripExist = async (req, res, next) => {
	const trip = await TripService.findTripByAttribute({
		userId: req.userData.id,
	});
	if (trip) {
		ResponseService.setError(409, 'trip is already exist');
		return ResponseService.send(res);
	}
	next();
};

export const checkLocation = async (req, res, next) => {
	let locations = [
		Number(req.body.departureFrom),
		Number(req.body.departureTo),
	];
	locations = locations.filter((n) => n);
	const locationsData = await LocationService.findLocationsByAttribute({
		id: { [Op.in]: locations },
	});
	const locationsDataIds = locationsData.map(({ dataValues }) => dataValues.id);
	const NoExistLocation = locations.filter(
		(location) => !locationsDataIds.includes(location)
	);
	if (NoExistLocation.length !== 0) {
		ResponseService.setError(
			400,
			`location with id ${NoExistLocation} is not available`
		);
		return ResponseService.send(res);
	}
	next();
};

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} this is for validating trip
 */
export const validateEditTrip = async (req, res, next) => {
	const trip = await TripService.findTripByAttribute({ id: req.params.id });
	if (!trip) {
		ResponseService.setError(404, 'The trip can not be found');
		return ResponseService.send(res);
	}
	if (req.userData.role !== 'Requester') {
		ResponseService.setError(403, 'You can not perform this task');
		return ResponseService.send(res);
	}

	if (trip.status !== 'pending') {
		ResponseService.setError(
			403,
			'The trip request have sent sorry you can not edit'
		);
		return ResponseService.send(res);
	}

	if (req.userData.id !== trip.userId) {
		ResponseService.setError(
			403,
			'Oooops you can not edit the trip you have not created'
		);
		return ResponseService.send(res);
	}

	next();
};

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} This is a validation trip
 */
export const validateReturnTrip = async (req, res, next) => {
	const trip = await TripService.findTripByAttribute({
		userId: req.userData.id
	});
	if (trip) {
		ResponseService.setError(
			409,
			'Trip was already created and it is still pending'
		);
		return ResponseService.send(res);
	}
	next();
};

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} this will check if the user has returned trip
 */
export const validateReturnTripBody = async (req, res, next) => {
	if (req.body.departureFrom === req.body.departureTo) {
		ResponseService.setError(
			400,
			'departureFrom can not be the same as departureTo'
		);
		return ResponseService.send(res);
	}
	next();
};
