import models from '../database/models';

const emailExists = async (email) => {
	try {
		const emailexists = await models.User.findOne({
			where: { email },
		});
		return emailexists;
	} catch (error) {
		return error;
	}
};

export default emailExists;
