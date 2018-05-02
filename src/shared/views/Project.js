import React,{ Component,Fragment }  from 'react';
import { projectOptions } from '../data/projectOptions.js';
import { connect } from 'react-redux';
import { updateProject } from '../redux/projectModule.js';

class Projects extends Component{

	leftButton = () => {
		return <button 
			className = 'left-button'>
			&#10094;
		</button>
	} 

	rightButton = () => {
		return <button
			className = 'right-button'>
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
			<p><a href = {Proj.url}> Click here to visit page! </a></p>
		</div>
	}	
	
	render(){
		return<Fragment>
			{this.carouselIndicator()}
			<div>{this.projectContainer()}</div>
			{this.leftButton()}
			{this.rightButton()}
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
