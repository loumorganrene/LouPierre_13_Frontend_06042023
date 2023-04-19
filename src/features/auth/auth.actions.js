export const requestLogin = "LOGIN_REQUEST"
export const successLogin = "LOGIN_SUCCESS"
export const failureLogin = "LOGIN_FAILURE"
export const actionLogout = "LOGOUT"

export const loginRequest = () => ({
    type: requestLogin,
});

export const loginSuccess = (token) => ({
    type: successLogin,
    payload: token,
});

export const loginFailure = (error) => ({
    type: failureLogin,
    payload: error,
});

export const logout = () => ({
    type: actionLogout,
});

