import React from 'react';

const ErrorPage = () => {
	return (
		<section className='container-wrapper error-page'>
			<div className='container'>
				<h2>Error: this site does not exist!</h2>
				<p>Quick! Click <a className='text-bold' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a> to go back to the <span className='text-bold'>Home Page</span>, before it's too late!</p>
			</div>
		</section>
	);
};

export default ErrorPage;
