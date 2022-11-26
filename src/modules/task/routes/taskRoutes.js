const express = require("express");
const app = express();
const router = express.Router();
const taskController = require("../controller/taskController");
const cors = require("cors");

app.use(
	cors({
		origin: "http://127.0.0.1:3006"
	})
);

router.get("/get", taskController.getTask);

router.post("/create/task", taskController.createTask);

module.exports = router;
