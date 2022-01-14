import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseRides from "../../Hooks/UseRides";

const ManageOrders = () => {
	const { allOrders, manageOrderDelete, purchaseStatuse } = UseRides();

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
		<Container className="py-4">
			<h2 className="main-heading" style={{ color: "#116466" }}>
				Total booking rides {allOrders.length}
			</h2>
			<Row xs={1} md={2} lg={3} className="g-4 mt-3">
				{allOrders?.map((order, index) => (
					<Col key={order._id}>
						<Card style={{ background: "#116466" }}>
							<Card.Img variant="top" src={order.rideImg} height="200" />
							<Card.Body>
								<div className="text-white">
									<h5
										className="text-uppercase "
										style={{ fontWeight: "600" }}
									>
										{order.rideName}
									</h5>

									<p>Name : {order.userName}</p>
									<p>Email : {order.userEmail}</p>
									<p>Status : {order.status}</p>
								</div>
								<div>
									<button className="btn btn-danger">Update</button>
									<button
										onClick={() => manageOrderDelete(order._id)}
										className="btn btn-danger mx-4"
									>
										X
									</button>
									<button
										onClick={() => approveHandle(order.email)}
										className="btn btn-primary"
									>
										Approve
									</button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ManageOrders;
