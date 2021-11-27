import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseRides from "../../Hooks/UseRides";

const MyOrders = () => {
	const { myOrders, handleDelete, status } = UseRides();

	const { user } = UseAuth();

	// reack hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// handle purchase
	const onSubmit = (data) => {
		data.status = "Pending";
		fetch("https://frozen-anchorage-61563.herokuapp.com/purchase", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {});
		reset();
		alert("Your purchese successfully done");
	};

	return (
		<div className="container-fluid pb-5" style={{ background: "#EAEDED" }}>
			<Container>
				{myOrders.length ? (
					<h2 className="main-heading my-0 py-4">My booking</h2>
				) : (
					<h2 className="main-heading">You have no booking </h2>
				)}
				<Row xs={1} md={2} lg={3} className="g-4">
					{myOrders.map((myOrder) => (
						<Col key={myOrder._id}>
							<Card style={{ background: "#2E4053" }}>
								<Card.Img
									variant="top"
									src={myOrder.rideImg}
									height="160"
								/>
								<Card.Body>
									<div className="text-uppercase text-white text-center my-2 fw-bold d-flex justify-content-around align-items-center">
										<h5 className="text-center fw-bold">
											{myOrder.rideName}
										</h5>
										<button
											onClick={() => handleDelete(myOrder._id)}
											className=" btn px-3 text-white cancel-btn"
											style={{ background: "#cc3629" }}
										>
											Cancel
										</button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default MyOrders;
