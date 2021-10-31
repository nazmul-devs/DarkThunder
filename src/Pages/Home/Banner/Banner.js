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
				<Carousel.Caption className="banner-text d-none d-md-block">
					<h3>Tilt-A-Whirl</h3>
					<p>
						In 1926, Herbert Sellner finished his design for the
						Tilt-A-Whirl and began building one in his backyard.{" "}
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height="600"
					className="d-block w-100"
					src={banner2}
					alt="Second slide"
				/>

				<Carousel.Caption className="banner-text  d-none d-md-block">
					<h3>Carousel</h3>
					<p>
						The most elegant of all amusement park rides, the carousel
						dates back to around 500 C.E. Drawings from this time period
						show riders in baskets circling a post
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height="600"
					className="d-block w-100"
					src={banner3}
					alt="Third slide"
				/>

				<Carousel.Caption className="banner-text  d-none d-md-block">
					<h3>Log Rides</h3>
					<p>
						If you were a lumberjack in America in the late 1800s, a "log
						ride" wasn't something you'd line up to do.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
