import models from '../database/models';

const emailExists = async (email) => {
	try {
		const emailExists = await models.User.findOne({ where: { email } });
		return emailExists;
	} catch (error) {
		return error;
	}
};

export default emailExists;
