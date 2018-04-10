import view from './viewModule.js';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	view,
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
