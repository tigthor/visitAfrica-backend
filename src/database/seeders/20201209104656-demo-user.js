module.exports = {
	up: (queryInterface) => queryInterface.bulkInsert('Users', [
		{
			fullname: 'LouangeMu',
			email: 'loua@gmail.com',
			password: '$2b$10$YaouW1yQ1dwhk.OU0TdN0eoIjwcaaq03XzFL.oZnaiVVHFFpdSom.',
			gender: 'female',
			birthdate: '2002-10-10',
			tel: '078474622',
			country: 'Rwanda',
			city: 'kigali',
			profilePicture: '078474622',
			role: 'Requester',
			isVerified: true,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			fullname: 'LouangeMu',
			email: 'loua1@gmail.com',
			password: '$2b$10$YaouW1yQ1dwhk.OU0TdN0eoIjwcaaq03XzFL.oZnaiVVHFFpdSom.',
			gender: 'female',
			birthdate: '2002-10-10',
			tel: '078474622',
			country: 'Rwanda',
			city: 'kigali',
			profilePicture: '078474622',
			role: 'Requester',
			isVerified: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		}

	]),
	down: (queryInterface) => queryInterface.bulkDelete('User', null, {}),
};
