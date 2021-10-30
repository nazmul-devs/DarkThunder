import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const MyOrders = () => {
	const { user } = UseAuth();
	const email = user?.email;
	useEffect(() => {
		fetch(`http://localhost:5000/orders/${email}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	});
	return (
		<Container>
			<h2>my orders</h2>
		</Container>
	);
};

export default MyOrders;
