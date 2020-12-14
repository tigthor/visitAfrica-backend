import ResponseService from '../services/response.service';
import TripService from '../services/trip.service';

/**
 * This is a trip controller.
 */
class TripController {
	/**
  * @static
  * @param {req} req
  * @param {res} res
  * @returns {response} @memberof Trips
  */
	static async requestMultiCityTrip(req, res) {
		const newMultiCityTrip = { ...req.body, userId: req.userData.id, tripType: 'multi-city', status: 'pending' };
		const newTrips = await TripService.createTrip(newMultiCityTrip);
		const { updatedAt, createdAt, ...newTrip } = newTrips.dataValues;
		ResponseService.setSuccess(201, 'Trip request is successfully created', newTrip);
		return ResponseService.send(res);
	}
}

export default TripController;
