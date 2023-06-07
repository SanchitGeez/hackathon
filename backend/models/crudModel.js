const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	subject: {
		type: String

	},
	topic: {
		type: String

	},
	date: {
		type: Number


	},
	month: {
		type: Number

	}
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");