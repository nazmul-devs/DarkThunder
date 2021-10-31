import React from "react";
import { Container } from "react-bootstrap";
import AddRides from "./AddRides/AddRides";

const Admin = () => {
	return (
		<div className="rides-add container-fluid">
			<Container>
				<AddRides />
			</Container>
		</div>
	);
};

export default Admin;
