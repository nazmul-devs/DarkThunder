import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
