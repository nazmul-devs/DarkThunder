import { useContext } from "react";
import { authContext } from "./AuthProvider";

const UseAuth = () => {
	return useContext(authContext);
};
export default UseAuth;
