import db from '../database/models';
import Queries from './index';

class UserServices {
	static async CreateUser(NewUser) {
		try {
			const user = await Queries.create(db.user, NewUser);
			return user;
		} catch (error) {
			return error;
		}
	}

	static async findEmail(email) {
		try {
			const emailExists = await db.User.findOne({ where: { email } });
			return emailExists;
		} catch (error) {
			return error;
		}
	}

	static async activeUser(email, updateUser) {
		try {
			const userToUpdate = await db.user.findOne({
				where: {
					email,
				},
			});
			if (userToUpdate && userToUpdate.isVerified) {
				return {
					status: 409,
					message: 'user already activated',
				};
			}
			if (userToUpdate) {
				await db.user.update(updateUser, {
					where: {
						email,
					},
					returning: true,
					plain: true,
				});

				return {
					status: 200,
					message: 'user account successfuly activated',
				};
			}
			return {
				status: 404,
				message: 'User not found',
			};
		} catch (error) {
			return {
				status: 400,
				message: error,
			};
		}
	}
}
export default UserServices;
