const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
	{
		CustomerName: {
			type: String,
			trim: true,
			required: [true, "Customer Name name is required"],
			minlength: [3, "Customer Name must be at least 3 characters long"],
			maxlength: [10, "Customer Name must be less than 10 characters long"],
		},
		MobileNo: {
			type: String,
			required: [true, "Mobile Number is required"],
			trim: true,
			validate: {
				validator: function (v) {
					var reg = new RegExp("^[0-9]*$");
					return reg.test(v);
				},
				message: "Mobile Number must be numeric",
			},
		},

		TotalAmount: {
			type: Number,
			required: [true, "Total price is required"],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},

);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;