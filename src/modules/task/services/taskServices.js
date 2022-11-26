const queryHelper = require("../../../database/queryHandler");

const taskServices = {};

taskServices.getTask = async () => {
	const query = `SELECT * FROM tasklist`;

	return await queryHelper
		.queryHandler(query)
		.catch((error) => console.log(error));
};

taskServices.createTask = async (data) => {
	const query = `INSERT INTO tasklist (name, day, reminder) VALUES ?`;

	return await queryHelper
		.queryHandler(query, [data])
		.catch((error) => console.log(error));
};

module.exports = taskServices;
