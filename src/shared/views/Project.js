import React,{ Component,Fragment }  from 'react';
import { projectOptions } from '../data/projectOptions.js';
import { connect } from 'react-redux';
import { updateProject } from '../redux/projectModule.js';

class Projects extends Component{

	updateLogic = (e) => {
		const { name } = e.currentTarget;
		let index = this.props.projectInfo.projectIndex;
		let length = projectOptions.length;
		const { updateProject } = this.props;
		
		if(name === 'minus'){
			if( index <= 0 ) {
				index = length - 1;
			}else{
				index -= 1
			}
		}else{
			index = ( index + 1 ) % length;
		}
		updateProject({projectIndex: index});
	}

	leftButton = () => {
		return <button
			onClick = {this.updateLogic}
			name = 'minus'
			className = 'proj-button'>
			&#10094;
		</button>
	} 

	rightButton = () => {
		return <button
			onClick = {this.updateLogic}
			name = 'add'
			className = 'proj-button'>
			&#10095;
		</button>
	}
	

	
	carouselIndicator = () => {
		let style = {
			on:{
				'backgroundColor':'black',
			},
			off:{
				'backgroundColor':'white',
			}
		}
		
		const { updateProject } = this.props;
		const { projectIndex } = this.props.projectInfo;
		return <ul id = 'carousel-indicator'>
			{
				projectOptions.map(({},i) => 
					<li
						style = {projectIndex === i? style.on : style.off}
						key = {i}
						className = 'carousel-indicator-item'
						onClick = {(e) => updateProject({projectIndex:e.currentTarget.value})}
						value = {i}>
					</li>
				)
			}
		</ul>
	}

	projectContainer = () => {
		const { projectIndex } = this.props.projectInfo;
		let Proj = projectOptions[projectIndex];
		return <div className = 'project'>
			<h1> {Proj.title} </h1>
			<h5> {Proj.subTitle} </h5>
			<img src = {Proj.img} height ='300' width = '500' />
			<p><a href = {Proj.url} target = '_blank'> Click here to visit page! </a></p>
			<p><a href = {Proj.projectUrl} target = '_blank'> Interested in how I coded this project? </a></p>
		</div>
	}	
	
	render(){
		return<Fragment>
			{this.carouselIndicator()}
			<div id = 'project-container'>
				{this.leftButton()}
				{this.projectContainer()}
				{this.rightButton()}
			</div>
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
