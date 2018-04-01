
export const UPDATE_VIEW = 'UPDATE_VIEW';

export const updateView = (data) => {
	return {
		type : UPDATE_VIEW,
		data
	}
}
export const viewReducer = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_VIEW:
			return {...state,...action.data};
		default:
			return state;
	}
}

let initialState = {
	innerHeight:0,
	innerWidth:0,
}

export default viewReducer;