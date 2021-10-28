import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact to="/">
					<Home />
				</Route>
				<Route to="/admin">
					<Admin />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
