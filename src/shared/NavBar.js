import React, { Component,Fragment } from 'react';
import { RoutesArray } from './data/routeOptions.js';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';

class NavBar extends Component{

	routes = () => RoutesArray.map((route,i) => <Route 
			exact path = {route.path} 
			component = {route.component} 
			key = {i} 
		/>
	)

	list = () => {
		return <Fragment> 
			<span className = 'span-items'>
				<Link to = '/'> <img id = 'logo' src = './images/logo.jpg'/></Link>
			</span>
			<span className = 'span-items'>
				<Link to = '/projects'> PROJECTS </Link>
				<Link to = '/contact'> CONTACT </Link>
				<Link to = '/prof_docs'> RESUME </Link>
			</span>
			<span className = 'span-items'>
				<Link to = '//www.github.com/bandly93' target = '_blank'> GITHUB </Link>
				<Link to = '//www.linkedin.com/in/band-l-245493b6/' target = '_blank'> LINKEDIN </Link>
			</span>
		</Fragment>
	}

	render(){
		return <Fragment>
			<div className = 'navbar'>
				{this.list()}
			</div>
			<Switch>
				{this.routes()}
			</Switch>
		</Fragment>
	}
}

export default NavBar;
