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
			{
				RoutesArray.map((route,i) => 
					<li key = {i}>
						<Link to = {route.path}>{route.description}</Link>
					</li>
				)
			} 
		</ul>
	}

	render(){
		return	<Router>
			<div className = 'navbar'>
			{this.list()}
			<Switch>
				{this.routes()}
			</Switch>
		</div>
		</Router>
	}
}

export default NavBar;
