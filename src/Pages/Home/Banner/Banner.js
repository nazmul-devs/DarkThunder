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
