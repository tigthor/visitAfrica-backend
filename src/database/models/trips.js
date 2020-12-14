module.exports = (sequelize, DataTypes) => {
	const trips = sequelize.define('trips', {
		departureFrom: DataTypes.INTEGER,
		departureTo: DataTypes.INTEGER,
		startingDate: DataTypes.DATE,
		returningDate: DataTypes.DATE,
		userId: DataTypes.INTEGER,
		tripType: DataTypes.STRING,
		multiCity: DataTypes.ARRAY(DataTypes.STRING),
		reason: DataTypes.STRING,
		status: DataTypes.STRING,
	}, {});
	trips.associate = (models) => {
		trips.belongsTo(
			models.User,
			{ foreignKey: 'userId' },
			{ onDelete: 'cascade' },
			{ onUpdate: 'cascade' }
		);
	};
	return trips;
};
