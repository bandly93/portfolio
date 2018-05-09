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
		return <div className ='home-div'>
			<h1> Little About Me </h1>
			<p> Self-taught freelance web developer. Majored in Business Management but passionate in problem solving, which then lead me to pursue computer science.</p>
		</div>
	}

	siteInformationSlide = () => {	
		return homeOptions.map(({},i) => (
			<p key = {i} className = 'slideDiv'>{homeOptions[i].text}</p>	
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
		return<div className = 'home-div'>
			{this.banner()}
			<div className = 'portfolio-div'>
				<h1> My Portfolio ... </h1>
				{this.siteInformationSlide()}
			</div>
		</div>
	}
}

export default Home;
