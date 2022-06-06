import React, { Component, useState, useEffect } from 'react';

class Contact extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			questions: []
		}
	}

	refreshList() {
		fetch('http://localhost:49146/api/faq')
		.then(response => response.json())
		.then(data => {
			this.setState({questions:data});
		})
	}

	componentDidMount() {
		this.refreshList();
	}
  // const [questions, setQuestion] = useState([]);
  
  // useEffect(() => {
	// 	const url = 'http://localhost:49146/api/faq';

	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(({ data: questions }) => {
	// 			setQuestion(questions);
	// 		});
	// }, []);
	render() {
		const {
			questions
		} = this.state;
		return (
			<section className='container-wrapper contact-page'>
				<div className='image-cover'></div>
				<div className='container'>
					<div className='contact'>
						<div className='column column-right'>
							<h3>Contact</h3>
							<dl>
								<dt>Address</dt>
								<dd>11 Lorem Ipsum Street</dd>
								<dd>69-420</dd>
								<dd>Cracow</dd>
							</dl>
							<dl>
								<dt>Phone Contact</dt>
								<dd><a href='tel:+48123456789'>+48 123 456 789</a></dd>
								<dd><a href='tel:+48121411414'>+48 12 141 14 14</a></dd>
							</dl>
							<dl>
								<dt>Don't hesitate to e-mail us!</dt>
								<dd><a href='mailto:abc@homearchitect.com'>abc@homearchitect.com</a></dd>
								<dd><a href='mailto:xyz@homearchitect.com'>xyz@homearchitect.com</a></dd>
							</dl>
						</div>
						<div className='column column-left'>
							<h3>Frequently Asked Questions</h3>
							<ul>
								{questions.map(q =>
									<li key={q.QuestionID}>
										<p className='question'>{q.Question}</p>
										<p className='answer'>{q.Answer}</p>
									</li>
								)}
								{/* <li>
									<p className='question'>Aliquet bibendum enim facilisis gravida neque convallis?</p>
									<p className='answer'>Venenatis urna cursus eget nunc scelerisque viverra mauris. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.</p>
								</li>
								<li>
									<p className='question'>Lectus nulla at volutpat diam?</p>
									<p className='answer'>Tincidunt id aliquet risus feugiat in ante metus dictum. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.</p>
								</li>
								<li>
									<p className='question'>Urna neque viverra justo nec ultrices dui sapien?</p>
									<p className='answer'>Eu turpis egestas pretium aenean pharetra magna ac placerat. In ornare quam viverra orci sagittis eu volutpat odio facilisis.</p>
								</li>
								<li>
									<p className='question'>Lorem ipsum dolor sit amet?</p>
									<p className='answer'>Bibendum neque egestas congue quisque egestas diam. Amet porttitor eget dolor morbi non arcu risus quis varius.</p>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
	
};

export default Contact;
