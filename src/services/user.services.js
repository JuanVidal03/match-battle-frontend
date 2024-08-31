import axios from "./axios";

export const getAllUsers = async() => {
    try {

        const response = await axios.get("/users");
        return response;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}
