module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('locations', [{
			location: 'Mumbai',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			location: 'Dheli',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			location: 'Calcuta',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			location: 'Mundrabadi',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			location: 'Rwamagana',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			location: 'Karama Harashya',
			createdAt: new Date(),
			updatedAt: new Date()
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
