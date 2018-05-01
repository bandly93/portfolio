import React,{ Component,Fragment }  from 'react';

class Projects extends Component{
	
	list = (projects) => <Fragment>
		{
			projects.map((item,i) => <div key = {i} className = 'project'>
				<h1>{item.title}</h1>
				<h5>{item.subTitle}</h5>
				<img src = {item.img} alt = {item.title} height = '250' width = '400'/>
				<p><a href = {item.url} target = '_blank'> Click here to visit website. </a></p>
				<p> {item.description} </p>
			</div>
			)
		}
	</Fragment>
		
	render(){
		const projectOptions = [
			{
				title:'VB Productions',
				subTitle:'Photography + Cinematography',
				img : 'https://cdn.vox-cdn.com/uploads/chorus_image/image/36244210/dscf0892__1_-2040.0.jpg',
				url : '//www.volcanoboyz.com',
				description: 'A fully-secured and responsive webpage for a multimedia production company.'
			},
			{
				url : '//www.google.com',
				img : 'http://via.placeholder.com/350x150',
				title : 'Project 2',
				subTitle:'Example',
				description : 'Example project that I will fill in later.',
			},
			{
				url : '//www.google.com',
				img : 'http://via.placeholder.com/350x150',
				title : 'Project 3',
				subTitle:'Example',
				description : 'Example project that I will fill in later.',
			},
		]
		
		return<Fragment>
			<div>{this.list(projectOptions)}</div>
		</Fragment>
	}	
}

export default Projects;	 
