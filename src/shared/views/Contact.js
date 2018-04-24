import React,{ Component,Fragment }  from 'react';
import { connect } from 'react-redux';
import { updateData } from '../redux/emailModule.js';
import { sendData } from '../redux/fetchThunk.js';
import { formValidation } from '../utils/formValidation.js';

class Contact extends Component{

	sendEmail = (e) => {
		e.preventDefault();
		const { email } = this.props;

		if(email.isValidated){
			console.log('validated');
			sendData('/email','POST',email);
		}else{
			console.log('not quite validated');

		}

	}
	
	onFormChange = (e) => {
		const { updateData } = this.props;
		const { name,value } = e.currentTarget;
		updateData({[name]:value})
	}

	render(){
		const { name,email,message } = this.props.email;
		let fv = new formValidation();
		console.log(fv.isEmpty(''));
		return<div className = 'contact-form'>
			<form onSubmit = {this.sendEmail}>
				Name : <input type = 'text' name = 'name' value = {name} onChange = {this.onFormChange}/>
				Contact Email : <input type = 'text' name = 'email' value = {email} onChange = {this.onFormChange}/>
				Message : <input type = 'text' name = 'message' value = {message} onChange = {this.onFormChange}/>
				<input type='submit'/>
			</form>
		</div>
	}	
}


const mapStateToProps = (state) => {
	return{
		email:state.email,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateData : (data) => dispatch(updateData(data)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);
