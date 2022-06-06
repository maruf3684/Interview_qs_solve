const express = require("express");
const app = express();
const morgan=require('morgan');
const dbConnect = require("./database/settings");
const errorController=require('./middleware/globalErrorHandler');
const salesRouter=require('./routes/salesRoute');
var cors = require('cors')
app.use(cors())
dbConnect();
app.use(morgan('tiny'));
app.use(express.json());

//routes
app.use('/api/v1/sales',salesRouter);

app.use("*", (req, res, next) => {
	const error = new Error("Requested Url Not found");
	error.statusCode = 404;
	next(error);
});
app.use(errorController);

module.exports = app;