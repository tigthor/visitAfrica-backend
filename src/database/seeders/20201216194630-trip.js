module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('trips', [{
			departureFrom: 'Kigali',
			departureTo: 'Rubavu',
			startingDate: '2020-12-19',
			returningDate: '2020-12-30',
			reason: 'travel',
			status: 'Open',
			userId: '1',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			departureFrom: 'Kigali',
			departureTo: 'Rubavu',
			startingDate: '2020-12-19',
			returningDate: '2020-12-30',
			reason: 'travel',
			status: 'approved',
			userId: '1',
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	}
};
