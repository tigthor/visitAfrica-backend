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
     * @returns {object} this is getting all notifications
     */
	static async getAllNotifications(req, res) {
		const notifications = await NotificationService.getAllNotifications({
			userId: req.userData.id
		});
		const newNotificationArray = notifications.map((notification) => {
			const { dataValues } = notification;
			const { id, userId, createdAt, updatedAt, ...notificationToSend } = dataValues;
			return notificationToSend;
		});
		ResponseService.setSuccess(200, 'notifications successfully retrieved', newNotificationArray);
		ResponseService.send(res);
	}
}

export default NotificationController;