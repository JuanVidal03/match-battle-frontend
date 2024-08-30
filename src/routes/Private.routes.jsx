import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Loader from '../components/loader/Loader.jsx';

import { AuthContext } from '../context/Auth.context.jsx';

const PrivateRoutes = () => {

    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading) return <Loader/>;
    if(!isAuthenticated && !loading) return <Navigate to="/login" replace/>;

    return <Outlet/>
}

export default PrivateRoutes;
