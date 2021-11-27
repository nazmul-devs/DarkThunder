import React from "react";
import { Modal } from "react-bootstrap";
import UseRides from "../../../Hooks/UseRides";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
const BookRide = ({ show, handleClose, indexNo }) => {
	const { user } = UseAuth();
	const { rides } = UseRides();
	const bookingRide = rides[indexNo];
	// reack hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		const bookingItem = {
			rideName: bookingRide.name,
			rideImg: bookingRide.img,
			ridePrice: bookingRide.price,
			userName: data.name,
			userEmail: data.email,
			userAddress: data.address,
			status: "pending",
		};
		fetch("https://frozen-anchorage-61563.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(bookingItem),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				alert("Ride booking successfully");
				reset();
				handleClose();
			});
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h2
						className="fw-bold my-2 mb-3 text-center"
						style={{ color: "#2E4053" }}
					>
						Your information
					</h2>
				</Modal.Header>
				<Modal.Body>
					<form
						className="d-flex rounded booking-form flex-column p-4 my-5 mx-auto shadow bg-white"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							defaultValue={user.displayName}
							placeholder="Name"
							{...register("name")}
						/>
						<input
							defaultValue={user.email}
							placeholder="email"
							{...register("email")}
						/>
						<input
							placeholder="Address"
							{...register("address", { required: true })}
						/>
						<input placeholder="City" {...register("city")} />
						<input placeholder="Phone no" {...register("phone")} />
						{errors.exampleRequired && (
							<span>This field is required</span>
						)}
						<input
							className="book-now-btn"
							type="submit"
							value="booking"
						/>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default BookRide;
