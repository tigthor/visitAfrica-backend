/* eslint-disable no-unused-vars */
/**
 *
 * @param {object} queryInterface
 * @param {object} Sequelize
 * @returns {object} this is requests migration
 */
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('Requests', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		requesterId: {
			type: Sequelize.INTEGER
		},
		tripId: {
			type: Sequelize.INTEGER
		},
		status: {
			type: Sequelize.STRING
		},
		lineManagerId: {
			type: Sequelize.INTEGER
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
}
/**
 * @param {object} queryInterface
 * @param {object} Sequelize
 * @returns {object} this is a sequelize migration for users
 */
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable('Requests');
}
