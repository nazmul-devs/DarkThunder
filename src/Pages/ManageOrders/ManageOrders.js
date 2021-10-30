import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseRides from "../../Hooks/UseRides";

const ManageOrders = () => {
	const {
		allOrders,
		manageOrderDelete,
		purchase,
		purchaseStatuse,
		purchaseDelete,
	} = UseRides();

	// Set approve
	const approveHandle = (email) => {
		const approveStatus = purchaseStatuse[0];
		approveStatus.status = "Approved";
		console.log(approveStatus);
		fetch(`https://frozen-anchorage-61563.herokuapp.com/status/${email}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(approveStatus),
		}).then(() => {
			alert("Order approved successfully");
		});
	};

	return (
		<Container>
			<h2>Mange orders {allOrders.length}</h2>
			<Row>
				<Col>
					<Row xs={1} lg={2} className="g-4">
						{allOrders?.map((order, index) => (
							<Col key={order._id}>
								<Card>
									<Card.Img
										variant="top"
										src={order.img}
										height="250"
									/>
									<Card.Body>
										<div className="text-uppercase text-center my-2 fw-bold">
											<h2 className="text-center fw-bold">
												{order.name}
											</h2>
											<p>Price : ${order.price}</p>
											<p>Email : {order.email}</p>
										</div>
										<button
											onClick={() => manageOrderDelete(order._id)}
											className="btn btn-danger"
										>
											X
										</button>
										<button className="btn btn-danger">Update</button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
				<Col>
					<h2>hellsdfih</h2>
					<h2>purchase {purchase.length}</h2>
					<Row>
						{purchase?.map((prch) => (
							<Col key={prch._id}>
								<h5>Name : {prch.name}</h5>
								<h5>Email : {prch.email}</h5>
								<div className="rides">
									{prch.rides?.map((ride) => (
										<p key={ride}>{ride}</p>
									))}
								</div>
								<button
									onClick={() => approveHandle(prch.email)}
									className="btn btn-primary"
								>
									Approve
								</button>
								<button
									onClick={() => purchaseDelete(prch.email)}
									className="btn btn-danger"
								>
									Delete
								</button>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default ManageOrders;
