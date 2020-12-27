/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const metadata = (Sequelize) => ({
	type: Sequelize.INTEGER,
	allowNull: true,
});
module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all([
		queryInterface.addColumn(
			'Users',
			'line_manager_id',
			metadata(Sequelize),
			{ transaction }
		),
	])
	),
	down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all([
		queryInterface.removeColumn('Users', 'line_manager_id', {
			transaction,
		}),
	])
	),
};
