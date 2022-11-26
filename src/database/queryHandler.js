const database = require("./database");

database.connect();

const queryHandler = (query, data) => {
	const databaseQuery = (resolve, reject) => {
		const queryCallBack = (error, result) => {
			if (error) {
				reject(error);
			}
			resolve(result);
		};
		database.query(query, data, queryCallBack);
	};

	return new Promise(databaseQuery);
};

module.exports = { queryHandler };
