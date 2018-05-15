import view from './viewModule.js';
import contactForm from './emailModule.js';
import projectInfo from './projectModule.js';
import navbarState from './navbarModule.js';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	view,
	contactForm,
	projectInfo,
	navbarState,
})

export default function configureStore(preloadedState){
	return createStore(
		reducers,
		preloadedState,
		compose(
			applyMiddleware(thunk),
			typeof window !== 'undefined' &&
				window.devToolsExtension? window.devToolsExtension():f=>f
		)
	)
}
