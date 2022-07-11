import Api from '../api';

export const signUpService =async (credentials) =>{
    const api = new Api();
    let signupUrl = "/api/register"
    try {
        const data = await api.postLoginData(signupUrl, credentials);
        return data;
    } catch (error) {
        return error;
    }
}

export const loginService =async (credentials) =>{
    const api = new Api();
    let signupUrl = "/api/login"
    try {
        const data = await api.postLoginData(signupUrl, credentials);
        return data;
    } catch (error) {
       return error;
    }
}