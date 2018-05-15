export const TOGGLE_NAV = 'TOGGLE_NAV';

let initialState = {
	active:false,

}

export const toggleNav = (data) => {
	return{
		type:TOGGLE_NAV,
		data
	}
}

export const navbarReducer = (state = initialState,action) => {
	switch(action.type){
		case TOGGLE_NAV:
			return { ...state,...action.data}
		default:
			return state;
	}
}

export default navbarReducer;
