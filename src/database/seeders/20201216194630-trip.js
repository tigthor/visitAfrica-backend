module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(
			'trips',
			[
				{
					departureFrom: 1,
					departureTo: 2,
					startingDate: '2020-12-19',
					returningDate: '2020-12-30',
					reason: 'travel',
					status: 'Open',
					userId: '1',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					departureFrom: 1,
					departureTo: 2,
					startingDate: '2020-12-19',
					returningDate: '2020-12-30',
					reason: 'travel',
					status: 'approved',
					userId: '1',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},
};
