import TokenService from '../../services/token.service';
import UserService from '../../services/user.service';

export const userToUpdateRole = {
	fullname: 'Alan Shearer',
	email: 'tigthor1337@gmail.com',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
};
export const userToVerify = {
	fullname: 'Alan Shearer',
	email: 'tigthor1337@gmail.com',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
};
export const verifyPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJNdWd3YW5lemE3MjBAZGF2aXNjb2xsZWdlLmNvbSIsImlhdCI6MTYwODEyNjQ2MywiZXhwIjoxNjA4MTk4NDYzfQ.4AgjkwRY1Y0Ju5T8dLgYdKs7upf8vXZ80s5tWkQiIzc';
export const userValidate = {
	fullname: 'Alan Shearer',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
};

export const superAdmin = {
	id: 1,
	fullname: 'Hyacinthe Mutoni',
	email: 'hyacinthe@daviscollege.com',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	role: 'superAdmin',
	isVerified: true,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const userEmailExist = {
	fullname: 'Alan Shearer',
	email: 'tigthor1337@gmail.com',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
};

export const newUser = {
	id: 90,
	fullname: 'Smith Kendy',
	email: 'smith@gmail.com',
	password: 'Token123',
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
};

export const multiCity = {
	departureFrom: '1',
	departureTo: '2',
	startingDate: '2022-12-25',
	returningDate: '2022-12-30',
	multiCity: [
		{
			name: 'Hawai',
			startingDate: '2022-12-26',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-26',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-26',
			returningDate: '2022-12-30',
		},
	],
	reason: 'travel',
};

export const multiCityFalseId = {
	departureFrom: '1000',
	departureTo: '20000',
	startingDate: '2022-12-25',
	returningDate: '2022-12-30',
	multiCity: [
		{
			name: 'Hawai',
			startingDate: '2022-12-26',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-26',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-26',
			returningDate: '2022-12-30',
		},
	],
	reason: 'travel',
};

export const wrongMultiCityArray = {
	departureFrom: 1,
	departureTo: 2,
	startingDate: '2022-12-25',
	returningDate: '2022-12-30',
	multiCity: [
		{
			name: 'Budapest',
			startingDate: '2020-12-26',
			returningDate: '2020-12-30',
		},
	],
	reason: 'travel',
};

export const wrongMultiCityLocation = {
	departureFrom: 1,
	departureTo: 1,
	startingDate: '2022-12-20',
	returningDate: '2022-12-30',
	multiCity: [
		{
			name: 'Budapest',
			startingDate: '2022-12-22',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-22',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-22',
			returningDate: '2022-12-30',
		},
	],
	reason: 'travel',
};

export const wrongMultiCityLocationSecond = {
	departureFrom: '5',
	departureTo: '5',
	startingDate: '2022-12-20',
	returningDate: '2022-12-30',
	multiCity: [
		{
			name: 'Budapest',
			startingDate: '2022-12-22',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-22',
			returningDate: '2022-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2022-12-22',
			returningDate: '2022-12-30',
		},
	],
	reason: 'travel',
};

export const wrongMultiCityDate = {
	departureFrom: '1',
	departureTo: '2',
	startingDate: '2020-12-30',
	returningDate: '2020-12-30',
	multiCity: [
		{
			name: 'Budapest',
			startingDate: '2020-12-20',
			returningDate: '2020-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2020-12-20',
			returningDate: '2020-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2020-12-20',
			returningDate: '2020-12-30',
		},
	],
	reason: 'travel',
};

export const wrongMultiCity = {
	departureFrom: 'Romania',
	departureTo: 'Budapest',
	startingDate: '2020-12-20',
	returningDate: '2020-12-30',
	multiCity: [
		{
			name: 'Budapest',
			startingDate: '2020-12-20',
			returningDate: '2020-12-00',
		},
		{
			name: 'Budapest',
			startingDate: '2020-12-20',
			returningDate: '2020-12-30',
		},
		{
			name: 'Budapest',
			startingDate: '2020-12-20',
			returningDate: '2020-12-30',
		},
	],
	reason: 'travel',
};
export const mockToken = TokenService.generateToken(newUser);

export const token = TokenService.generateToken({
	id: newUser.id,
	fullname: newUser.fullname,
	email: newUser.email,
	birthdate: newUser.birthdate,
	gender: newUser.gender,
	tel: newUser.tel,
	country: newUser.country,
	city: newUser.city,
	profilePicture: newUser.profilePicture,
	role: newUser.role,
	createdAt: newUser.createdAt,
	updatedAt: newUser.updatedAt,
});
export const requesterToken1 = TokenService.generateToken({
	id: 1,
	fullname: 'LouangeMu',
	email: 'loua@gmail.com',
	gender: 'female',
	birthdate: '2002-10-10',
	tel: '078474622',
	country: 'Rwanda',
	city: 'kigali',
	profilePicture: '078474622',
	role: 'Requester',
	isVerified: true,
});

export const altRequesterToken = TokenService.generateToken({
	id: 5,
	gender: 'female',
	birthdate: '2002-10-10',
	tel: '078474622',
	country: 'Rwanda',
	city: 'kigali',
	profilePicture: '078474622',
	role: 'Requester',
	isVerified: true,
});

export const requesterMockToken = TokenService.generateToken({
	id: 2,
	fullname: 'LouangeMu',
	gender: 'female',
	birthdate: '2002-10-10',
	tel: '078474622',
	country: 'Rwanda',
	city: 'kigali',
	profilePicture: '078474622',
	role: 'Requester',
	isVerified: true,
});

export const tokenToVerify = TokenService.generateToken({
	email: userToVerify.email,
});
export const facebookFakeUser = {
	id: '1199970126416029',
	name: {
		familyName: 'liliane',
		givenName: 'nishimwe',
		middleName: 'nishl',
	},
	emails: [{ value: 'lilianenishi@daviscollege.com' }],
	provider: 'facebook',
	_raw:
    '{"email":"lilianenishi@daviscollege.com","last_name":"liliane","first_name":"nishimwe","middle_name":"nishi","id":"1199970126416027"}',
	_json: {
		email: 'lilianenishi@daviscollege.com',
		last_name: 'liliane',
		first_name: 'nishimwe',
		middle_name: 'nishi',
		id: '1199970126416029',
	},
};

export const googleFakeUser = {
	id: '1199970126416027',
	displayName: 'liliane nishimwe',
	name: {
		familyName: 'nishimwe',
		givenName: 'liliane',
	},
	emails: [
		{
			value: 'liliane.lnishimwe120@daviscollege.com',
			verified: true,
		},
	],
	photos: [
		{
			value:
        'https://lh3.googleusercontent.com/a-/AAuE7mAc5uxnvN_E2mncc8aZt3BcdMHamBVSAW78HpNU',
		},
	],
	provider: 'google',
	_raw:
    '{\n  "sub": "1199970126416027",\n  "name": "liliane nishimwe",\n  "given_name": "liliane",\n  "family_name": "nishimwe",\n  "picture": "https://lh3.googleusercontent.com/a-/AAuE7mAc5uxnvN_E2mncc8aZt3BcdMHamBVSAW78HpNU",\n  "email": "liliane.lnishimwe120@daviscollege.com",\n  "email_verified": true,\n  "locale": "en",\n  "hd": "soma.com"\n}',
	_json: {
		sub: '11999701264160272',
		name: 'liliane nishimwe',
		given_name: 'liliane',
		family_name: 'nishimwe',
		picture:
      'https://lh3.googleusercontent.com/a-/AAuE7mAc5uxnvN_E2mncc8aZt3BcdMHamBVSAW78HpNU',
		email: 'lnishimwe120@daviscollege.com',
		email_verified: true,
		locale: 'en',
		hd: 'soma.com',
	},
};

export const fakeUser = (req, res, next) => {
	const urlPathSections = req.url.split('/');
	const resourceServer = urlPathSections[urlPathSections.length - 1];
	req.user = resourceServer === 'facebook' ? facebookFakeUser : googleFakeUser;
	next();
};
export const superAdminToken = TokenService.generateToken(superAdmin);

export const fakeToken = 'eyJhbGciOiJIUzI1NiIsInRcCI6IkpXVCJ9.eyJpZCI6NTEsImZ1bGxuYW1lIjoiTG91YW5nZSBNdWhhd2UiLCJlbWFpbCI6IkxtdWhhd2VuQGdtYWlsLmNvbSIsImJpcnRoZGF0ZSI6IjE5OTAtMDEtMDEiLCJnZW5kZXIiOiJmZW1hbGUiLCJ0ZWwiOiIwNzAwMDAwMDAwIiwiY291bnRyeSI6InppbWJhYndlIiwiY2l0eSI6IktpZ2FsaSIsInByb2ZpbGVQaWN0dXJlIjoiYXZhdGFyLmpwZyIsInJvbGUiOiJSZXF1ZXN0ZXIiLCJjcmVhdGVkQXQiOiIyMDIwLTEyLTA1VDEyOjU3OjI2Ljg0OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTEyLTA1VDEyOjU3OjI2Ljg0OVoiLCJpYXQiOjE2MDcxNzMwNDcsImV4cCI6MTYwNzI0NTA0N30.FrK9rssbqZEgvcEuRlMyfAWt9ThurBQ1FmLfOBO9YsU';

export const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJBbGFuIFNoZWFyZXIiLCJlbWFpbCI6InRpZ3Rob3IxMzM3QGdtYWlsLmNvbSIsImJpcnRoZGF0ZSI6IjIwMjAtMDEtMDEiLCJnZW5kZXIiOiJtYWxlIiwidGVsIjoiMDc4OTAwMDAwMCIsImNvdW50cnkiOiJrZW55YSIsImNpdHkiOiJtb21iYXNhIiwiaWF0IjoxNjA3MTc0MzE4LCJleHAiOjE2MDcxNzQzMjN9.KDmaQt0r3kVbkeAnxWcmjGOWjZYnR4PIDT9QhwF1JSE';

export const userRoleData = {
	id: '1',
	body: {
		role: 'superAdmin',
	},
};

export const userData = {
	id: '1',
	body: {
		role: 'superAdmin',
	},
};
export const createUser = async () => {
	await UserService.createUser(newUser);
};

export const forgetPassword = {
	email: 'BMugwaneza720@daviscollege.com',
};

export const userToForgetPassword = {
	email: 'tigthor1337@gmail.com',
};
export const passwordMatch = {
	password: 'Lulu@1230!',
	confirmPassword: 'Lulu@1230!',
};
export const passwordDonotMatch = {
	password: 'Lulu@1237',
	confirmPassword: 'Lulu@123556',
};
export const validate = {
	password: 'ggggggg',
	confirmPassword: 'ghshsnnn',
};
export const validateUserRoleBody = {
	userId: 'hhh',
	role: ' ',
};

export const multiCityToken = TokenService.generateToken({
	id: 5,
	fullname: 'LouangeMu',
	email: 'chicarita@gmail.com',
	password: '$2b$10$YaouW1yQ1dwhk.OU0TdN0eoIjwcaaq03XzFL.oZnaiVVHFFpdSom.',
	gender: 'female',
	birthdate: '2002-10-10',
	tel: '078474622',
	country: 'Rwanda',
	city: 'kigali',
	profilePicture: '078474622',
	role: 'Requester',
	isVerified: true,
	line_manager_id: 4,
});

export const forgotPasswordToken = TokenService.generateToken(forgetPassword);
export const returnTrip = {
	departureFrom: 'kakiru',
	departureTo: 'rubavu',
	startingDate: '2022-12-30',
	returningDate: '2023-01-01',
	reason: 'vvv',
};

export const wrongReturnTripLocation = {
	departureFrom: 'kakiru',
	departureTo: 'kakiru',
	startingDate: '2021-12-30',
	returningDate: '2022-01-01',
	reason: 'vvv',
};

export const userToken = TokenService.generateToken({
	id: 3,
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
});
export const wrongReturnTrip = {
	departureFrom: '',
	departureTo: 'rubavu',
	startingDate: '2020-12-30',
	returningDate: '2021-01-01',
};
