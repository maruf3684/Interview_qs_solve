const mongoose = require("mongoose");

async function dbConnect() {
	try {
        console.log("DB Connecting...");
		await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
        console.log(`DB connected successFully`);
	} catch (error) {
		console.log(error);
	}
}

module.exports = dbConnect;