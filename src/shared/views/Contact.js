import React,{ Component,Fragment }  from 'react';

class Contact extends Component{
	render(){
		return<form>
			Firstname:<input type = 'text'/>
			Lastname :<input type = 'text'/>
			Contact Email : <input type = 'text'/>
			Contact # : <input type = 'text'/>
			<input type='submit'/>
		</form>
	}	
}

export default Contact;
