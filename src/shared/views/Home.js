import React, { Fragment,Component } from 'react';
import { homeOptions,aboutOptions } from '../data/homeOptions';

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			compact : true,
		}
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

	topHome = () => {	
		return homeOptions.map(({text,images},i) => (
			<div key = {i} className = 'slideDiv'>
				<img id = {'slide' + (i+1)} src = {images} alt = ''/>
				<p> {text} </p>
			</div>
		))
	}

	render(){
		return<div className = 'homepage'>
			<h1 id = 'portfolio-header'>   </h1>	
			<div className = 'portfolio-div'>
				<h1> My Portfolio...</h1>	
				{this.topHome()}
			</div>
			<div className = 'intro-div'>
				{this.intro()}
			</div>
		</div>
	}
}

export default Home;
