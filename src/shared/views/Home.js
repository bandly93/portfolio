import React, { Fragment,Component } from 'react';
import { homeOptions,aboutOptions } from '../data/homeOptions';

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			interval : false,
			compact : true,
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

	handleClickToggle = () => {
		this.setState({compact:!this.state.compact})
	}
	
	intro = () => {
		const { compact } = this.state;
		return <Fragment>
			<h1> A Little About Me... </h1>
			<p>{aboutOptions[0].text}</p>
			<p>{aboutOptions[1].text}</p>	
			<button className = {compact?'inline':'none'} onClick = {this.handleClickToggle}> Read More! </button>
			<div className = {compact?'none':'inline'}>
				<p>{aboutOptions[2].text}</p>
				<p>{aboutOptions[3].text}</p>
				<p>{aboutOptions[4].text}</p>
				<button className = {compact?'none':'inline'} onClick = {this.handleClickToggle}> Close! </button>
			</div>
		</Fragment>
	}

	siteInformationSlide = () => {	
		return homeOptions.map(({},i) => (
			<div key = {i} className = 'slideDiv'>
				<p>{homeOptions[i].text}</p>
				{homeOptions[i].images.map(({},j)=>(
					<img key = {j} src = {homeOptions[i].images[j]} alt = ''/>
				))}
			</div>
			)
		)
	}

	carousel = (index) => {
		let slides = document.getElementsByClassName('slideDiv');
		if(slides.length > 0){
			for ( let i = 0 ; i < slides.length ; i++){
				slides[i].style.display = 'none';
			}
			index++
			if(index > slides.length) {
				index = 1;
			}
			
			slides[index-1].style.display = 'block';
			setTimeout(()=>this.carousel(index),8000);

				/* TEST */

			/*
			var d = new Date();
			console.log(d.getSeconds());
			*/
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
