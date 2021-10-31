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
			<Row className="mb-4">
				<Col>
					<Row xs={1} className="g-4 mt-3">
						<h2 className="main-heading">
							Total booking rides {allOrders.length}
						</h2>
						{allOrders?.map((order, index) => (
							<Col key={order._id}>
								<Card style={{ background: "#2E4053" }}>
									<Card.Img
										variant="top"
										src={order.img}
										height="250"
									/>
									<Card.Body>
										<div className="d-flex justify-content-around align-items-center">
											<div className="text-uppercase text-white  my-2">
												<h2>{order.name}</h2>

												<p>Email : {order.email}</p>
											</div>
											<div>
												<button className="btn btn-danger me-2">
													Update
												</button>
												<button
													onClick={() =>
														manageOrderDelete(order._id)
													}
													className="btn btn-danger"
												>
													X
												</button>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
				<Col>
					<Row className=" text-center ">
						<h2 className="main-heading">
							Ordered user {purchase.length}
						</h2>
						{purchase?.map((prch) => (
							<Col key={prch._id} className="shadow p-4 m-5 rounded">
								<h5 className="fw-bold">Name : {prch.name}</h5>
								<h5 className="fw-bold">Email : {prch.email}</h5>
								<div className="rides">
									{prch.rides?.map((ride, index) => (
										<p key={ride}>
											{index + 1} : {ride}
										</p>
									))}
								</div>
								<button
									onClick={() => approveHandle(prch.email)}
									className="btn btn-primary me-3"
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
