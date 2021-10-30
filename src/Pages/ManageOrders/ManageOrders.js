import React, { useEffect, useState } from "react";

const ManageOrders = () => {
	const [allOrders, setAllOrders] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/orders")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllOrders(data);
			});
	}, []);
	return (
		<div>
			<h2>Mange orders {allOrders.length}</h2>
		</div>
	);
};

export default ManageOrders;
