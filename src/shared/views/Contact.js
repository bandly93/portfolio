import React,{ Component,Fragment }  from 'react';
import { connect } from 'react-redux';
import { updateData } from '../redux/emailModule.js';
import { sendData } from '../redux/fetchThunk.js';
import { formValidation } from '../utils/formValidation.js';
import { updateView } from '../redux/viewModule.js';

class Contact extends Component{
	sendEmail = (e) => {
		e.preventDefault();
		const { contactForm,updateData} = this.props;
		sendData('/email','POST',contactForm);

		//clear field after submit
		let empty = {name:'',email:'',subject:'',message:''}
		updateData(empty);
	}

	validate(){
		const { name,email,subject,message } = this.props.contactForm;
		return {
			name: name.length === 0,
			subject: subject.length === 0,
			email : email.length === 0,
			message : message.length === 0,
		}
	}
	
	onFormChange = (e) => {
		const { updateData } = this.props;
		const { name,value } = e.currentTarget;
		updateData({[name]:value})
	}

	render(){
		const { name,email,message,subject } = this.props.contactForm;
		const { innerWidth,innerHeight } = this.props.view;
		const errors = this.validate()
		const shouldBeDisabled = Object.keys(errors).some(x => errors[x]);
		
		return<div className = 'contact-form'>
			<h1> Contact Form </h1>
			<p> Got a question? I would love to hear from you. Send me a message and I will get back to you as soon as possible.</p>
			<form onSubmit = {this.sendEmail}>
				<span>Name</span>
				<input 
					className = 'input-name'
					autoComplete = 'off'
					type = 'text' 
					name = 'name'
					value = {name}
					onChange = {this.onFormChange} />
				<span>Email</span>
				<input 
					className = 'input-email'
					autoComplete = 'off'
					type = 'email' 
					name = 'email'
					value = {email} 
					onChange = {this.onFormChange} />
				<span>Subject</span>
				<input 
					className = 'input-subject'
					type = 'text' 
					name = 'subject' 
					value = {subject} 
					onChange = {this.onFormChange} />
				<span>Message</span> 
				<textarea
					rows = '12' 
					className = 'textarea-message'
					name = 'message' 
					value = {message} 
					onChange = {this.onFormChange} />
				<input 
					type = 'submit' 
					className = 'button'
					disabled = {shouldBeDisabled} />
			</form>
		</div>
	}	
}

const mapStateToProps = (state) => {
	return{
		contactForm:state.contactForm,
		view:state.view,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateData : (data) => dispatch(updateData(data)),
		updateView : (data) => dispatch(updateView(data)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);
