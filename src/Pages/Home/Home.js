import React from "react";
import Banner from "./Banner/Banner";
import Pricing from "./Pricing/Pricing";
import Rides from "./Rides/Rides";

const Home = () => {
	return (
		<div style={{ background: "#ebf8ff" }}>
			<Banner />
			<Rides />
			<Pricing />
		</div>
	);
};

export default Home;
