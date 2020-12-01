export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('Users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		fullname: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		gender: {
			type: Sequelize.ENUM('male', 'female'),
		},
		birthdate: {
			type: Sequelize.DATEONLY,
			allowNull: true,
		},
		tel: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		country: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		city: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		profilePicture: {
			type: Sequelize.STRING,
			defaultValue: 'avatar.jpg',
		},
		role: {
			type: Sequelize.ENUM('Super Administrator', 'Travel Administrator', 'Travel Team Member', 'Manager', 'Requester'),
			defaultValue: 'Requester',
		},
		isVerified: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
}
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable('Users');
}
