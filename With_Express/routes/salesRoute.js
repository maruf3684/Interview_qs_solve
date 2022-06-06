const express = require("express");
const salesRouter = express.Router();
const salesController = require("../controllers/salesController");

salesRouter.route("/").get(salesController.getAllSales);
salesRouter.route("/:id/details").get(salesController.getSale);



//extra code that not mensioned in the assignment
salesRouter.route("/").post(salesController.createSale);
salesRouter.route("/:id/details").post(salesController.addSalesDetails);

module.exports = salesRouter;