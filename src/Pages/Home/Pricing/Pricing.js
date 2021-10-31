import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";

const Pricing = () => {
	return (
		<Container>
			<h2 className="main-heading">Pricing</h2>
			<Row className="pricing d-md-flex align-items-center justify-content-around pb-5">
				<Col className="tickit-package">
					<h5>TICKET PACKAGES</h5>
					<h3>CHOOSE THE BEST PACKAGES FOR YOUR FAMILY</h3>
					<p>
						{" "}
						For Picnic package eligibility, a group should be of minimum
						50 persons. School Picnic Package is not available on Friday
						and Saturday. All Prices are inclusive of VAT.
					</p>
					<p>
						<i className="fas fa-check"></i> Best Waterpark in the world
					</p>
					<p>
						<i className="fas fa-check"></i> Best Packages For Your Family
					</p>
					<p>
						<i className="fas fa-check"></i> Enjoy Various Kinds of Water
						Park
					</p>
					<p>
						<i className="fas fa-check"></i> Win Up To 3 Free All Day
						Tickets
					</p>
					<button className="all-package">all package</button>
				</Col>
				<Col className="family-package">
					<h3 className="fw-bold">Family Packages</h3>
					<div className="d-flex fw-bold justify-content-center pricing">
						<h3>$299,90</h3>{" "}
						<p className="mt-4">
							<small>/family</small>
						</p>
					</div>
					<p>
						<i className="fas fa-check"></i> All Access To Waterpar
					</p>
					<p>
						<i className="fas fa-check"></i> Get Two Gazebo
					</p>
					<p>
						<i className="fas fa-check"></i> Free Soft Drinks
					</p>
					<p>
						<i className="fas fa-check"></i> Get Four Lockers
					</p>
					<p>
						<i className="fas fa-check"></i> Free Four Towels
					</p>
					<button className="book-now-btn">Book now</button>
				</Col>
				<Col className="basic-package">
					<h3 className="fw-bold">Basic Packages</h3>
					<div className="d-flex fw-bold justify-content-center pricing">
						<h3>$59,90</h3>{" "}
						<p className="mt-3">
							<small>/person</small>
						</p>
					</div>
					<p>
						<i className="fas fa-check " style={{ color: "#1c2833" }}></i>{" "}
						Get Small Gazebo
					</p>
					<p>
						<i className="fas fa-check " style={{ color: "#1c2833" }}></i>{" "}
						Free Soft Drink
					</p>
					<p>
						<i className="fas fa-check " style={{ color: "#1c2833" }}></i>{" "}
						Get One Locker
					</p>
					<p>
						<i className="fas fa-check " style={{ color: "#1c2833" }}></i>{" "}
						Free Towel
					</p>
					<button className="book-now">Book now</button>
				</Col>
			</Row>
		</Container>
	);
};

export default Pricing;
