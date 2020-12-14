import models from '../database/models';

const { location } = models;

/**
 * This is service dealing with locations
 */
class LocationService {
	/**
   * @param {object} attribute
   * @returns {object} deals with location
   */
	static findLocationsByAttribute(attribute) {
		return location.findAll({
			where: { ...attribute },
		});
	}
}

export default LocationService;
