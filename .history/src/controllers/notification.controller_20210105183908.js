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
        const notifications = await NotificationService.getAllNotifications({ isRead: false });
        console.log(notificati);
		const { id, createdAt, updatedAt, ...notificationToSend } = notifications;
		ResponseService.setSuccess(200, 'notifications successfully retrieved', notificationToSend);
		ResponseService.send(res);
	}
}

export default NotificationController;
