import React,{ Component,Fragment }  from 'react';
import { connect } from 'react-redux';
import { updateView } from '../redux/viewModule.js';
import { Document,Page } from 'react-pdf';

class ProfDocs extends Component{
	constructor(){
		super()
		this.state = {
			numPages :null,
			pageNumber : 1,
		}
	}
		
	onDocumentLoadSuccess = ({numPages }) => {
		this.setState ( {numPages });
	}
	render(){
		const { innerHeight,innerWidth} = this.props.view;
		const { pageNumber, numPages } = this.state;
		return<Fragment>
			<Document
				id = "react-canvas" 
				file = '../images/resume.pdf'
				onLoadSuccess = {this.onDocumentLoadSuccess}
			>
				<Page pageNumber ={pageNumber} />
			</Document>
		</Fragment>
	}	
}

const mapPropsToState = (state) => {
	return{
		view:state.view,
	}
}

const mapDispatchToProps = {
	updateView,
}

export default connect(mapPropsToState,mapDispatchToProps)(ProfDocs);
