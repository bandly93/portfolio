import React,{ Component,Fragment }  from 'react';

class Projects extends Component{
	
	list = (projects) => <Fragment>
		{
			projects.map((item,i) => <div key = {i} className = 'project'>
				<p>{item.title}</p>
				<img src = {item.img} alt = {item.title} height = '200' width = '200'/>
				<a href = {item.url} target = '_blank'> Click here to visit website! </a>
				<span> {item.description} </span>
			</div>
			)
		}
	</Fragment>
		
	render(){
		const projectOptions = [
			{
				url : '//www.volcanoboyz.com',
				img : 'https://cdn.vox-cdn.com/uploads/chorus_image/image/36244210/dscf0892__1_-2040.0.jpg',
				title : 'VB Productions',
				description: 'A fully-secured and responsive webpage for a multimedia production company.'
			},
			{
				url : '//www.sushi.com',
				img : 'https://i.pinimg.com/originals/00/4e/96/004e969d13d1cfdf7d0fd3df81385a74.jpg',
				title : 'Project 2',
				description : 'sushi blah blah blah',
			},
			{
				url : '//www.ramen.com',
				img : 'https://www.iceorrice.com/wp-content/uploads/2017/06/DSC02005.jpg',
				title : 'Project 3',
				description : 'ramen blah blah blah',
			},
		]
		
		return<Fragment>
			<div>{this.list(projectOptions)}</div>
		</Fragment>
	}	
}

export default Projects;	 
