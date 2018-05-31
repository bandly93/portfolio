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
		updateProject({projectIndex:index});
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
		const { updateProject } = this.props;
		const { projectIndex } = this.props.projectInfo;
		return <ul id = 'carousel-indicator'>
			{
				projectOptions.map(({},i) => 
					<li
						key = {i}
						className = 'carousel-indicator-item'
						id = {projectIndex === i? 'bg-black': 'bg-white'}
						onClick = {(e) => updateProject({projectIndex:e.currentTarget.value})}
						value = {i}>
					</li>
				)
			}
		</ul>
	}

	projectContainer = () => {
		const { projectIndex } = this.props.projectInfo;
		const { innerHeight,innerWidth } = this.props.view;
		let Proj = projectOptions[projectIndex];
		return <div className = 'project'>
			<h1> {Proj.title} </h1>
			<h5> {Proj.subTitle} </h5>
			<img id = {Proj.id} className = {Proj.className} src = {Proj.img} />	
			<span id = 'proj-desc'>
			<ul>
				{
					Proj.listItems.map((item,i) =>
						<li key = {i}>
							{item}
						</li>
					)
				}
			</ul>	
			</span>
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
		view:state.view,
	}
}

const mapDispatchToProps = {
		updateProject
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);	 
