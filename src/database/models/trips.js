module.exports = (sequelize, DataTypes) => {
	const trips = sequelize.define(
		'trips',
		{
			departureFrom: DataTypes.STRING,
			departureTo: DataTypes.STRING,
			startingDate: DataTypes.DATE,
			returningDate: DataTypes.DATE,
			userId: DataTypes.INTEGER,
			tripType: DataTypes.STRING,
			multiCity: DataTypes.ARRAY(DataTypes.STRING),
			reason: DataTypes.STRING,
			status: DataTypes.STRING,
		},
		{}
	);
	trips.associate = (models) => {
		trips.belongsTo(
			models.User,
			{ foreignKey: 'userId' },
			{ onDelete: 'cascade' },
			{ onUpdate: 'cascade' }
		);
		trips.belongsTo(
			models.location,
			{ foreignKey: 'departureFrom', targetKey: 'id' },
			{ constraints: false }
		);
		trips.belongsTo(
			models.location,
			{ foreignKey: 'departureTo', targetKey: 'id' },
			{ constraints: false }
		);
	};
	return trips;
};
