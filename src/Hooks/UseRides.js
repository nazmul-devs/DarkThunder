import { useEffect } from "react";
import { useState } from "react";

const UseRides = () => {
	const [rides, setRides] = useState([]);
	useEffect(() => {
		fetch("https://frozen-anchorage-61563.herokuapp.com/rides")
			.then((res) => res.json())
			.then((data) => setRides(data));
	}, []);
	return { rides };
};

export default UseRides;
