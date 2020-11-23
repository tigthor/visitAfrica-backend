<<<<<<< HEAD
=======
import { Op } from 'sequelize';
import db from '../database/models';

class Queries {
	static async create(table, data) {
		try {
			const datas = await table.create(data);
			return datas;
		} catch (error) {
			return error;
		}
	}

	static async findOrCreate(table, data, condition) {
		try {
			const datas = await table.findOrCreate({
				where: condition,
				defaults: data,
			});
			return datas[0];
		} catch (error) {
			return error;
		}
	}
}

export default Queries;
>>>>>>> 3f5e3cc (work in progress)
