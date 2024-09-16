import axios from "./axios";

export const getAllCards = async() => {

    try {
        
        const response = await axios.get("/cards");
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        return error.message;
    }

}
