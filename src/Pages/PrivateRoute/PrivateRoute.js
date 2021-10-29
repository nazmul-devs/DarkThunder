import React from "react";
import { Route } from "react-router";
import UseFirebase from "../../Firebase/UseFirebase";

const PrivateRoute = ({ children, ...rest }) => {
	const { user } = UseFirebase();

	return <Route></Route>;
};

export default PrivateRoute;
