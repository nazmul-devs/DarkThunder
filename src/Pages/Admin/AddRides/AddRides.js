import React from "react";
import { Container } from "react-bootstrap";
import "./AddRides.css";
import { useForm } from "react-hook-form";

const AddRides = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	// data add handle
	const onSubmit = (data) => {
		fetch("https://frozen-anchorage-61563.herokuapp.com/rides", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => res.json());
		reset();
		alert("Ride added");
	};
	return (
		<Container>
			<div className="rides-add-form">
				<form
					className="d-flex flex-column p-3 my-5 w-sm-100 w-50 mx-auto event-add-form  shadow"
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2>User add</h2>
					<input placeholder="Name" {...register("name")} />
					<input placeholder="Description" {...register("des")} />
					<input placeholder="Price" {...register("price")} />
					<input
						placeholder="Img"
						{...register("img", { required: true })}
					/>
					{errors.exampleRequired && <span>This field is required</span>}
					<input className="rides-btn" type="submit" value="Add" />
				</form>
			</div>
		</Container>
	);
};

export default AddRides;
