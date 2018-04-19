import React,{ Component,Fragment }  from 'react';

class Projects extends Component{
	
	list = (projects) => <div>
		{
			projects.map((item,i) => <div key = {i}>
				<p>{item.title}</p>
				<img src = {item.img} alt = {item.title} height = '200' width = '200'/>
				<a href = {item.url}> Click here to visit website! </a>
			</div>
			)
		}
	</div>
		
	render(){
		const projectOptions = [
			{
				url : '//www.volcanoboyz.com',
				img : 'https://cdn.vox-cdn.com/uploads/chorus_image/image/36244210/dscf0892__1_-2040.0.jpg',
				title : 'Project 1',
			},
			{
				url : '//www.sushi.com',
				img : 'https://i.pinimg.com/originals/00/4e/96/004e969d13d1cfdf7d0fd3df81385a74.jpg',
				title : 'Project 2',
			},
			{
				url : '//www.ramen.com',
				img : 'https://www.iceorrice.com/wp-content/uploads/2017/06/DSC02005.jpg',
				title :'Project 3',
			},
		]
		
		return<Fragment>
			<div>{this.list(projectOptions)}</div>
		</Fragment>
	}	
}

export default Projects;	 
