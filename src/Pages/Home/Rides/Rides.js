import React from "react";
import "./Rides.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UseRides from "../../../Hooks/UseRides";
import loader from "../../../img/Fidget-spinner.gif";

const Rides = () => {
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
		const bookingRide = rides[index];
		const bookingItem = {
			name: bookingRide.name,
			email: user.email,
			img: bookingRide.img,
			price: bookingRide.price,
		};

		fetch("https://frozen-anchorage-61563.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(bookingItem),
		})
			.then((res) => res.json())
			.then((data) => {
				alert(`${bookingRide.name} add to your order`);
			});
	};
	return (
		<Container>
			<h2 className="main-heading">Ride booking</h2>
			<Row xs={1} sm={2} md={3} className="g-4">
				{rides?.map((ride, index) => (
					<Col key={ride._id}>
						<Card className="border-0 shadow ride-card">
							<Card.Img variant="top" src={ride.img} height="250" />
							<Card.Body>
								<div className="text-uppercase text-center my-2">
									<h4 className="text-center fw-bold">{ride.name}</h4>
									<p className="ride-desc">{ride.des.slice(0, 100)}</p>
								</div>
								<div className="d-flex justify-content-between align-items-center my-2">
									<h3 className="ride-price">Price : ${ride.price}</h3>
									{user.email ? (
										<button
											onClick={() => handleBookin(index)}
											className="booking-btn"
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
