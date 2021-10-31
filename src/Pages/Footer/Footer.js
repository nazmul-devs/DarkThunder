import React from "react";
import "./Footer.css";
import logo from "../../img/header-logo.png";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
const Footer = () => {
	return (
		<div className="container-fluid footer">
			<div className="d-flex p-2 justify-content-around align-items-center">
				<div className="dark-thunder my-3">
					<img
						className="bg-light m-2 rounded"
						width="150"
						src={logo}
						alt=""
					/>
					<h4 className="fw-bold text-white">Dark Thunder</h4>
					<div className="d-flex social">
						<a href="#">
							<i className="fab fa-facebook-f bg-white rounded-circle p-2 m-2"></i>
						</a>
						<a href="#">
							<i className="fab fa-twitter bg-white rounded-circle p-2 m-2"></i>
						</a>
						<a href="#">
							<i class="fab fa-instagram  bg-white rounded-circle p-2 m-2"></i>
						</a>
					</div>
				</div>
				<div className="useful-links my-3 text-white">
					<h4>Useful links</h4>
					<a as={Link} to="/">
						Home
					</a>
					<a as={Link} to="/">
						Services
					</a>
					<a as={Link} to="/login">
						Login
					</a>
				</div>
				<div className="contact-us text-white">
					<h4>Contact Us</h4>
					<p>Banani blcok-D, Road-15 Dhaka</p>
					<p>Darkthunder007@gmail.com</p>
					<p>(+880)1705511718</p>
					<p>(+880)1804573272</p>
				</div>
				<Form>
					<h4 className="your-msg">Your message</h4>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<textarea
							rows="3"
							className="w-100 rounded px-3"
							placeholder="Your Message"
						></textarea>
					</Form.Group>

					<button className="send-btn">Send</button>
				</Form>
			</div>
			<hr className="bg-white" />
			<p className="text-white m-0 p-2">
				© 2022 Your Company. Designed By Dark-thunder.
			</p>
		</div>
	);
};

export default Footer;
