import React from "react";
import Banner from "./Banner/Banner";
import Rides from "./Rides/Rides";

const Home = () => {
	return (
		<>
			<Banner />
			<Rides />
			<div>
				<h2>This is home</h2>
			</div>
		</>
	);
};

export default Home;
