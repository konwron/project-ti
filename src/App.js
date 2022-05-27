import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import './pages/scss/App.scss';

const App = () => {
	return (
		<Router>
			<div className="App">
				<header class="container-wrapper">
					<div class="container">
						<a href={HomePage}>
							<img id="company-logo" src="assets/logo.png" alt="Logo" />
						</a>
						<nav>
							<ul id="navigation">
								<li><a href={HomePage}>Home</a></li>
								<li><a href={Shop}>Shop</a></li>
								<li><a href={Contact}>Contact</a></li>
							</ul>
						</nav>
					</div>
				</header>
				<Switch>
					<Route path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/contact" component={Contact} />
					<Route path="*" component={ErrorPage} />
				</Switch>
				<section class="container-wrapper">
					<div class="container"></div>
				</section>
				<footer class="container-wrapper">
					<div class="container"></div>
				</footer>
			</div>
		</Router>
	);
}

export default App;
