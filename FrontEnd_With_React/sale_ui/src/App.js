import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import SalesDetails from "./pages/SalesDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Sales />} />
					<Route path="/sales/:id/details" element={<SalesDetails />} />
					<Route path="*" element={<Sales/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
