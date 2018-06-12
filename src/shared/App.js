import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { updateView } from '../shared/redux/viewModule.js';
import styles from './styles.css';
import NavBar from './NavBar.js';
import { withRouter } from 'react-router-dom';
import ga from 'react-ga';
import {GOOGLE_ANALYTICS} from '../../config.json';

class App extends Component{
		
	componentDidMount(){
		this.view();

		window.addEventListener('resize',()=>this.view());

		ga.initialize(GOOGLE_ANALYTICS,{debug:false});
		console.log(this.props.location.pathname);
		ga.pageview(this.props.location.pathname);
	}
	
	componentWillUpdate(nextProps){
		if(nextProps.location.pathname !== this.props.location.pathname){
			ga.pageview(nextProps.location.pathname);
		}
	}
	
	view = () => {
		const { innerHeight,innerWidth } = window;
		const { updateView } = this.props;
		updateView({innerHeight,innerWidth});
	}	

	render(){
		console.log(this.props.location.pathname);
		return<div className ='profile'>
				<NavBar />	
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
