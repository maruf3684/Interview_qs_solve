const catchAsync = require("../middleware/asyncErrorHandler");
const Sales = require("../models/salesModel");
const SalesDetails = require("../models/salseDetailsModel");
const mongoose = require("mongoose");

class SalseController {
	static getAllSales = catchAsync(async (req, res, next) => {
		const allSales = await Sales.find().select("-__v");
		res.status(200).json({
			status: "success",
			total: allSales.length,
			data: allSales,
		});
	});

	static getSale = catchAsync(async (req, res, next) => {
		var isValid = mongoose.Types.ObjectId.isValid(req.params.id);
		if (!isValid) {
			return res.status(404).json({
				status: "fail",
				message: `Sale with id ${req.params.id} is not valid mongoose id`,
			});
		}
		const sale = await SalesDetails.find({ SalesId: req.params.id }).select(
			"-__v"
		);
		if (!sale) {
			return res.status(404).json({
				status: "fail",
				message: "SaleDetails not found",
			});
		}
		res.status(200).json({
			status: "success",
			data: sale,
		});
	});





	//extra code not mensioned in the assignment

	static createSale = catchAsync(async (req, res, next) => {
		const newSale = await Sales.create(req.body);
		res.status(201).json({
			status: "success",
			data: newSale,
		});
	});

	static addSalesDetails = catchAsync(async (req, res, next) => {
		let id = req.body.SalesId || req.params.id;
		var isValid = mongoose.Types.ObjectId.isValid(id);
		if (!isValid) {
			return res.status(404).json({
				status: "fail",
				message: `Sale with id ${id} is not valid mongoose id`,
			});
		}
		const newSaleDetails = await SalesDetails.create(req.body);
		res.status(201).json({
			status: "success",
			data: newSaleDetails,
		});
	});
}

module.exports = SalseController;
