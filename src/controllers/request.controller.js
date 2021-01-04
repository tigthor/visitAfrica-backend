import ResponseService from '../services/response.service';
import RequestService from '../services/request.service';

/**
 * thuuu
 */
class RequestController {
	/**
   * @param {object} req
   * @param {object} res
   * @returns {object} get a specific user from the database
   */
	static async getRequestTable(req, res) {
		const request = await RequestService.findTripByAttribute({ userId: req.userData.id });
		if (request === null) {
			ResponseService.setError(404, 'Sorry You did not created any request');
			return ResponseService.send(res);
		}
		ResponseService.setSuccess(200, 'requests retrieved successfully!', request);
		return ResponseService.send(res);
	}
}

export default RequestController;
