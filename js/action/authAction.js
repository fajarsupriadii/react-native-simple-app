export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';

export const setAuthToken = (token, name) => ({
    type: SET_AUTH_TOKEN,
    payload: {
        token: token,
        name: name
    },
});

export const clearAuthToken = () => ({
    type: CLEAR_AUTH_TOKEN,
});