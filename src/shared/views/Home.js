import React, { Fragment,Component } from 'react';
import { homeOptions } from '../data/homeOptions';

class Home extends Component{
	
		
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
		let x = document.getElementsByClassName('slideDiv');
		for ( i = 0 ; i < x.length ; i++){
			x[i].style.display = 'none';
		}
		index++
		if(index > x.length) {
			index = 1;
		}
		
		x[index-1].style.display = 'block';
		setTimeout(()=>this.carousel(index),4000);
		
	}

	render(){
		let index = 0;
		let slides = document.getElementsByClassName('slideDiv');
		slides.length > 1 ? this.carousel(index):null	
		
		return<div className = 'home-div'>
			{this.banner()}
			<h1> My Portfolio ... </h1>
			{this.siteInformationSlide()}
		</div>
	}
}

export default Home;
