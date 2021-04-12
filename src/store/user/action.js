export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const actions = {};

actions.userRequest = () => ({ type: GET_USER_REQUEST });
actions.userSuccess = (payload) => ({ type: GET_USER_SUCCESS, payload });
actions.userFailed = (payload) => ({ type: GET_USER_FAILURE, payload });

export default actions;
