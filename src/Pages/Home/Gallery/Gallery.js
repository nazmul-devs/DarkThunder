import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../img/gallery/img-1.jpg";
import img2 from "../../../img/gallery/img-2.jpg";
import img3 from "../../../img/gallery/img-3.jpg";
import img4 from "../../../img/gallery/img-4.jpg";
import img5 from "../../../img/gallery/img-5.jpg";
import img6 from "../../../img/gallery/img-6.jpg";
import "./Gallery.css";

const Gallery = () => {
	return (
		<Container>
			<h2 className="main-heading">Gallery</h2>
			<h2 className="text-center">CAPTURED MOMENTS IN DARK THUNDER</h2>

			<div className="grid-contaier">
				<img className="h-100 w-100 item-1" src={img1} alt="" />
				<img className="h-100 w-100 item-2" src={img2} alt="" />
				<img className="h-100 w-100 item-3" src={img3} alt="" />
				<img className="h-100 w-100 item-4" src={img4} alt="" />
				<img className="h-100 w-100 item-5" src={img6} alt="" />
				<img className="h-100 w-100 item-6" src={img5} alt="" />
			</div>
		</Container>
	);
};

export default Gallery;
