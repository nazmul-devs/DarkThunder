import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseFirebase from "../../Firebase/UseFirebase";
import UseRides from "../../Hooks/UseRides";
import logo from "../../img/header-logo.png";

const Header = () => {
	const { user, logOut } = UseFirebase();
	return (
		<Navbar bg="dark" className="shadow text-white" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={logo} width="100" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle
					className="bg-white text-secondary"
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{user.email && (
							<div className="d-lg-flex align-items-center me-5">
								<Nav.Link
									className=" text-white fw-bold"
									as={Link}
									to="/orders"
								>
									My Orders
								</Nav.Link>
								<Nav.Link
									className=" text-white fw-bold"
									as={Link}
									to="/manageorders"
								>
									Mange Orders
								</Nav.Link>
								<Nav.Link
									className=" text-white fw-bold"
									as={Link}
									to="/admin"
								>
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
							<Nav.Link
								as={Link}
								className="fw-5 fw-bold text-white "
								to="/login"
							>
								Login
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
