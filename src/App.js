import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import './scss/App.scss';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
