import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import InitilizeFirebase from "./InitilizeFirebase";
InitilizeFirebase();

const provider = new GoogleAuthProvider();
const auth = getAuth();

const UseFirebase = () => {
	const [user, setUser] = useState({});

	const googleLogin = () => {
		signInWithPopup(auth, provider).then((result) => {});
	};

	// onAuthStateChange
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
			}
		});
	});

	// logout handle
	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	return { googleLogin, user, logOut };
};

export default UseFirebase;
