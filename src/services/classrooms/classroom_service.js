import Api from '../api';

export const getMeetingsService =async (credentials) =>{
    const api = new Api();
    let signupUrl = "meetings"
    try {
        const data = await api.postLoginData(signupUrl, credentials);
        return data;
    } catch (error) {
        return error;
    }
}

