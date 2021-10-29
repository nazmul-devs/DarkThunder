import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AuthProvider from "./Hooks/AuthProvider";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute path="/admin">
						<Admin />
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
