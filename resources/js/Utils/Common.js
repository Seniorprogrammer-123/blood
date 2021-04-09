// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// return the token from the session storage
export const getPermission = () => {
    return sessionStorage.getItem('permission') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('permission');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user, permission) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('permission', permission);
    sessionStorage.setItem('user', JSON.stringify(user));
}