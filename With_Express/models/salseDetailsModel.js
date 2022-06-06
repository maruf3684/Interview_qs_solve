const mongoose = require("mongoose");

const salesDetailsSchema = new mongoose.Schema(
	{
		SalesId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Sales",
			required: [true, "Sale id is required"],
		},

		ProductId: {
			type: String,
			required: [true, "Product id is required"],
		},

		Unitprice: {
			type: Number,
			required: [true, "Unit price is required"],
		},
		Quantity: {
			type: Number,
			required: [true, "Quantity is required"],
		},
		total: {
			type: Number,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},

);

salesDetailsSchema.pre("save", function (next) {
	this.total = this.Unitprice * this.Quantity;
	next();
});

const SalesDetails = mongoose.model("SalesDetails", salesDetailsSchema);

module.exports = SalesDetails;
