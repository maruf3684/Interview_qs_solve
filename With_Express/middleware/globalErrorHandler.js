const errorController = (err, req, res, next) => {
	console.log("Global error handler");
	err.statusCode = err.statusCode || 500;
	return res.status(err.statusCode).json({
		success: false,
		message: err.message || "unknown error message",
		status: err.status || "unknown error",
		error: err,

	});
};

module.exports = errorController;