/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const metadata = (Sequelize) => ({
	type: Sequelize.ARRAY(Sequelize.STRING),
});
module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all([
		queryInterface.addColumn('trips', 'multiCity', metadata(Sequelize), {
			transaction,
		}),
		queryInterface.addColumn(
			'trips',
			'tripType',
			{
				type: Sequelize.STRING,
			},
			{ transaction }
		),
	])
	),
	down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all([
		queryInterface.removeColumn('trips', 'multiCity', { transaction }),
		queryInterface.removeColumn('trips', 'tripType', { transaction }),
	])
	),
};
