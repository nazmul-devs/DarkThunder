import { useEffect } from "react";
import { useState } from "react";
import UseAuth from "./UseAuth";

const UseRides = () => {
	const { user } = UseAuth();
	const [rides, setRides] = useState([]);
	const [loading, setLoading] = useState(true);
	const [remove, setRemove] = useState(false);
	const [myOrders, setMyOrders] = useState([]);
	const [allOrders, setAllOrders] = useState([]);
	const [purchase, setPurchase] = useState([]);
	const [purchaseStatuse, setPurchaseStatuse] = useState([]);
	const [status, setStatus] = useState("");

	useEffect(() => {
		fetch("https://frozen-anchorage-61563.herokuapp.com/rides")
			.then((res) => res.json())
			.then((data) => {
				setRides(data);
				setLoading(false);
			});
	}, []);

	// load data by email
	const email = user?.email;
	useEffect(() => {
		fetch(`https://frozen-anchorage-61563.herokuapp.com/orders/${email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyOrders(data);
			});
	}, [remove]);

	// handle delete ride from myOrder
	const handleDelete = (id) => {
		const response = window.confirm(
			"Are you sure this ride remove from your order ? "
		);
		if (response) {
			setRemove(false);
			fetch(`https://frozen-anchorage-61563.herokuapp.com/myorders/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setRemove(true);
					alert("This ride is remove from your order");
				});
		} else {
		}
	};

	// Manage orders get data
	useEffect(() => {
		fetch("https://frozen-anchorage-61563.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => {
				setAllOrders(data);
			});
	}, [remove]);

	// Delete handle from manage orders
	const manageOrderDelete = (id) => {
		const response = window.confirm(
			"Are you sure this ride remove from manage order ? "
		);
		if (response) {
			setRemove(false);
			fetch(`https://frozen-anchorage-61563.herokuapp.com/orders/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setRemove(true);
				});
		} else {
		}
	};

	// get purchase data
	useEffect(() => {
		fetch("https://frozen-anchorage-61563.herokuapp.com/purchase")
			.then((res) => res.json())
			.then((data) => {
				setPurchase(data);
			});
	}, [remove]);

	// Get order status by email
	useEffect(() => {
		const email = user.email;
		fetch(`https://frozen-anchorage-61563.herokuapp.com/purchase/${email}`)
			.then((res) => res.json())
			.then((data) => {
				setPurchaseStatuse(data);
				setStatus(data[0]?.status);
			});
	}, []);

	// Delete purchase data
	const purchaseDelete = (email) => {
		const response = window.confirm(
			"Are you sure remove this order from booking ? "
		);
		if (response) {
			setRemove(false);
			fetch(
				`https://frozen-anchorage-61563.herokuapp.com/purchase/${email}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then(() => {
				setRemove(true);
			});
		} else {
		}
	};
	return {
		rides,
		loading,
		myOrders,
		handleDelete,
		allOrders,
		manageOrderDelete,
		purchase,
		purchaseStatuse,
		status,
		purchaseDelete,
	};
};

export default UseRides;
