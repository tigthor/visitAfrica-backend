module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('trips', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			departureFrom: {
				type: Sequelize.STRING
			},
			departureTo: {
				type: Sequelize.STRING
			},
			startingDate: {
				type: Sequelize.DATE
			},
			returningDate: {
				type: Sequelize.DATE
			},
			reason: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.STRING
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
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
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('trips');
	}
};
