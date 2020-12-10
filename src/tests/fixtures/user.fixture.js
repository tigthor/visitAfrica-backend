import TokenService from '../../services/token.service';
import UserService from '../../services/user.service';
import BcryptService from '../../services/bcrypt.service';

export const userToVerify = {
	fullname: 'Alan Shearer',
	email: 'tigthor1337@gmail.com',
	password: BcryptService.hashPassword('InWebThereisaserverticktockkk1!!21'),
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
};

export const userValidate = {
	fullname: 'Alan Shearer',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	gender: 'male',
	tel: '0789000000',
	country: 'kenya',
	city: 'mombasa',
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

export const tokenToVerify = TokenService.generateToken({ email: userToVerify.email });
export const facebookFakeUser = {
	id: '1199970126416027',
	name: {
		familyName: 'liliane',
		givenName: 'nishimwe',
		middleName: 'nishl',
	},
	emails: [{ value: 'lnishimwe120@daviscollege.com' }],
	provider: 'facebook',
	_raw:
    '{"email":"lnishimwe120@daviscollege.com","last_name":"liliane","first_name":"nishimwe","middle_name":"nishi","id":"1199970126416027"}',
	_json: {
		email: 'lnishimwe120@daviscollege.com',
		last_name: 'liliane',
		first_name: 'nishimwe',
		middle_name: 'nishi',
		id: '1199970126416027',
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

export const fakeToken = 'eyJhbGciOiJIUzI1NiIsInRcCI6IkpXVCJ9.eyJpZCI6NTEsImZ1bGxuYW1lIjoiTG91YW5nZSBNdWhhd2UiLCJlbWFpbCI6IkxtdWhhd2VuQGdtYWlsLmNvbSIsImJpcnRoZGF0ZSI6IjE5OTAtMDEtMDEiLCJnZW5kZXIiOiJmZW1hbGUiLCJ0ZWwiOiIwNzAwMDAwMDAwIiwiY291bnRyeSI6InppbWJhYndlIiwiY2l0eSI6IktpZ2FsaSIsInByb2ZpbGVQaWN0dXJlIjoiYXZhdGFyLmpwZyIsInJvbGUiOiJSZXF1ZXN0ZXIiLCJjcmVhdGVkQXQiOiIyMDIwLTEyLTA1VDEyOjU3OjI2Ljg0OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTEyLTA1VDEyOjU3OjI2Ljg0OVoiLCJpYXQiOjE2MDcxNzMwNDcsImV4cCI6MTYwNzI0NTA0N30.FrK9rssbqZEgvcEuRlMyfAWt9ThurBQ1FmLfOBO9YsU';

export const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJBbGFuIFNoZWFyZXIiLCJlbWFpbCI6InRpZ3Rob3IxMzM3QGdtYWlsLmNvbSIsImJpcnRoZGF0ZSI6IjIwMjAtMDEtMDEiLCJnZW5kZXIiOiJtYWxlIiwidGVsIjoiMDc4OTAwMDAwMCIsImNvdW50cnkiOiJrZW55YSIsImNpdHkiOiJtb21iYXNhIiwiaWF0IjoxNjA3MTc0MzE4LCJleHAiOjE2MDcxNzQzMjN9.KDmaQt0r3kVbkeAnxWcmjGOWjZYnR4PIDT9QhwF1JSE';

export const createUser = async () => {
	await UserService.createUser(newUser);
};
