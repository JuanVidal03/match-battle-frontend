import { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";

import { verifyTokenService } from "../services/auth.services.js";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const checkLogin = async() => {

            const cookies = Cookies.get();

            if(!cookies.token) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
            }

            try {

                const verifyToken = await verifyTokenService();
                if(!verifyToken.status || verifyToken.status !== 200){
                    setUser(null);
                    setIsAuthenticated(false);
                    return setLoading(false);
                }

                setUser(verifyToken.data);
                setIsAuthenticated(true);
                setLoading(false);

            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
            }
        }
        checkLogin();

    }, []);


    return (
        <AuthContext.Provider value={{
            user, 
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading
        }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
