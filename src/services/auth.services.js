import axios from "./axios.js";

export const loginService = async(credentials) => {
    try {
        
        const response = await axios.post("/login", credentials);
        return response;

    } catch (error) {
        return error;
    }
}

export const registerService = async(credentials) => {
    try {
        
        const response = await axios.post("/register", credentials);
        return response;

    } catch (error) {
        return error;
    }
}

export const verifyTokenService = async() => {
    try {
        
        const response = await axios.get("/verify-token");
        return response;

    } catch (error) {
        return error;
    }
}

export const logoutService = async(id) => {
    try {

        const response = await axios.post(`/logout/${id}`);
        return response;

    } catch (error) {
        return error;
    }
}
