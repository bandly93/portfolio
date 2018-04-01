import React, {Component,Fragment} from 'react';
import style from './style.css';
import { connect } from 'react-redux';
import { updateView } from '../client/redux/viewModule.js';

class App extends Component{	
	componentDidMount(){
		this.view();
		window.addEventListener('resize',()=>this.view());
	}
	
	view(){
		const { innerHeight,innerWidth } = window;
		const { updateView } = this.props;
		updateView({innerHeight,innerWidth});
	}	

	render(){
		return<div className ='profile'>
			<h1> Portfolio Page!! </h1>
			<p> Band Ly </p>
			<p> ScreenHeight : {this.props.view.innerHeight} </p>
			<p>	ScreenWidth : {this.props.view.innerWidth} </p>
			<p> Things to add to portfolio </p>
			<li>Linked-in, github</li>
			<li> projects ( volcano )</li>
			<li> interests </li>
		</div>
	}
}

const mapStateToProps = (state) => {
	return{
		view:state.view,	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateView:(data) => dispatch(updateView(data)),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
