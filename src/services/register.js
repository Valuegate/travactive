import api from "./api";

export const register = async (userData) =>{
    const response = await api.post('/auths/register', userData);
    return response.data;
}