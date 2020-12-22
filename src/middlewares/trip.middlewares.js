import TripService from '../services/trip.service';
import ResponseService from '../services/response.service';
/**
 * this a class for trip validation
 */
class TripMiddleware {
	/**
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next
     * @returns {object} This is a validation trip
     */
	static async validateReturnTrip(req, res, next) {
		const trip = await TripService.findTripByAttribute({ userId: req.userData.id });
		if (trip) {
			ResponseService.setError(409, 'Trip was already created and it is still pending');
			return ResponseService.send(res);
		}
		next();
	}

	/**
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next
     * @returns {object} this will check if the user has returned trip
     */
	static async validateReturnTripBody(req, res, next) {
		if (req.body.departureFrom === req.body.departureTo) {
			ResponseService.setError(400, 'departureFrom can not be the same as departureTo');
			return ResponseService.send(res);
		}
		next();
	}
}

export default TripMiddleware;
