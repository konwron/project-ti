import React from 'react';
import $ from 'jquery';
import image1 from '../assets/bg-images/1.png';
import image2 from '../assets/bg-images/2.png';
import image3 from '../assets/bg-images/3.png';
import image4 from '../assets/bg-images/4.png';
import image5 from '../assets/bg-images/5.png';

const HomePage = () => {
	return (
		<section className='container-wrapper home-page'>
			<div className='container'>
				<div className='bg-image'>
					<div className='image-gradient-cover'></div>
				</div>
				<div className='welcome-text'>
					<h1>
						Control Your <span className='text-bold'>Lifestyle</span>
					</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</section>
	);
};

$(document).ready(function() {
	let images = [
		image1,
		image2,
		image3,
		image4,
		image5
	];
  let count = 1;
  setInterval(function() {
    $('.bg-image').css('background-image', `url(${images[count]})`);
    count === images.length - 1 ? count = 0 : count++;
  }, 10000);

});

export default HomePage;
