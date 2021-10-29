import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseRides from "../../../Hooks/UseRides";

const Rides = () => {
	const { rides } = UseRides();
	return (
		<Container>
			<Row xs={1} sm={2} md={3} className="g-4">
				{rides.map((ride, index) => (
					<Col key={ride._id}>
						<Card>
							<Card.Img variant="top" src={ride.img} height="250" />
							<Card.Body>
								<Card.Text className="text-uppercase text-center my-2 fw-bold">
									<h2 className="text-center fw-bold">{ride.name}</h2>
									<p>Price : ${ride.price}</p>
								</Card.Text>
								<Link to={`/admin/${index}`}>
									<button className="btn btn-danger">Update</button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Rides;
