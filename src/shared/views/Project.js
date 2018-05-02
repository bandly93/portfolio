import React,{ Component,Fragment }  from 'react';
import { projectsOptions } from '../data/projectOptions.js';
import { connect } from 'react-redux';
import { updateProject } from '../redux/projectModule.js';

class Projects extends Component{



	projectContainer = () => {
			


	}	


	
	render(){
		return<Fragment>
			<div></div>
		</Fragment>
	}	
}

const mapStateToProps = (state) => {
	return{
		projectInfo:state.projectInfo,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateProject : (data) => dispatch(updateProject(data)),	
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);	 
