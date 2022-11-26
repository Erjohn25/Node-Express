const taskServices = require("../services/taskServices");

const getTask = async (request, response) => {
	const taskData = await taskServices.getTask(request.body);

	console.log("Task Data", taskData);

	return response.send(taskData);
};

const createTask = async (request, response) => {
	const data = request.body;

	const createdTask = await taskServices.createTask(
		data.map((data) => [data.name, data.day, data.reminder])
	);

	return response.send(createdTask);
};
module.exports = { getTask, createTask };
