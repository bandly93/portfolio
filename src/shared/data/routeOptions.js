import Project from '../views/Project.js';
import About from '../views/About.js';
import Contact from '../views/Contact.js';
import ProfDocs from '../views/ProfDocs.js';
import Home from '../views/Home.js';

export const RoutesArray = [
	{
		path : '/',
		component : Project,
	},
	{
		path : '/contact',
		component : Contact,
	},
	{
		path : '/about_me',
		component : Home,
	},	
	{
		path : '/resume',
		component : ProfDocs,
	},
]
