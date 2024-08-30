import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);


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
