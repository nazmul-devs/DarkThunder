import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseFirebase from "../../Firebase/UseFirebase";

const Header = () => {
	const { user, logOut } = UseFirebase();
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					dark thunder
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/admin">
							Admin
						</Nav.Link>
						{user.email ? (
							<>
								<img
									src={user?.photoURL}
									className="rounded-circle ms-5"
									width="50"
									alt=""
								/>
								<button
									onClick={logOut}
									className="btn btn-light shadow px-4 mx-2"
								>
									Logout
								</button>
							</>
						) : (
							<Nav.Link as={Link} to="/login">
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
