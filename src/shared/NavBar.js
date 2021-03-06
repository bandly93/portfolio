import React, { Component,Fragment } from 'react';
import { RoutesArray } from './data/routeOptions.js';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleNav } from './redux/navbarModule.js';
import { withRouter } from 'react-router-dom'

class NavBar extends Component{

	routes = () => RoutesArray.map((route,i) => <Route 
			exact path = {route.path} 
			component = {route.component} 
			key = {i} 
		/>
	)

	navbar = () => {
		const { toggleNav } = this.props;
		const { clicked } = this.props.navbar;
		return <nav> 
      <div className = 'navbar' id = 'navbar-primary'>
			  <div>
			    <Link to = '/'> 
						<img className = 'nav-logo'
							src = './images/logo.svg'
							alt = ''
						/>
					</Link>
			  </div>
			  <div>
			  	<Link to = '/about_me'> ABOUT </Link>
					<Link to = '/contact'> CONTACT </Link>
					<Link to = '/'> PROJECTS </Link>	
			  	<Link to = '/resume'> RESUME </Link>
        </div>
        <div>
		  		<Link to = '//www.github.com/bandly93' target = '_blank'> GITHUB </Link>
		  		<Link to = '//www.linkedin.com/in/band-l-245493b6/' target = '_blank'> LINKEDIN </Link>
	      </div>
      </div>
      <div className = 'navbar' id = 'navbar-secondary'>
			  <div>
			    <Link to = '/'> 
						<img className = 'nav-logo' 
							src = './images/logo.svg'
							alt = ''
							onClick = {() => toggleNav({clicked:false})}
						/>
					</Link>
			  </div>
				<div>	
					<img className = {clicked?'off':'on'}
						src = './images/hamburger.svg' 
						id = 'hamburger-icon'
						alt = '' 
						onClick = {() => toggleNav({clicked:true})}/>
				</div>
			  <div className = {clicked?'on':'off'} onClick = {()=>toggleNav({clicked:false})}>
			  	<Link to = '/about_me'> ABOUT </Link>
					<Link to = '/contact'> CONTACT </Link>
					<Link to = '/'> PROJECTS </Link>
			  	<Link to = '/resume'> RESUME </Link>
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

const mapStateToProps = (state) => {
	return{
		navbar:state.navbarState,
	}
}

const mapDispatchToProps = {
	toggleNav,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));
