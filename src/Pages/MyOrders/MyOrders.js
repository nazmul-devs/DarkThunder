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
		<Container>
			{myOrders.length ? <h2>my booking</h2> : <h2>You have no booking </h2>}

			<Row>
				<Col md={8}>
					<Row xs={1} lg={2} className="g-4">
						{myOrders.map((myOrder) => (
							<Col key={myOrder._id}>
								<Card>
									<Card.Img
										variant="top"
										src={myOrder.img}
										height="250"
									/>
									<Card.Body>
										<div className="text-uppercase text-center my-2 fw-bold">
											<h2 className="text-center fw-bold">
												{myOrder.name}
											</h2>
											<p>Price : ${myOrder.price}</p>
										</div>
										<button
											onClick={() => handleDelete(myOrder._id)}
											className="btn btn-warning"
										>
											Delete
										</button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
				<Col>
					<div className="parchese">
						{status && (
							<div>
								{status === "Pending" ? (
									<h4 className="text-center fw-bold shadow py-2 rounded-pill bg-warning text-white px-2">
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
							className="d-flex flex-column p-3 my-5 mx-auto shadow"
							onSubmit={handleSubmit(onSubmit)}
						>
							<h2>User add</h2>
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
								className="rides-btn"
								type="submit"
								value="booking"
							/>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default MyOrders;
