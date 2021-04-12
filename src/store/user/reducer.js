import { GET_USER_FAILURE, GET_USER_SUCCESS, GET_USER_REQUEST } from './action';

const initialState = {
	user: {},
	error: '',
	loading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				user: action.payload,
			};
		case GET_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
