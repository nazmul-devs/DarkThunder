import { useEffect } from "react";
import { useState } from "react";

const UseRides = () => {
	const [rides, setRides] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://frozen-anchorage-61563.herokuapp.com/rides")
			.then((res) => res.json())
			.then((data) => {
				setRides(data);
				setLoading(false);
			});
	}, []);
	return { rides, loading };
};

export default UseRides;
