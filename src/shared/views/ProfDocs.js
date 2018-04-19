import React,{ Component,Fragment }  from 'react';
import { connect } from 'react-redux';
import { updateView } from '../redux/viewModule.js';

class ProfDocs extends Component{	
	render(){
		const { innerHeight,innerWidth} = this.props.view;
		return<Fragment>
			<img
				className = 'resume' 
				src = '../images/resume.jpg' 
				height = {innerHeight*0.95} 
				width = {(innerHeight*(8.5/11))*0.95}
			/>
		</Fragment>
	}	
}

const mapPropsToState = (state) => {
	return{
		view:state.view,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateView:(data) => dispatch(updateView(data)),
	}
}

export default connect(mapPropsToState,mapDispatchToProps)(ProfDocs);
