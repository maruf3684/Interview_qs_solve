import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
const SalesDetails = () => {
	let { id } = useParams();

	const [salesDetails, addsalesDetails] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const res = await axios.get(
					`http://localhost:8000/api/v1/sales/${id}/details/`
				);
				addsalesDetails(res.data.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	const rendersalesDetails = () => {
		return salesDetails.map((sale, index) => {
			return (
				<div key={index} className="p-4 md:w-1/3 shadow-lg">
					<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<div className="p-6">
							<h1 className="title-font text-lg font-medium text-green-400 mb-3">
								ID: {sale.ProductId}
							</h1>
							<p className="leading-relaxed ">Quantity: {sale.Quantity}</p>

							<p className="leading-relaxed ">Unitprice: {sale.Unitprice}</p>

							<p className="leading-relaxed mt-3 font-bold text-lime-500 ">
								Total Price: {sale.total}
							</p>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<>
			{loading ? (
				<h1 className="text-center mt-24 text-2xl text-lime-400">Loading...</h1>
			) : error ? (
				<h1 className="text-center mt-24 text-2xl text-red-500">
					Error Loading Page
				</h1>
			) : salesDetails.length <= 0 ? (
				<h1 className="text-center mt-24 text-2xl text-teal-300 font-bold">
					No Sales Details Exist
				</h1>
			) : (
				<section className="text-gray-600 body-font ">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap -m-4">{rendersalesDetails()}</div>
					</div>
				</section>
			)}
		</>
	);
};

export default SalesDetails;
