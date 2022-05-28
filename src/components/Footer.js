import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='created-by'>Created with &#128151; by Konrad Wroński</div>
				<div className='admin-panel'><Link to='/admin-panel'>Admin Panel</Link></div>
			</div>
		</footer>
	);
};

export default Footer;
