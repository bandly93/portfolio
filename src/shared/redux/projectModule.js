const SET_DEFAULT_PROJECT = 'SET_DEFAULT_PROJECT';
const UPDATE_CURRENT_PROJECT = 'UPDATE_CURRENT_PROJECT';

let initialState = {
	projectName:null 
}

export const updateProject = (data) => {
	return {
		type : UPDATE_CURRENT_PROJECT,
		data
	}
}

export const projectReducer = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_CURRENT_PROJECT:
			return {...state,...action.data};
		default:
			return state;
	}
}

export default projectReducer;
