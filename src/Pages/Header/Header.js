import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseFirebase from "../../Firebase/UseFirebase";
import logo from "../../img/header-logo.png";

const Header = () => {
	const { user, logOut } = UseFirebase();
	return (
		<Navbar
			style={{ background: "#F2F3F4" }}
			className="shadow bg-none"
			expand="lg"
		>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img className="shadow rounded" src={logo} width="65" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle
					className="bg-white text-secondary"
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{user.email && (
							<div className="d-lg-flex align-items-center me-5">
								<Nav.Link className="  fw-bold" as={Link} to="/orders">
									My Booking
								</Nav.Link>
								<Nav.Link
									className="fw-bold"
									as={Link}
									to="/manageorders"
								>
									Mange Orders
								</Nav.Link>
								<Nav.Link className="  fw-bold" as={Link} to="/admin">
									Add A New Ride
								</Nav.Link>
							</div>
						)}
						{user.email ? (
							<div className=" ms-5 ms-auto">
								<img
									src={user?.photoURL}
									className="rounded-circle"
									width="55"
									alt=""
								/>
								<button
									onClick={logOut}
									className="btn btn-light shadow px-4 mx-2"
								>
									Logout
								</button>
							</div>
						) : (
							<Nav.Link as={Link} to="/login">
								<button
									className="btn fw-bold px-3 py-1 text-white"
									style={{ background: "#F50251" }}
								>
									<i className="fas fa-sign-in-alt"></i> Login
								</button>
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
