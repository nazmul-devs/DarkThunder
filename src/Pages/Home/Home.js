import React from "react";
import Banner from "./Banner/Banner";
import Rides from "./Rides/Rides";

const Home = () => {
	return (
		<div className="container-fluid" style={{ background: "#ebf8ff" }}>
			<Banner />
			<Rides />
		</div>
	);
};

export default Home;
