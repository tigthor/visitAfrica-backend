<<<<<<< HEAD
module.exports = {
<<<<<<< HEAD:src/database/migrations/20201129004549-create-user.js
=======
'use strict';
module.exports = {
>>>>>>> ft: email sent on success user creation
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.DATEONLY,
      },
      tel: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
      // token: {
      //   type: Sequelize.STRING
      // },
      isVerified: {
        type: Sequelize.BOOLEAN,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
<<<<<<< HEAD
=======
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			fullname: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			birthdate: {
				type: Sequelize.STRING,
			},
			tel: {
				type: Sequelize.STRING,
			},
			country: {
				type: Sequelize.STRING,
			},
			city: {
				type: Sequelize.STRING,
			},
			token: {
				type: Sequelize.STRING,
			},
			isVerified: {
				type: Sequelize.STRING,
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
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
>>>>>>> work in progress:src/database/migrations/20201126133120-create-user.js
=======
>>>>>>> ft: email sent on success user creation
};
