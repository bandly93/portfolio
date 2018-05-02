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
		 return <ul> 
			<span>
				<li><Link to = '/'> <img id = 'logo' src = './images/logo.jpg'/></Link></li>
			</span>
			<span className = 'span-items'>
				<li><Link to = '/projects'> PROJECTS</Link></li>
				<li><Link to = '/contact'> CONTACT</Link></li>
				<li><Link to = '/prof_docs'>RESUME</Link></li>
			</span>
			<span className = 'span-items'>
				<li><a href = '//www.github.com/bandly93' target = '_blank'> GITHUB </a></li>
				<li><a href = '//www.linkedin.com/in/band-l-245493b6/' target = '_blank'> LINKEDIN </a></li>
			</span>

		</ul>
	}

	render(){
		return <div className = 'navbar'>
			{this.list()}
			<Switch>
				{this.routes()}
			</Switch>
		</div>
	}
}

export default NavBar;
