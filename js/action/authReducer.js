import { SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN } from './authAction';

const initialState = {
    authToken: null,
    userName: null,
    urlBe: 'http://192.168.90.14:7017/api/',
    ytApiKey: 'AIzaSyCQP2ehDvnyk9hk0Y4buJ1jkJEyWVs219k',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload.token,
                userName: action.payload.name
            }
        case CLEAR_AUTH_TOKEN:
            return {
                ...state,
                authToken: null,
            };
        default:
            return state;
    }
};

export default authReducer;