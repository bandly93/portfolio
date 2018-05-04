import Project from '../views/Project.js';
import About from '../views/About.js';
import Contact from '../views/Contact.js';
import ProfDocs from '../views/ProfDocs.js';
import Home from '../views/Home.js';

export const RoutesArray = [
	{
		path : '/',
		description : 'HOME',
		component : Home,
		id : 'home-item',
	},
	{
		path : '/contact',
		description : 'CONTACT',
		component : Contact,
		id : 'contact-item',
	},
	{
		path : '/projects',
		description : 'PROJECTS',
		component : Project,
		id : 'project-item',
	},	
	{
		path : '/prof_docs',
		description : 'RESUME',
		component : ProfDocs,
		id : 'resume-item',
	},
]
