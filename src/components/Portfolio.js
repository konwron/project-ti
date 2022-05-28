import React from 'react';
import ImageSlider from './ImageSlider';
import image1 from '../assets/bg-images/1.png';
import image2 from '../assets/bg-images/2.png';
import image3 from '../assets/bg-images/3.png';
import image4 from '../assets/bg-images/4.png';
import image5 from '../assets/bg-images/5.png';

const Portfolio = () => {
	return (
		<section className='container-wrapper portfolio-page'>
			<ImageSlider slides={sliderData} />
		</section>
	);
};

const sliderData = [
	image1,
	image2,
	image3,
	image4,
	image5
];

export default Portfolio;
