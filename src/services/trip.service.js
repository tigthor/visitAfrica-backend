import models from '../database/models';

const { trips } = models;
/**
   * @param {object} attribute
   * @param {object} property
   * @return {object} update user by attribute
   */
class TripService {
	/**
   * @param {object} attribute
   * @param {object} property
   * @return {object} update user by attribute
   */
	static async updateTripByAttribute(attribute, property) {
		return trips.update(property, { where: attribute });
	}

	/**
   * @param {object} attribute
   * @returns {object} getting a user that is already logged in
   */
	static findTripByAttribute(attribute) {
		return trips.findOne({ where: attribute });
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

	/**
   * Gets all Trip request .
   * @param {object} param condition
   * @returns {object} The requests object.
   */
	static getAllRequets(param) {
		return trips.findAll({ param });
	}
}
export default TripService;
