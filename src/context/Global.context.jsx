import { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getAllUsers } from '../services/user.services';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [modalState, setModalState] = useState(false);
    const [users, setUsers] = useState([]);

    // get users
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        setLoading(true);

        const fetchUsers = async() => {
            try {
                
                const allUsers = await getAllUsers();
                setUsers(allUsers.data.data);
                setLoading(false);

            } catch (error) {
                toast.error(`Error al obtener los usuarios. ${error.message}`);
                setLoading(false);
            }
        }
        fetchUsers();

    }, []);


    // check if the partida end
    useEffect(() => {
        
        console.log("mapeando la partida");

    }, []);

    return (
        <GlobalContext.Provider value={{
            modalState,
            setModalState,
            setUsers,
            users,
            loading,
            setLoading
        }}>
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
