import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../img/banner/banner-1.jfif";
import banner2 from "../../../img/banner/banner-2.jpg";
import banner3 from "../../../img/banner/banner-3.jpg";

const Banner = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					height="600"
					className="d-block w-100"
					src={banner1}
					alt="First slide"
				/>
				<Carousel.Caption className="w-50 pb-5">
					<h3>FERRIS WHEEL</h3>
					<p className="py-3">
						If you can imagine the delight of visiting a theme park where
						lasting memories are made, we envision 'Sky' will sometimes
						feel like that.
					</p>
					<button className="btn btn-success">Explore more</button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height="600"
					className="d-block w-100"
					src={banner2}
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height="600"
					className="d-block w-100"
					src={banner3}
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
