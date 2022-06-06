import React, { Component } from 'react';
import penImg from '../assets/pen.png';
import binImg from '../assets/bin.png';
import $ from 'jquery';

const url = 'http://localhost:49146/api/faq';

class AdminPanel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			questions: [],
			modalTitle: '',
			QuestionID: 0,
			Question: '',
			Answer: ''
		}
	}

	refreshList() {
		fetch(url)
		.then(response => response.json())
		.then(data => {
			this.setState({questions:data});
		})
	}

	componentDidMount() {
		this.refreshList();
	}

	changeQuestion = (e) => {
		this.setState({Question: e.target.value});
	}
	changeAnswer = (e) => {
		this.setState({Answer: e.target.value});
	}

	addClick() {
		this.setState({
			modalTitle: "Add question",
			QuestionID: 0,
			Question: '',
			Answer: ''
		});
		this.showModal();
	}
	editClick(q) {
		this.setState({
			modalTitle: "Edit question",
			QuestionID: q.QuestionID,
			Question: q.Question,
			Answer: q.Answer
		});
		this.showModal();
	}

	publishClick() {
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Question: this.state.Question,
				Answer: this.state.Answer
			})
		})
		.then(response => response.json())
		.then((result) => {
			this.refreshList();
		}, (error) => {
			alert('Failed');
		});
	}

	updateClick() {
		fetch(url, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				QuestionID: this.state.QuestionID,
				Question: this.state.Question,
				Answer: this.state.Answer
			})
		})
		.then(response => response.json())
		.then(result => {
			this.refreshList();
		}, error => {
			alert('Failed');
		})
	}

	deleteClick(id) {
		fetch(`${url}/${id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(result => {
			this.refreshList();
		}, error => {
			alert('Failed');
		})
	}

	showModal = () => $('.modal-visible').addClass('visible');
	hideModal = () => $('.modal-visible').removeClass('visible');

	render() {
		const {
			questions,
			modalTitle,
			QuestionID,
			Question,
			Answer
		} = this.state;
		return (
			<section className='container-wrapper admin-panel'>
				<div className='background-dark modal-visible'></div>
				<div className='container'>
					<h2>Admin Panel</h2>
					<ul>
						{questions.map(q =>
							<li key={q.QuestionID}>
								<div className='box white'>
									<div className='left'>
										<p className='question'>{q.Question}</p>
										<p className='answer'>{q.Answer}</p>
									</div>
									<div className='right'>
										<button className='btn' onClick={() => this.editClick(q)}><img className='img' src={penImg} alt='pen' /></button>
										<button className='btn' onClick={() =>this.deleteClick(q.QuestionID)}><img className='img' src={binImg} alt='bin' /></button>
									</div>
								</div>
							</li>
						)}
					</ul>
					<div>
						<button className='add-btn' onClick={() => this.addClick()}>Add question</button>
					</div>
				</div>
				<div className='modal modal-visible fade' id='admin-modal'>
					<div className='modal-title'>
						<h4>{modalTitle}</h4>
						<button className='add-btn' onClick={this.hideModal}>X</button>
					</div>
					<div className='modal-body'>
						<div className='input-group'>
							<span className='label'>Question</span>
							<input type='text' value={Question} onChange={this.changeQuestion}/>
						</div>
						<div className='input-group'>
							<span className='label'>Answer</span>
							<input type='text' value={Answer} onChange={this.changeAnswer}/>
						</div>
					</div>
					<div>
						{QuestionID === 0 ? 
							<button className='add-btn' onClick={() =>this.publishClick()}>Publish</button> 
							: null
						}
						{QuestionID !== 0 ?
							<button className='add-btn' onClick={() =>this.updateClick()}>Update</button>
							: null
						}
					</div>
				</div>
			</section>
		);
	}
	
};

export default AdminPanel;
