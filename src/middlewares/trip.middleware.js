/* eslint-disable import/prefer-default-export */
import { Op } from 'sequelize';
import TripService from '../services/trip.service';
import ResponseService from '../services/response.service';
import LocationService from '../services/location.service';

/**
     * @param {object} req
     * @param {object} res
     * @param {object} next
     * @return {object} this is going to check if trip isre already created
     */
export const checkIfTripExist = async (req, res, next) => {
	const trip = await TripService.findTripByAttribute({ userId: req.userData.id });
	if (trip) {
		ResponseService.setError(409, 'trip is already exist');
		return ResponseService.send(res);
	}
	next();
};

export const checkLocation = async (req, res, next) => {
	const locations = [Number(req.body.departureFrom), Number(req.body.departureTo)];
	const locationsData = await LocationService.findLocationsByAttribute({
		id: { [Op.in]: locations }
	});
	const locationsDataIds = locationsData.map(({ dataValues }) => dataValues.id);
	const NoExistLocation = locations.filter((location) => !locationsDataIds.includes((location)));
	if (NoExistLocation.length !== 0) {
		ResponseService.setError(400, `location with id ${NoExistLocation} is not available`);
		return ResponseService.send(res);
	}
	next();
};
