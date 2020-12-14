import models from '../database/models';

const { trips } = models;

/**
 *
 *
 * @class TripService
 */
class TripService {
	/**
 *
 * @static
 * @param {object} attribute
 * @returns {object} this function finds trip
 */
	static findTripByAttribute(attribute) {
		return trips.findOne({
			where: { ...attribute }
		});
	}

	/**
       *
       *
       * @static
       * @param {newTrip} newTrip
       * @returns {newTrip} @memberof TripService
       */
	static createTrip(newTrip) {
		return trips.create(newTrip);
	}
}

export default TripService;
