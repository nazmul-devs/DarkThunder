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
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});

	const googleLogin = () => {
		return signInWithPopup(auth, provider);
	};

	// onAuthStateChange
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
			}
			setLoading(false);
		});
	});

	// logout handle
	const logOut = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setLoading(false));
	};
	return { googleLogin, user, logOut, loading };
};

export default UseFirebase;
