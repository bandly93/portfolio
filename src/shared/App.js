import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { updateView } from '../shared/redux/viewModule.js';
import styles from './styles.css';
import NavBar from './NavBar.js';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import {GOOGLE_ANALYTICS} from '../../config.json';

ReactGA.initialize(GOOGLE_ANALYTICS);
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends Component{
		
	componentDidMount(){
		this.view();
		window.addEventListener('resize',()=>this.view());
		console.log(window.location.pathname + window.location.search);
	}
	
	view = () => {
		const { innerHeight,innerWidth } = window;
		const { updateView } = this.props;
		updateView({innerHeight,innerWidth});
	}	

	render(){
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
