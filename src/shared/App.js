import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { updateView } from '../shared/redux/viewModule.js';
import styles from './styles.css';

class App extends Component{	
	componentDidMount(){
		this.view();
		window.addEventListener('resize',()=>this.view());
	}
	
	view = () => {
		const { innerHeight,innerWidth } = window;
		const { updateView } = this.props;
		updateView({innerHeight,innerWidth});
	}	

	render(){
		return<div className ='profile'>
			<h1> Portfolio Page!! </h1>
			<p> Band Ly! </p>
			<p> ScreenHeight : {this.props.view.innerHeight} </p>
			<p>	ScreenWidth : {this.props.view.innerWidth} </p>
			<p> Things to add to portfolio </p>
			<li> Linked-in, Github </li>
			<li> Projects ( volcano ) </li>
			<li> Interests: Computer Science </li>
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
