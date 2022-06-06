import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Sales = () => {
	const [sales, addsales] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const res = await axios.get("http://localhost:8000/api/v1/sales/");
				addsales(res.data.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		}
		fetchData();
	}, []);



	const renderSales = () => {
		return sales.map((sale, index) => {
			return (
				<tr key={index}>
					<td className="px-4 py-3 font-bold text-green-500">
						{" "}
						<Link to={`/sales/${sale._id || sale.id }/details`}> {sale.CustomerName}</Link>{" "}
					</td>
					<td className="px-4 py-3">{sale.MobileNo}</td>
					<td className="px-4 py-3">{sale.TotalAmount}</td>
				</tr>
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
			) : (
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
								All Sales
							</h1>
							<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
								Click Name to view details
							</p>
						</div>
						<div className="lg:w-2/3 w-full mx-auto overflow-auto">
							<table className="table-auto w-full text-left whitespace-no-wrap">
								<thead>
									<tr>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
											Customer Name
										</th>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
											Mobile No
										</th>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
											Total Amount
										</th>
									</tr>
								</thead>
								<tbody>{renderSales(sales)}</tbody>
							</table>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Sales;
