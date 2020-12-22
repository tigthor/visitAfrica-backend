/* eslint-disable require-jsdoc */
import models from '../database/models';

const { trips } = models;

/**
 *
 *
 * @class TripService
 */
class TripService {
	static createTrip(tripRequest) {
		return trips.create(tripRequest);
	}

	static findTripByAttribute(attribute) {
		return trips.findOne({ where: attribute });
	}
}
export default TripService;
