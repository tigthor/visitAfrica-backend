import NotificationService from '../services/notification.service';
import ResponseService from '../services/response.service';

/**
 * This is a notification controller
 */
class NotificationController {
	/**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} this is getting user notifications
     */
	static async getUserNotifications(req, res) {
		const notification = await NotificationService.getAllNotifications({ isRead: false });
		ResponseService.setSuccess(200, 'notifications successfully retrieved', notification);
		ResponseService.send(res);
	}
}

export default NotificationController;
