import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Header = () => {
	return (
		<header className="text-gray-600 body-font bg-green-300">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		     <Link to="/" className="text-yellow-50 text-2xl font-bold"> Point Of Sale</Link>
			</div>
		</header>
	);
};

export default Header;
