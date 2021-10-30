import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ManageOrders = () => {
	const [allOrders, setAllOrders] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/orders")
			.then((res) => res.json())
			.then((data) => {
				setAllOrders(data);
			});
	}, []);
	return (
		<Container>
			<h2>Mange orders {allOrders.length}</h2>
			<Row xs={1} sm={2} md={3} className="g-4">
				{allOrders.map((order, index) => (
					<Col key={order._id}>
						<Card>
							<Card.Img variant="top" src={order.img} height="250" />
							<Card.Body>
								<div className="text-uppercase text-center my-2 fw-bold">
									<h2 className="text-center fw-bold">{order.name}</h2>
									<p>Price : ${order.price}</p>
									<p>Email : {order.email}</p>
								</div>
								<button className="btn btn-danger">X</button>
								<button className="btn btn-danger">Update</button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ManageOrders;
