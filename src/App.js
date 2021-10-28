import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact to="/"></Route>
			</Switch>
		</Router>
	);
}

export default App;
