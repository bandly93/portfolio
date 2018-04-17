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
	},
	{
		path : '/projects',
		description : 'Projects',
		component : Project,
	},
	{
		path : '/about_me',
		description : 'About Me',
		component : About,
	},
	{
		path : '/contact',
		description : 'Contact',
		component : Contact,
	},
	{
		path : '/prof_docs',
		description : 'Resume / Cover Letter',
		component : ProfDocs,
	},
]
