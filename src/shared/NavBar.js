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

	navbar = () => {
		return <nav> 
      <div className = 'navbar' id = 'navbar-primary'>
			  <div>
			    <Link to = '/'> <img id = 'logo' src = './images/logo.jpg'/></Link>
			  </div>
			  <div>
			  	<Link to = '/projects'> PROJECTS </Link>
			  	<Link to = '/contact'> CONTACT </Link>
			  	<Link to = '/prof_docs'> RESUME </Link>
        </div>
        <div>
		  		<Link to = '//www.github.com/bandly93' target = '_blank'> GITHUB </Link>
		  		<Link to = '//www.linkedin.com/in/band-l-245493b6/' target = '_blank'> LINKEDIN </Link>
	      </div>
      </div>
      
      <div className = 'navbar' id = 'navbar-secondary' style = {{display:"none"}}>
			  <div>
			    <Link to = '/'> <img id = 'logo' src = './images/logo.jpg'/></Link>
			  </div>
			  <div>
			  	<Link to = '/projects'> PROJECTS </Link>
			  	<Link to = '/contact'> CONTACT </Link>
			  	<Link to = '/prof_docs'> RESUME </Link>
		  		<Link to = '//www.github.com/bandly93' target = '_blank'> GITHUB </Link>
		  		<Link to = '//www.linkedin.com/in/band-l-245493b6/' target = '_blank'> LINKEDIN </Link>
	      </div>
      </div> 
		</nav>
	}

	render(){
		return <Fragment>
				{this.navbar()}
			<Switch>
				{this.routes()}
			</Switch>
		</Fragment>
	}
}

export default NavBar;
