import axios from "./axios";

export const createPartida = async(partida) => {
    try {

        const response = await axios.post("/partida", partida);
        return response;
        
    } catch (error) {
        return error;
    }
}


export const getPartidaById = async(idPartida) => {
    try {
        
        const response = await axios.get(`/patida/${id}`);
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        return error
    }
}
