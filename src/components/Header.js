import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<img id='company-logo' src={companyLogo} alt='Logo' />
				</Link>
				<nav>
					<button id='hamburger' onClick={toggleMenu}>
					<FontAwesomeIcon icon={faBars} />
					</button>
					<ul id='nav-ul'>
						<li>
							<span className='page-link'><Link className='page-link' to='/'>HOME</Link></span>
						</li>
						<li>
							<span className='page-link'><Link className='page-link' to='/portfolio'>PORTFOLIO</Link></span>
						</li>
						<li>
							<span className='page-link'><Link className='page-link' to='/contact'>CONTACT</Link></span>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

const toggleMenu = () => $('#nav-ul').toggleClass('visible');

export default Header;
