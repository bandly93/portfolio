export const UPDATE_DATA = 'UPDATE_DATA';

let initialState = {
	name : '',
	email : '',
	subject : '',
	message : '',
	isValidated : false,
}

export const updateData = (data) => {
	return{
		type : UPDATE_DATA,
		data
	}
}

export const emailReducer = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_DATA:
			return { ...state,...action.data};
		default :
			return state;
	}
}

export default emailReducer;
