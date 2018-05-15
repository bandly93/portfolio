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
		this.setState({interval:true},()=>{
			slides.length > 1 ? this.carousel(index):null
		})
	}

	componentWillUnmount(){
		this.setState({interval:false},()=>{
			clearInterval(this.carousel())
		})	
	}
	
	intro = () => {
		return <Fragment>
			<h1> A Little About Me... </h1>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</Fragment>
	}

	siteInformationSlide = () => {	
		return homeOptions.map(({},i) => (
			<div key = {i} className = 'slideDiv'>
				<p>{homeOptions[i].text}</p>
				{homeOptions[i].images.map(({},j)=>(
					<img key = {j} src = {homeOptions[i].images[j]}/>
				))}
			</div>
			)
		)
	}

	carousel = (index) => {
		let x = document.getElementsByClassName('slideDiv');
		if(x.length > 0){
			for ( let i = 0 ; i < x.length ; i++){
				x[i].style.display = 'none';
			}
			index++
			if(index > x.length) {
				index = 1;
			}
			
			x[index-1].style.display = 'block';
			setTimeout(()=>this.carousel(index),8000);

				/* TEST */
			var d = new Date();
			console.log(d.getSeconds());
		}
	}

	render(){
		return<div className = 'homepage'>
			<div className = 'intro-div'>
				{this.intro()}
			</div>
			<div className = 'portfolio-div'>
				<h1> My Portfolio ... </h1>
				{this.siteInformationSlide()}
			</div>
		</div>
	}
}

export default Home;
