import React, { useState } from "react";
import "./Rides.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UseRides from "../../../Hooks/UseRides";
import loader from "../../../img/Fidget-spinner.gif";
import BookRide from "../Modal/BookRide";

const Rides = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const [indexNo, setIndexNo] = useState(null);

	const { rides, loading } = UseRides();
	const { user } = UseAuth();
	if (loading) {
		return (
			<div className="mx-auto text-center my-5">
				<img src={loader} alt="" />
			</div>
		);
	}

	// orders save to database

	const handleBookin = (index) => {
		setIndexNo(index);
		handleShow();

		// fetch("https://frozen-anchorage-61563.herokuapp.com/orders", {
		// 	method: "POST",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify(bookingItem),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		alert(`${bookingRide.name} add to your order`);
		// 	});
	};
	return (
		<Container className="pb-5">
			<BookRide show={show} handleClose={handleClose} indexNo={indexNo} />;
			<h2 className="main-heading">Ride booking</h2>
			<Row xs={1} md={2} lg={3} className="g-4">
				{rides?.map((ride, index) => (
					<Col key={ride._id}>
						<Card
							className="border-0 shadow"
							style={{ minHeight: "500px", backgroundColor: "#d1e8e2" }}
						>
							<Card.Img variant="top" src={ride.img} height="250" />
							<Card.Body className="border">
								<div className="text-uppercase text-center my-2">
									<h4
										className="text-center fs-6 fw-bold"
										style={{ color: "#116466" }}
									>
										{ride.name}
									</h4>
									<p
										className="text-secondary my-3"
										style={{
											fontSize: "16px",
											textAlign: "justify",
										}}
									>
										{ride.des.slice(0, 100)}
									</p>
								</div>
								<div className="d-flex justify-content-between align-items-center my-2">
									<h5
										className="fs-6 fw-bold"
										style={{ color: "#116466" }}
									>
										Price : ${ride.price}
									</h5>
									{user.email ? (
										<button
											onClick={() => handleBookin(index)}
											className="btn px-3 py-1 text-white booking-btn "
										>
											Book now &rarr;
										</button>
									) : (
										<Link to="/login">
											<button className="btn btn-danger">
												book now
											</button>
										</Link>
									)}
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Rides;
