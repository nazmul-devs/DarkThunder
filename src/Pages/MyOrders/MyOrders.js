import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseRides from "../../Hooks/UseRides";

const MyOrders = () => {
	const { myOrders, handleDelete, status } = UseRides();

	const { user } = UseAuth();
	const orderName = [];
	myOrders.map((order) => orderName.push(order.name));

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
		data.rides = orderName;
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
				<Row>
					<Col md={8}>
						{myOrders.length ? (
							<h2 className="main-heading">My booking</h2>
						) : (
							<h2 className="main-heading">You have no booking </h2>
						)}
						<Row xs={1} lg={2} className="g-4">
							{myOrders.map((myOrder) => (
								<Col key={myOrder._id}>
									<Card style={{ background: "#2E4053" }}>
										<Card.Img
											variant="top"
											src={myOrder.img}
											height="160"
										/>
										<Card.Body>
											<div className="text-uppercase text-white text-center my-2 fw-bold d-flex justify-content-around align-items-center">
												<h5 className="text-center fw-bold">
													{myOrder.name}
												</h5>
												<button
													onClick={() => handleDelete(myOrder._id)}
													className="cancel-btn"
												>
													Cancel
												</button>
											</div>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Col>
					<Col>
						<div className="parchese">
							{status && (
								<div className="mt-4">
									{status === "Pending" ? (
										<h4 className="text-center fw-bold shadow p-2 rounded-pill bg-warning text-white">
											Your order is {status} ...
										</h4>
									) : (
										<h4 className="text-center fw-bold shadow p-2 rounded-pill bg-success text-white">
											Your order is {status}{" "}
											<i className="fas fa-check"></i>
										</h4>
									)}
								</div>
							)}
							<form
								className="d-flex rounded booking-form flex-column p-4 my-5 mx-auto shadow bg-white"
								onSubmit={handleSubmit(onSubmit)}
							>
								<h2
									className="text-center fw-bold my-2 mb-3"
									style={{ color: "#2E4053" }}
								>
									Your information
								</h2>
								<input
									defaultValue={user.displayName}
									placeholder="Name"
									{...register("name")}
								/>
								<input
									defaultValue={user.email}
									placeholder="email"
									{...register("email")}
								/>
								<input
									placeholder="Address"
									{...register("address", { required: true })}
								/>
								<input
									placeholder="City"
									{...register("city", { required: true })}
								/>
								<input
									placeholder="Phone no"
									{...register("phone", { required: true })}
								/>
								{errors.exampleRequired && (
									<span>This field is required</span>
								)}
								<input
									className="book-now-btn"
									type="submit"
									value="booking"
								/>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MyOrders;
