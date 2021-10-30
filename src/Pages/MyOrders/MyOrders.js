import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";

const MyOrders = () => {
	const [remove, setRemove] = useState(false);
	const [myOrders, setMyOrders] = useState([]);
	const { user } = UseAuth();
	const email = user?.email;
	useEffect(() => {
		fetch(`http://localhost:5000/orders/${email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyOrders(data);
			});
	}, [remove]);

	// reack hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	// data add handle
	const onSubmit = (data) => {
		console.log(data);
		reset();
		alert("Your purchese successfully done");
	};

	// handle delete ride
	const handleDelete = (id) => {
		const response = window.confirm(
			"Are you sure this ride remove from your order ? "
		);
		if (response) {
			setRemove(false);
			fetch(`http://localhost:5000/myorders/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setRemove(true);
					alert("This ride is remove from your order");
				});
		} else {
		}
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
						<form
							className="d-flex flex-column p-3 my-5 mx-auto shadow"
							onSubmit={handleSubmit(onSubmit)}
						>
							<h2>User add</h2>
							<input placeholder="Name" {...register("name")} />
							<input placeholder="Description" {...register("des")} />
							<input placeholder="Price" {...register("price")} />
							<input
								placeholder="Img"
								{...register("img", { required: true })}
							/>
							{errors.exampleRequired && (
								<span>This field is required</span>
							)}
							<input className="rides-btn" type="submit" value="Add" />
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default MyOrders;
