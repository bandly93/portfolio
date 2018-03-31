import React, {Component,Fragment} from 'react';
import style from './style.css';
import { connect } from 'react-redux';
import { updateData } from '../client/redux/viewModule.js';

class App extends Component{
	render(){	
		return<Fragment>
			<h1> Hello World! </h1>
		</Fragment>
	}
}

const mapStateToProps = (state) => {
	return{
		view:state.view,	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateData:(data) => dispatch(updateData(data)),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
