module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('notifications', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER
			},
			message: {
				type: Sequelize.STRING
			},
			requestId: {
				type: Sequelize.INTEGER
			},
			isRead: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable('notifications');
	}
};
