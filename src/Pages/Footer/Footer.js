import React from "react";
import "./Footer.css";
import logo from "../../img/header-logo.png";
import { Form } from "react-bootstrap";
const Footer = () => {
	return (
		<div className="container-fluid footer">
			<div className="d-md-flex p-2 justify-content-around align-items-center">
				<div className="dark-thunder my-3">
					<img
						className="bg-light m-2 rounded"
						width="150"
						src={logo}
						alt=""
					/>
					<h4 className="fw-bold text-white">Dark Thunder</h4>
					<div className="d-flex social">
						<a href="https://www.facebook.com/nazmulhosens">
							<i className="fab fa-facebook-f bg-white rounded-circle p-2 m-2"></i>
						</a>
						<a href="/">
							<i className="fab fa-twitter bg-white rounded-circle p-2 m-2"></i>
						</a>
						<a href="https://github.com/nazmulhosens">
							<i className="fab fa-github  bg-white rounded-circle p-2 m-2"></i>
						</a>
					</div>
				</div>
				<div className="useful-links my-3 text-white">
					<h4>Useful links</h4>
					<a href="/">Home</a>
					<a href="/">Services</a>
					<a href="/login">Login</a>
				</div>
				<div className="contact-us text-white">
					<h4>Contact Us</h4>
					<p>Banani blcok-D, Road-15 Dhaka</p>
					<p>Darkthunder007@gmail.com</p>
					<p>(+880)1705511718</p>
					<p>(+880)1804573272</p>
				</div>
				<Form>
					<h4 className="your-msg mt-3">Your message</h4>
					<Form.Group className="my-1" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="my-1 " controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Your message" />
					</Form.Group>

					<button className="send-btn btn px-3">Send</button>
				</Form>
			</div>
			<hr className="bg-white" />
			<p className=" m-0 p-2 text-center">
				© 2022 Your Company. Designed By Dark-thunder.
			</p>
		</div>
	);
};

export default Footer;
