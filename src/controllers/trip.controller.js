import ResponseService from '../services/response.service';
import TripService from '../services/trip.service';

/**
 * thuuu
 */
class TripController {
	/**
   * @param {object} req
   * @param {object} res
   * @returns {object} get a specific user from the database
   */
	static async getSpecificTrip(req, res) {
		const trip = await TripService.findTripByAttribute({ id: req.params.id });
		ResponseService.setSuccess(200, 'Trip retrieved successfully!', trip);
		return ResponseService.send(res);
	}

	/**
   * @param {object} req
   * @param {object} res
   * @returns {response} @memberof Trips
   */
	static async returnTripController(req, res) {
		const tripRequest = req.body;
		const newTripRequest = {
			...tripRequest,
			userId: req.userData.id,
			status: 'pending',
		};
		const trip = await TripService.createTrip(newTripRequest);
		ResponseService.setSuccess(201, 'Trip returned successfully', trip);
		return ResponseService.send(res);
	}

	/**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} uf
   */
	static async updateInfoTrip(req, res) {
		await TripService.updateTripByAttribute(
			{ id: req.params.id },
			{
				departureFrom: req.body.departureFrom,
				departureTo: req.body.departureTo,
				startingDate: req.body.startingDate,
				returningDate: req.body.returningDate,
				reason: req.body.reason,
			}
		);
		ResponseService.setSuccess(200, 'Trip info updated successfully');
		return ResponseService.send(res);
	}

	/**
   * @param {object} req
   * @param {object} res
   * @returns {response} @memberof Trips
   */
	static async requestMultiCityTrip(req, res) {
		const newMultiCityTrip = {
			...req.body,
			userId: req.userData.id,
			tripType: 'multi-city',
			status: 'pending',
		};
		const newTrips = await TripService.createTrip(newMultiCityTrip);
		const { updatedAt, createdAt, ...newTrip } = newTrips.dataValues;
		ResponseService.setSuccess(
			201,
			'Trip request is successfully created',
			newTrip
		);
		return ResponseService.send(res);
	}
}

export default TripController;
