import React from "react";
import { createContext } from "react";
import UseFirebase from "../Firebase/UseFirebase";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
	const allContext = UseFirebase();
	return (
		<authContext.Provider value={allContext}>{children}</authContext.Provider>
	);
};

export default AuthProvider;
