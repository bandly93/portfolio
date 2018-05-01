import React, { Component,Fragment } from 'react';
import { RoutesArray } from './routes.js';
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
				<li><Link to = '/'> <img id = 'logo' src = './images/logo.jpg'/></Link></li>
			<span id = 'span-items'>
				<li><Link to = '/projects'> Projects</Link></li>
				<li><Link to = '/contact'> Contact</Link></li>
				<li><Link to = '/prof_docs'>Resume</Link></li>
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
