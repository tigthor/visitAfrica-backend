import models from '../database/models';

const { trips } = models;

/**
 * this is a user service
 */
class TripService {
	/**
	 * @param {object} attribute
	 * @param {object} property
	 * @return {object} update user by attribute
	 */
	static async updateTripByAttribute(attribute, property) {
		return trips.update(property, { where: attribute,
		});
	}

	/**
	 * @param {object} attribute
	 * @returns {object} getting a user that is already logged in
	 */
	static findTripByAttribute(attribute) {
		return trips.findOne({ where: attribute });
	}
}
export default TripService;
