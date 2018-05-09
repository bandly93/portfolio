import React, { Fragment,Component } from 'react';
import { homeOptions } from '../data/homeOptions';

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			interval : false,
		}
	}

	componentDidMount(){
		let index = 0;
		let slides = document.getElementsByClassName('slideDiv');
		slides.length > 1 && !this.state.interval ? this.carousel(index):null	
	}	
		
	banner = () => {
		return <div>
			<h1> A Little About Me... </h1>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	}

	siteInformationSlide = () => {	
		return homeOptions.map(({},i) => (
			<div key = {i} className = 'slideDiv'>
				{homeOptions[i].text}
				{homeOptions[i].images.map(({},j)=>(
					<li key = {j}>{j}</li>

				))}
				
			</div>
			)
		)
	}

	carousel = (index) => {
		let i;
		this.setState({interval:true});
		let x = document.getElementsByClassName('slideDiv');
		for ( i = 0 ; i < x.length ; i++){
			x[i].style.display = 'none';
		}
		index++
		if(index > x.length) {
			index = 1;
		}
		
		x[index-1].style.display = 'block';
		setTimeout(()=>clearInterval(this.carousel(index)),8000);
		var d = new Date();
		console.log(d.getSeconds());
		
	}

	render(){
		return<Fragment>
			<div className = 'home-div'>
				{this.banner()}
			</div>
			<div className = 'portfolio-div'>
				<h1> My Portfolio ... </h1>
				{this.siteInformationSlide()}
			</div>
		</Fragment>
	}
}

export default Home;
