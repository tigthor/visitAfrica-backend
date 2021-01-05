import models from '../database/models';

const { notification } = models;

/**
 * This is a class for notification
 */
class NotificationService {
	/**
     *
     * @param {object} object
     * @returns {object} this create a notification
     */
	static createNotification(object) {
		return notification.create(object);
	}

	/**
     *
     * @param {object} attribute
     * @returns {object} this returns all notifications
     */
	static getAllNotifications(attribute) {
		return notification.findAll({ where: attribute });
	}
}

export default NotificationService;
