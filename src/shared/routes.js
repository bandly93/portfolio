import Project from './views/Project.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import ProfDocs from './views/ProfDocs.js';
import Home from './views/Home.js';

export const RoutesArray = [
	{
		path : '/',
		description : 'Home',
		component : Home,
		id : 'home-item',
	},
	{
		path : '/projects',
		description : 'Projects',
		component : Project,
		id : 'project-item',
	},	
	{
		path : '/contact',
		description : 'Contact',
		component : Contact,
		id : 'contact-item',
	},
	{
		path : '/prof_docs',
		description : 'Resume',
		component : ProfDocs,
		id : 'resume-item',
	},
]
