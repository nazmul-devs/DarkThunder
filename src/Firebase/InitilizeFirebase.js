import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitilizeFirebase = () => {
	initializeApp(firebaseConfig);
};

export default InitilizeFirebase;
